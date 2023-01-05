import React, { Component } from "react";
import { DynamicLink as Link } from "../../components/DynamicLink";
import {Link as RouterLink} from "react-router-dom"
import { TranslationContext } from "../../context/TranslationContext";

class HomeHeaderMenuPrimary extends Component {
  static contextType = TranslationContext;

  render() {
    return (
      <nav className="menu-primary">
        <ul className="nav">
          <li className="nav-item" id="nav-services">
            <Link to="#services" href="#services">{this.context?.translations?.services}</Link>
          </li>

          <li className="nav-item" id="nav-about-us">
            <Link to="/" href="#about-us">
              {this.context?.translations?.aboutUs}
            </Link>
          </li>

          <li className="nav-item" id="nav-why-us">
            <Link to="/" href="#why-us">
              {this.context?.translations?.whyUs}
            </Link>
          </li>

          <li className="nav-item" id="nav-gallery">
            <Link to="/" href="#gallery">
              {this.context?.translations?.gallery}
            </Link>
          </li>

          <li className="nav-item" id="nav-news">
            <RouterLink to="/news">
              {this.context?.translations?.news}
            </RouterLink>
          </li>

          <li className="nav-item" id="nav-contacts">
            <Link to="/" href="#contacts">
              {this.context?.translations?.contacts}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomeHeaderMenuPrimary;
