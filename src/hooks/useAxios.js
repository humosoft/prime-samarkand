import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TranslationContext } from "../context/TranslationContext";
// import { useTranslation } from "react-i18next";

export default function useAxios({
  endpoint,
  params,
  method = "GET",
  headers,
  body,
}) {
  const { lang } = useContext(TranslationContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios({
        method: method,
        url: endpoint,
        params: params,
        headers: headers,
        data: body,
      });
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    return new Promise((resolve, reject) => {
      resolve(data);
      reject(error);
    });
  }

  return {
    response: data,
    loading,
    error,
    fetchData,
  };
}
