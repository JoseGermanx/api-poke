import { useState, useEffect } from "react";

const Data = (url) => {
  const [result, setResult] = useState({ loading: true, data: null });
  
  useEffect(() => {
    getData(url);
  }, [url]);

  async function getData(url) {
    try {
      setResult({ loading: true, data: null });
      const response = await fetch(url);
      const data = await response.json();
      setResult({ loading: false, data });
    } catch (error) {
      console.log(error);
    }
  }

  return result;
};

export default Data;
