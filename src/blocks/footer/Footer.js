import React, { useContext } from "react";

import Copyright from "../footer/Copyright";
import FooterWIdget from "../footer/FooterWIdget";
import FooterMenuSecondary from "../footer/FooterMenuSecondary";
import { SERVER_URL } from "../../helpers/constants";
import { GlobalContentContext } from "../../context/GlobalContentContext";

const Footer = () => {
  const { global } = useContext(GlobalContentContext);
  
  return (
    <footer id="footer" className="site-footer">

      <div className="wrapper">
        <FooterWIdget />

        <div className="footer">
          <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
            <div className="align-self-center">
              <div className="logo logo-secondary">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  width="90"
                  src={`${SERVER_URL}${global?.logo?.data?.attributes?.url}`}
                  alt={global?.title}
                />
              </div>
            </div>

            <div className="align-self-center">
              <Copyright />
            </div>

            <div className="align-self-center">
              <FooterMenuSecondary />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
