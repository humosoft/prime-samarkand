import React, { useContext } from "react";
import { GlobalContentContext } from "../../context/GlobalContentContext";
import { TranslationContext } from "../../context/TranslationContext";

import FooterMenu from "../footer/FooterMenu";

const FooterWidget = () => {
  const { translations } = useContext(TranslationContext);
  const { global } = useContext(GlobalContentContext);

  return (
    <div className="footer-widgets">
      <div className="footer-widget-area d-flex flex-wrap">
        <div className="widget">
          <h5 className="widget-title">{translations?.footerAboutUs}</h5>

          <p>{translations?.footerSubtitle}</p>
        </div>

        <div className="widget">
          <h5 className="widget-title">{translations?.footerMenu}</h5>

          <FooterMenu />
        </div>

        <div className="widget">
          <h5 className="widget-title">{translations?.footerContacts}</h5>

          <p>{global?.address}</p>

          <p>
            <a href={`mailto:${global?.email}`}>{global?.email}</a>
          </p>

          <p>{global?.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterWidget;
