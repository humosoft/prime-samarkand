import React, { useContext } from "react";
import { languages, TranslationContext } from "../context/TranslationContext";
import LanguageSelector from "./button/LanguageSelector";

export default function LanguagePicker() {
  const { lang, changeLang } = useContext(TranslationContext);

  function handleLangChange(evt, lang) {
    evt.preventDefault();

    changeLang(lang)
  }

  return (
    <nav className="languages">
      <ul className="nav">
        {languages.map((l) => (
          <LanguageSelector
            key={l}
            onChange={(evt) => handleLangChange(evt, l)}
            title={l}
            className={lang === l ? "current-lang" : ""}
          />
        ))}
      </ul>
    </nav>
  );
}
