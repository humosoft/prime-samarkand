import React, { Component } from "react";
import { Link } from "react-scroll";
import { TranslationContext } from "../../context/TranslationContext";

class HomeHeaderMenuPrimary extends Component {
  static contextType = TranslationContext;

  constructor() {
    super();
    this.state = {
      over: false,
      pushed: false,
    };

    this.scrollEvent = this.scrollEvent.bind(this);
    this.set = this.set.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEvent, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEvent, { passive: true });
  }

  removeActive() {
    if (document.querySelector(".active")) {
      let actives = document.querySelector(".active");

      if (actives !== null) {
        actives.classList.remove("active");
      }
    }
  }

  scrollEvent() {
    let offset = 76;
    const offsets = [];
    const link_names = [];

    offsets.push(document.getElementById("services").offsetTop);
    offsets.push(document.getElementById("about-us").offsetTop);
    offsets.push(document.getElementById("why-us").offsetTop);
    offsets.push(document.getElementById("gallery").offsetTop);
    offsets.push(document.getElementById("news").offsetTop);
    offsets.push(document.getElementById("contacts").offsetTop);

    link_names.push(document.getElementById("nav-services"));
    link_names.push(document.getElementById("nav-about-us"));
    link_names.push(document.getElementById("nav-why-us"));
    link_names.push(document.getElementById("nav-gallery"));
    link_names.push(document.getElementById("nav-news"));
    link_names.push(document.getElementById("nav-contacts"));

    if (!this.state.pushed) {
      if (window.scrollY < offsets[0]) {
        this.removeActive();
      }

      for (let i = 0; i < offsets.length; i++) {
        if (window.scrollY + offset > offsets[i]) {
          this.removeActive();
          link_names[i].classList.add("active");
        }
      }
    }
  }

  handleClick(e) {
    this.setState({ pushed: true });
    this.removeActive();

    let active = e.target;
    active.parentNode.classList.add("active");

    setTimeout(this.set, 800);
  }

  set() {
    this.setState({ pushed: false });
  }

  render() {
    return (
      <nav className="menu-primary">
        <ul className="nav">
          <li className="nav-item" id="nav-services">
            <Link
              to="services"
              href="#services"
              onClick={(e) => this.handleClick(e)}>
              {this.context?.translations?.services}
            </Link>
          </li>

          <li className="nav-item" id="nav-about-us">
            <Link
              to="about-us"
              onClick={(e) => this.handleClick(e)}
              href="#about-us">
              {this.context?.translations?.aboutUs}
            </Link>
          </li>

          <li className="nav-item" id="nav-why-us">
            <Link
              to="why-us"
              onClick={(e) => this.handleClick(e)}
              href="#why-us">
              {this.context?.translations?.whyUs}
            </Link>
          </li>

          <li className="nav-item" id="nav-gallery">
            <Link
              to="gallery"
              onClick={(e) => this.handleClick(e)}
              href="#gallery">
              {this.context?.translations?.gallery}
            </Link>
          </li>
          

          <li className="nav-item" id="nav-news">
            <Link
              to="news"
              onClick={(e) => this.handleClick(e)}
              href="#news">
              {this.context?.translations?.news}
            </Link>
          </li>

          <li className="nav-item" id="nav-contacts">
            <Link
              to="contacts"
              onClick={(e) => this.handleClick(e)}
              href="#contacts">
              {this.context?.translations?.contacts}
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default HomeHeaderMenuPrimary;
