import { useCallback, useEffect, useRef, useState } from "react";
import { CATS_LISTING_API_URL } from "../constants/data";
import useFetchCats from "../hooks/useFetchCats";

const CatCard = ({
  image,
  name,
  origin,
  description,
  temperament,
  wikipedia_url,
  life_span,
}) => {
  return (
    <div className="min-w-96 min-h-1/3 my-auto rounded-2xl overflow-hidden flex flex-col">
      <div className="max-h-1/2 h-96 ">
        <img
          src={image}
          width="100%"
          height="100%"
          className="h-full"
          alt={name}
        />
      </div>
      <div className="h-1/2 p-4 bg-white flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p>{description}</p>
        <div className="flex font-semibold">
          <p className="w-1/2">Origin </p>
          <p className="w-1/2 text-gray-500">{origin}</p>
        </div>

        <p className="font-semibold">Temperament</p>
        <div className="flex justify-start items-center gap-2 overflow-x-auto px-1">
          {temperament.split(",").map((item, i) => (
            <div
              key={`temprament-${i}`}
              className="bg-gray-200 text-black rounded-xl px-2 text-sm"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex font-semibold">
          <p className="w-1/2">Life Span </p>
          <p className="w-1/2 text-gray-500">{`${life_span} years`}</p>
        </div>
        <a
          href={wikipedia_url}
          target="_blank"
          rel="noreferrer"
          className="text-violet-400"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

const CatsListing = () => {
  const [page, setPage] = useState(1);
  const { data, loading, hasMore } = useFetchCats(CATS_LISTING_API_URL, page);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth && hasMore && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    }
  }, [hasMore, loading]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading, hasMore, handleScroll]);

  return (
    <div className="w-screen p-4">
      <h1 className="text-4xl m-2 text-white font-bold mb-4">Cats Around Us</h1>
      <div
        className="w-full flex justify-center items-center gap-2 p-4 overflow-x-auto"
        ref={scrollRef}
      >
        {data?.length > 0 &&
          data?.map((cat, i) => {
            return <CatCard key={i} {...cat} />;
          })}
      </div>
      {loading && <p className="text-white">Loading more cats...</p>}
    </div>
  );
};

export default CatsListing;
