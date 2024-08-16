import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    fetchData,
  };
};

export default useFetch;
