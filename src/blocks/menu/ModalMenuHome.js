import React, { useContext } from "react";
import { DynamicLink as Link } from "../../components/DynamicLink";
import { TranslationContext } from "../../context/TranslationContext";

const ModalMenuHome = ({ onClick }) => {
  const { translations } = useContext(TranslationContext);

  const modalOff = () => {
    onClick();
  };

  return (
    <nav className="menu-primary">
      <ul className="list-unstyled">
        <li className="nav-item">
          <Link
            to="services"
            onClick={modalOff}
            href="#services">
            {translations?.services}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="about-us"
            onClick={modalOff}
            href="#about-us">
            {translations?.aboutUs}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="why-us"
            onClick={modalOff}
            href="#why-us">
            {translations?.whyUs}
          </Link>
        </li>

        <li className="nav-item nav-item-has-children dropdown-child-click-effect">
          <Link
            to="gallery"
            onClick={modalOff}
            href="#gallery">
            {translations?.gallery}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="news"
            onClick={modalOff}
            href="#news">
            {translations?.news}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="contacts"
            onClick={modalOff}
            href="#contacts">
            {translations?.contacts}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ModalMenuHome;
