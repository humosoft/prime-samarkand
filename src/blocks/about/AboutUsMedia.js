import React, { Component } from "react";
import { TranslationContext } from "../../context/TranslationContext";
import { SERVER_URL } from "../../helpers/constants";

class AboutUsMedia extends Component {
  static contextType = TranslationContext;
  constructor() {
    super();
    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    document.documentElement.classList.add("swipebox-no-touch");
  }

  handleClick() {
    document.documentElement.classList.add("swipebox-html");
    document.body.style.overflow = "hidden";

    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });

    document.documentElement.classList.remove("swipebox-html");
    document.body.style.overflow = "auto";
  }

  render() {
    const url = this.props.youtubeUrl;

    return (
      <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 align-self-center">
        <div className="embed">
          <div className="embed-image-overlay">
            <div className="embed-click swipebox" onClick={this.handleClick}>
              <div className="embed-center">
                <div className="embed-play">
                  <i className="fas fa-play"></i>
                </div>

                <p>{this.context.translations?.howWeWork}</p>
              </div>
            </div>

            <div
              id="swipebox-overlay"
              style={{ display: this.state.open ? "block" : "none" }}>
              <div id="swipebox-container">
                <div id="swipebox-slider" style={{ display: "block" }}>
                  <div className="slide">
                    <div
                      className="swipebox-video-container"
                      style={{ maxWidth: "1140px" }}>
                      <div className="swipebox-video">
                        <iframe
                          title="video"
                          allowFullScreen
                          frameBorder="0"
                          src={url}></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="swipebox-close" onClick={this.close}></div>
              </div>
            </div>

            <div className="embed-image img-blur">
              <div className="img object-fit size-2">
                <div className="object-fit-cover">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img
                    src={`${SERVER_URL}${this.props.image}`}
                    alt={this.context.translations?.aboutUs}
                  />
                </div>
              </div>
            </div>

            <div className="embed-bg"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsMedia;
