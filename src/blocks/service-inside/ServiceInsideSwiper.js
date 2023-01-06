import React, { Component } from "react";
import Swiper from "swiper";

import { SERVER_URL } from "../../helpers/constants";

class ServiceInsideSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      index: 1,
      xPos: "",
      images: this.props.images?.map((x) => ({
        id: x.id,
        imgLink: `${SERVER_URL}${x.attributes?.formats?.large?.url}`,
        alt: x.alternativeText,
      }))
    };

    this.swipeLeft = this.swipeLeft.bind(this);
    this.swipeRight = this.swipeRight.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    window.addEventListener(
      "keydown",
      (e) => {
        if (this.state.open) {
          if (e.keyCode === 37 && this.state.xPos !== 0) {
            this.swipeLeft();
          }

          if (e.keyCode === 39 && this.state.index < this.state.images.length) {
            this.setState({ xPos: this.state.xPos - 100 });
            this.setState({ index: this.state.index + 1 });
          }

          if (e.keyCode === 27) {
            this.close();
          }
        }
      },
      false
    );

    let swiper_galleryThumbs = new Swiper(".swiper-container.gallery-thumbs", {
      slidesPerView: 5,
      spaceBetween: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        1199: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      },
    });

    new Swiper(".swiper-container.gallery-top", {
      spaceBetween: 0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper_galleryThumbs,
      },
    });
  }

  handleClick(e, key, GalleryListData) {
    document.documentElement.classList.add("swipebox-html");
    document.body.style.overflow = "hidden";

    this.setState({
      index: key + 1,
      xPos: (key + 1) * -100 + 100,
    });

    if (key === 0) {
      document.getElementById("swipebox-prev").classList.add("disabled");
    }

    if (key === GalleryListData.length - 1) {
      document.getElementById("swipebox-next").classList.add("disabled");
    }

    this.setState({
      open: !this.state.open,
    });
  }

  swipeLeft() {
    document.getElementById("swipebox-prev").classList.remove("disabled");
    document.getElementById("swipebox-next").classList.remove("disabled");

    this.setState({ xPos: this.state.xPos + 100 });
    this.setState({ index: this.state.index - 1 });

    if (this.state.xPos === -100) {
      document.getElementById("swipebox-prev").classList.add("disabled");
    }

    if (this.state.xPos === 0) {
      document.getElementById("swipebox-prev").classList.add("disabled");
      this.setState({ xPos: this.state.xPos });
      this.setState({ index: this.state.index });
    }
  }

  swipeRight() {
    document.getElementById("swipebox-next").classList.remove("disabled");
    document.getElementById("swipebox-prev").classList.remove("disabled");

    this.setState({ xPos: this.state.xPos - 100 });
    this.setState({ index: this.state.index + 1 });

    if (this.state.xPos === this.state.images.length * -100 + 200) {
      document.getElementById("swipebox-next").classList.add("disabled");
    }

    if (this.state.xPos === this.state.images.length * -100 + 100) {
      document.getElementById("swipebox-next").classList.add("disabled");
      this.setState({ xPos: this.state.xPos });
      this.setState({ index: this.state.index });
    }
  }

  close() {
    this.setState({ open: false });

    if (
      document.getElementById("swipebox-prev").classList.contains("disabled")
    ) {
      document.getElementById("swipebox-prev").classList.remove("disabled");
    }
    if (
      document.getElementById("swipebox-next").classList.contains("disabled")
    ) {
      document.getElementById("swipebox-next").classList.remove("disabled");
    }

    document.documentElement.classList.remove("swipebox-html");
    document.body.style.overflow = "auto";
  }

  render() {
    const images = this.state.images;

    if (!this.state.images?.length) return null;

    return (
      <div className="gallery style-default">
        <div className="swiper-container gallery-top">
          <div className="swiper-wrapper">
            {images.map((item, key) => {
              return (
                <div
                  key={key}
                  id={"top-slide-" + item.id}
                  className="swiper-slide">
                  <div
                    className="swipebox"
                    onClick={(e) => this.handleClick(e, key, images)}
                    rel="gallery">
                    <div className="img object-fit">
                      <div className="object-fit-cover">
                        <img src={item.imgLink} alt={item.alt} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="swiper-button-next swiper-button-white">
            <i className="fas fa-chevron-right"></i>
          </div>

          <div className="swiper-button-prev swiper-button-white">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>

        <div className="swiper-container gallery-thumbs">
          <div className="swiper-wrapper">
            {images.map((item, key) => {
              return (
                <div key={key} value={item.id} className="swiper-slide">
                  <div className="img object-fit">
                    <div className="object-fit-cover">
                      <img src={item.imgLink} alt={item.alt} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          id="swipebox-overlay"
          style={{ display: this.state.open ? "block" : "none" }}>
          <div id="swipebox-container">
            <div
              id="swipebox-slider"
              style={{
                display: "block",
                transform: `translate3d( ${this.state.xPos}%, 0px, 0px)`,
              }}>
              {images &&
                images.map((image, key) => {
                  return (
                    <div
                      key={key}
                      className={
                        "slide " +
                        (this.state.index === image.id ? " current" : " ")
                      }>
                      <img src={image.imgLink} alt={image.alt} />
                    </div>
                  );
                })}
            </div>

            <div id="swipebox-top-bar">
              <div id="swipebox-title">{images[this.state.index - 1]?.alt}</div>
            </div>

            <div id="swipebox-bottom-bar">
              <div id="swipebox-arrows">
                <div id="swipebox-prev" onClick={this.swipeLeft}></div>
                <div id="swipebox-next" onClick={this.swipeRight}></div>
              </div>
            </div>

            <div id="swipebox-close" onClick={this.close}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceInsideSwiper;
