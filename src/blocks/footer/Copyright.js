import React, { useContext } from "react";
import { TranslationContext } from "../../context/TranslationContext";

const Copyright = () => {
  const { translations } = useContext(TranslationContext);
  return (
    <div className="copyright">
      <p>{translations?.footerCopyright}</p>
    </div>
  );
};

export default Copyright;
