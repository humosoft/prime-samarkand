import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";
import { Link } from "react-scroll";

class FooterMenu extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <TranslationContext.Consumer>
        {({ translations }) => (
          <nav className="menu-primary">
            <ul className="nav">
              <li className="nav-item" id="nav-services">
                <Link to="services" href="#services">
                  {translations?.services}
                </Link>
              </li>

              <li className="nav-item" id="nav-about-us">
                <Link to="about-us" href="#about-us">
                  {translations?.aboutUs}
                </Link>
              </li>

              <li className="nav-item" id="nav-why-us">
                <Link to="why-us" href="#why-us">
                  {translations?.whyUs}
                </Link>
              </li>

              <li className="nav-item" id="nav-gallery">
                <Link to="gallery" href="#gallery">
                  {translations?.gallery}
                </Link>
              </li>

              <li className="nav-item" id="nav-news">
                <Link to="news" href="#news">
                  {translations?.news}
                </Link>
              </li>

              <li className="nav-item" id="nav-contacts">
                <Link to="contacts" href="#contacts">
                  {translations?.contacts}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </TranslationContext.Consumer>
    );
  }
}

export default withRouter(FooterMenu);
