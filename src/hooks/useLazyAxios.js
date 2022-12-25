import axios from "axios";
import { useState } from "react";

export default function useLazyAxios({ endpoint, method = "GET", headers }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  async function fetchData({ params, fMethod, fHeaders, body }) {
    try {
      setLoading(true);
      const response = await axios({
        method: fMethod || method,
        url: endpoint,
        params: params,
        headers: fHeaders || headers,
        data: body,
      });
      setData(response);
      setLoading(false);
      return new Promise((resolve) => {
        resolve(response);
      });
    } catch (error) {
      setError(error);
      setLoading(false);
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  return {
    response: data,
    loading,
    error,
    fetchData,
  };
}