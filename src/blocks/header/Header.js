import React, { useContext, useEffect } from "react";

import HeaderLogo from "../logo/HeaderLogo";
import MenuModal from "../../components/modal/MenuModal";
import HomeHeaderMenuPrimary from "./HomeHeaderMenuPrimary";
import { Link, useLocation } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";

const Header = () => {
  const { translations } = useContext(TranslationContext);
  const location = useLocation();

  useEffect(() => {
    const header = document.getElementById("header");

    window.addEventListener(
      "scroll",
      function (event) {
        if (window.scrollY > 50) {
          document.body.classList.add("header-fixed");
          header.classList.add("animated");
          header.classList.add("slideInDown");
        } else {
          document.body.classList.remove("header-fixed");
          header.classList.remove("animated");
          header.classList.remove("slideInDown");
        }
        document.body.style.setProperty(
          "--header-height",
          `${header.getBoundingClientRect().height}px`
        );
      },
      false
    );
  }, [location]);

  return (
    <header id="header" className="site-header">
      <div className="wrapper d-flex justify-content-between">
        <div className="header-left align-self-center">
          <HeaderLogo />
        </div>

        <div className="header-center align-self-center">
          <div className="menu d-flex justify-content-center">
            <HomeHeaderMenuPrimary />
          </div>
        </div>

        <div className="header-right d-flex justify-content-end">
          <div className="actions align-self-center">
            <div className="d-flex">
              <div className="action align-self-center">
                <Link
                  to="/send-resume"
                  className="d-flex btn btn-link border-0 p-0 min-w-auto transform-scale-h icon-active">
                  <i className="fas fas-space-r fa-file-alt"></i>
                  {translations?.sendResume}
                </Link>
              </div>
            </div>
          </div>

          <MenuModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
