import React, { useContext } from "react";
import { Link } from "react-scroll";
import { TranslationContext } from "../../context/TranslationContext";

const ModalMenuHome = () => {
  const { translations } = useContext(TranslationContext);

  const modalOff = () => {
    let e = document.getElementById("close-modal");

    if (e) {
      e.click();
    }
  };

  return (
    <nav className="menu-primary">
      <ul className="list-unstyled">
        <li className="nav-item">
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={300}
            onClick={modalOff}
            href="#">
            {translations?.services}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="about-us"
            spy={true}
            smooth={true}
            duration={300}
            onClick={modalOff}
            href="#">
            {translations?.aboutUs}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="why-us"
            spy={true}
            smooth={true}
            duration={300}
            onClick={modalOff}
            href="#">
            {translations?.whyUs}
          </Link>
        </li>

        <li className="nav-item nav-item-has-children dropdown-child-click-effect">
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            duration={300}
            onClick={modalOff}
            href="#">
            {translations?.gallery}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="news"
            spy={true}
            smooth={true}
            duration={300}
            onClick={modalOff}
            href="#">
            {translations?.news}
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={300}
            onClick={modalOff}
            href="#">
            {translations?.contacts}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ModalMenuHome;
