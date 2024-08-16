import { useEffect, useState } from "react";

const useFetchCats = (url, page = 1) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}?page=${page}&limit=4`);
      const result = await response.json();
      if (result?.data?.data?.length > 0) {
        setData((prevData) => [...prevData, ...result.data.data]);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return { data, loading, hasMore, fetchData };
};

export default useFetchCats;
