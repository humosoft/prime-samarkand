import React from "react";

import Copyright from "../footer/Copyright";
import FooterWIdget from "../footer/FooterWIdget";
import FooterMenuSecondary from "../footer/FooterMenuSecondary";
import ScrollToTop from "../../components/scroll/ScrollToTop";

const Footer = () => {
  return (
    <footer id="footer" className="site-footer">
      <ScrollToTop />

      <div className="wrapper">
        <FooterWIdget />
    
        <div className="footer">
          <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
            <div className="align-self-center">
              <div className="logo logo-secondary">
                <img src="assets/img/logo/logo-2-light.svg" alt="Logo" />
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
