import React, { useState } from "react";
import { createContext, useEffect } from "react";
import normalizeTranslation from "../helpers/normalizeTranslations";
import useLazyAxios from "../hooks/useLazyAxios";

export const TranslationContext = createContext();
export const languages = ["en", "uz", "ru"];

export default function TranslationProvider(props) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const { loading, response, fetchData } = useLazyAxios({
    endpoint: "/translation",
  });

  useEffect(() => {
    fetchData({
      params: {
        locale: lang,
        populate: "*",
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  function changeLang(l) {
    if (!languages.includes(l)) return;

    localStorage.setItem("lang", l);
    setLang(l);
  }

  return (
    <TranslationContext.Provider
      value={{ loading, translations: normalizeTranslation(response?.data?.data?.attributes?.translations), lang, changeLang }}
      {...props}
    />
  );
}
