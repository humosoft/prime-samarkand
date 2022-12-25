import React from "react";
import scriptLoader from "react-async-script-loader";
import GoogleMapsStyle from "../../data/google-maps/googleMapsStyle";

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
  }

  UNSAFE_componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (isScriptLoaded && !this.props.isScriptLoaded) {
      const address_latlng = new window.google.maps.LatLng(
        50.2252771,
        5.3998544
      );

      if (isScriptLoadSucceed) {
        this.map = new window.google.maps.Map(this.mapRef.current, {
          center: address_latlng,
          zoom: 4,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false,
          styles: GoogleMapsStyle,
        });

        function AdveitsMarker(center_latlng, map, args) {
          this.latlng = center_latlng;
          this.args = args;
          this.setMap(map);
        }

        AdveitsMarker.prototype = new window.google.maps.OverlayView();

        AdveitsMarker.prototype.draw = function () {
          let self = this;
          let div = this.div;

          if (!div) {
            this.div = document.createElement("div");
            this.div.setAttribute("class", "adv-pin");
            this.div.innerHTML = `
                            <div class="shadow"></div>
                                <div class="pulse"></div>
                                <div class="pin-wrap">
                                <div class="pin"></div>
                            </div>
                        `;

            div = this.div;
            this.pinWrap = this.div.getElementsByClassName("pin-wrap");
            this.pin = this.div.getElementsByClassName("pin");
            this.pinShadow = this.div.getElementsByClassName("shadow");

            div.style.position = "absolute";
            div.style.cursor = "pointer";

            if (typeof self.args.place_id !== "undefined") {
              div.dataset.placeid = self.args.place_id;
            }

            let location = document.querySelector(
              '[data-placeid="' + div.dataset.placeid + '"]'
            );

            window.google.maps.event.addDomListener(div, "click", () => {
              location.click();
            });

            let panes = this.getPanes();

            panes.overlayImage.appendChild(div);
          }

          let point = this.getProjection().fromLatLngToDivPixel(this.latlng);

          if (point) {
            div.style.left = point.x + "px";
            div.style.top = point.y + "px";
          }
        };

        AdveitsMarker.prototype.remove = function () {
          if (this.div) {
            this.div.parentNode.removeChild(this.div);
            this.div = null;
          }
        };

        AdveitsMarker.prototype.getPosition = function () {
          return this.latlng;
        };

        const geocoder = new window.google.maps.Geocoder();

        const address = ["Germany", "Italy", "Lithuania"];

        for (let i = 0; i < address.length; i++) {
          let map = this.map;
          geocoder.geocode({ address: address[i] }, function (results, status) {
            if (status === "OK") {
              new AdveitsMarker(
                results[0].geometry.location,

                map,
                {
                  place_id: results[0].place_id,
                }
              );
            }
          });
        }
      } else this.props.onError();
    }
  }

  render() {
    return <div id="google-maps" ref={this.mapRef}></div>;
  }
}

export default scriptLoader([
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyD9TrJVxlYSCKv8WHGcR2fHTg-Ltx1beWU",
])(Maps);
