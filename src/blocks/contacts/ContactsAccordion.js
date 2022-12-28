import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Accordion, Card, Button } from "react-bootstrap";
import { GlobalContentContext } from "../../context/GlobalContentContext";

class ContactsAccordion extends Component {
  static contextType = GlobalContentContext;
  constructor(props) {
    super(props);
    this.state = {
      active1: false,
      active2: false,
      active3: false,
    };
  }

  clickHandler1(e) {
    this.setState({
      active1: !this.state.active1,
      active2: false,
      active3: false,
    });
  }

  clickHandler2(e) {
    this.setState({
      active2: !this.state.active2,
      active1: false,
      active3: false,
    });
  }

  clickHandler3(e) {
    this.setState({
      active3: !this.state.active3,
      active1: false,
      active2: false,
    });
  }

  componentDidMount() {
    let box = document.getElementById("maps-information");

    if (window.innerWidth < 1200) {
      box.style.overflow = "hidden";
    } else {
      box.style.overflow = "initial";
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div id="maps-information" className="maps-information">
          <Scrollbars
            autoHeight
            autoHeightMin={0}
            autoHeightMax={449}
            thumbMinSize={30}
            style={{
              width:
                this.state.active1 || this.state.active2 || this.state.active3
                  ? "102%"
                  : "100%",
            }}
            renderThumbVertical={({ style, ...props }) => (
              <div
                {...props}
                style={{
                  ...style,
                  backgroundColor: "#414258",
                  opacity:
                    this.state.active1 ||
                    this.state.active2 ||
                    this.state.active3
                      ? 1
                      : 0,
                }}
              />
            )}>
            <Accordion
              id="accordion-maps"
              style={{
                width:
                  this.state.active1 || this.state.active2 || this.state.active3
                    ? "98%"
                    : "100%",
              }}>
              {this.context.global?.office?.map((office, i) => (
                <Card key={office.id}>
                  <Card.Header id={`heading-${i + 1}`}>
                    <Accordion.Toggle
                      as={Button}
                      style={{ color: "#414258" }}
                      onClick={(e) => this.clickHandler3(e)}
                      variant="link"
                      value={i}
                      eventKey={i}
                      className={`btn btn-lg btn-link stretched-link ${
                        this.state.active3 ? "" : "collapsed"
                      }`}
                      data-placeid={`office-${office.id}`}
                      aria-expanded={this.state.active3 ? "true" : "false"}>
                      {office.title}
                      <i className="fas fa-long-arrow-alt-up"></i>
                    </Accordion.Toggle>
                  </Card.Header>

                  <Accordion.Collapse
                    eventKey={i}
                    id={`collapse-${i + 1}`}
                    aria-labelledby={`heading-${i + 1}`}
                    data-parent="#accordion-maps">
                    <Card.Body>
                      <p>{office.address}</p>
                      {office.phone && <p>{office.phone}</p>}
                      {office.email && (
                        <p>
                          <a href={`mailto:${office.email}`}>{office.email}</a>
                        </p>
                      )}
                      {office.workingHours && <p>{office.workingHours}</p>}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Scrollbars>
        </div>
      </div>
    );
  }
}

export default ContactsAccordion;
