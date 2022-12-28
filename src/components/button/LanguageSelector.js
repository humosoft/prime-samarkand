import React, { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

const LanguageSelector = (props) => {
  const {translations} = useContext(TranslationContext)
  return (
    <li className={`lang-item ${props.className}`}>
      <a title={translations?.[props.title]} onClick={props.onChange} href={"/"}>
        {translations?.[props.title]}
      </a>
    </li>
  );
};

export default LanguageSelector;
