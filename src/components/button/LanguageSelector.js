import React from "react";

const LanguageSelector = (props) => {
  return (
    <li className={`lang-item ${props.className}`}>
      <a title={props.title} onClick={props.onChange} href={"/"}>
        {props.title}
      </a>
    </li>
  );
};

export default LanguageSelector;
