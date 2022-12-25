import React, { useContext } from "react";
import { createContext, useEffect } from "react";
import useLazyAxios from "../hooks/useLazyAxios";
import { TranslationContext } from "./TranslationContext";

export const GlobalContentContext = createContext();

export default function GlobalContentProvider(props) {
  const { loading, response, fetchData } = useLazyAxios({
    endpoint: "/global",
  });
  const { lang } = useContext(TranslationContext);

  useEffect(() => {
    fetchData({
      params: {
        locale: lang,
        populate: "*",
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  return (
    <GlobalContentContext.Provider
      value={{
        loading,
        global: response?.data?.data?.attributes,
        lang,
      }}
      {...props}
    />
  );
}
