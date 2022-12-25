import React, { useContext } from "react";

import HeaderLogo from "../logo/HeaderLogo";
import MenuModal from "../../components/modal/MenuModal";
import HomeHeaderMenuPrimary from "./HomeHeaderMenuPrimary";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";

const Header = () => {
  const { translations } = useContext(TranslationContext);
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
                  to="send-resume"
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
