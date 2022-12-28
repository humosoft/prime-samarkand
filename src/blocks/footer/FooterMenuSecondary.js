import React, { useContext } from "react";
import { GlobalContentContext } from "../../context/GlobalContentContext";

const icons = {
    facebook: "fab fa-facebook-f",
    youtube: "fab fa-youtube",
    telegram: "fab fa-telegram",
    instagram: "fab fa-instagram"
}

const FooterMenuSecondary = () => {
  const { global } = useContext(GlobalContentContext);
  return (
    <nav className="menu-secondary">
      <ul className="nav list-unstyled">
        {global?.social?.length > 0 &&
          global?.social?.map((social) => (
            <li key={social.id} className="nav-item">
              <a target="_blank" rel="noopener noreferrer" href={social.link}>
                <i className={icons[social.network]}></i>
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default FooterMenuSecondary;
