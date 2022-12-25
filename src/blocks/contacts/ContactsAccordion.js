import React, { Component } from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { Accordion, Card, Button } from "react-bootstrap";

class ContactsAccordion extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            active1: false,
            active2: false,
            active3: false
        };
    };

    clickHandler1( e ) {
        this.setState( {
            active1: ! this.state.active1,
            active2: false,
            active3: false
        } );
    };

    clickHandler2( e ) {
        this.setState( {
            active2: ! this.state.active2,
            active1: false,
            active3: false
        } );
    };

    clickHandler3( e ) {
        this.setState( {
            active3: ! this.state.active3,
            active1: false,
            active2: false
        } );
    };

    componentDidMount() {
        let box = document.getElementById( 'maps-information' );

        if ( window.innerWidth < 1200 ) {
            box.style.overflow = 'hidden';
        } else {
            box.style.overflow = 'initial';
        }
    };

    render() {
        return (
            <div className="wrapper">
                <div id="maps-information" className="maps-information">
                    <Scrollbars
                        autoHeight
                        autoHeightMin={ 0 }
                        autoHeightMax={ 449 }
                        thumbMinSize={ 30 }
                        style={ { width: this.state.active1 || this.state.active2 || this.state.active3 ? '102%' : '100%' } }
                        renderThumbVertical={ ( { style, ...props } ) =>
                            <div { ...props } style={ {
                                ...style,
                                backgroundColor: '#414258',
                                opacity: this.state.active1 || this.state.active2 || this.state.active3 ? 1 : 0
                            } } />
                        }
                    >
                        <Accordion id="accordion-maps" style={ { width: this.state.active1 || this.state.active2 || this.state.active3 ? '98%' : '100%' } }>
                            <Card>
                                <Card.Header id="heading-3">
                                    <Accordion.Toggle as={ Button } style={ { color: "#414258" } } onClick={ ( e ) => this.clickHandler3( e ) } variant="link" value="3" eventKey="3" className={ `btn btn-lg btn-link stretched-link ${ this.state.active3 ? '' : 'collapsed' }` } data-placeid="ChIJE74zDxSU3UYRubpdpdNUCvM" aria-expanded={ this.state.active3 ? 'true' : 'false' }>
                                        Lithuania Office<i className="fas fa-long-arrow-alt-up"></i>
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="3" id="collapse-3" aria-labelledby="heading-3" data-parent="#accordion-maps">
                                    <Card.Body>
                                        <p>575 Crescent Ave. Quakertown, PA 18951</p>
                                        <p>+432 533 12 523</p>
                                        <p>
                                            <a href="mailto:info@domain.com">info@domain.com</a>
                                        </p>
                                        <p>Mon - Fri: 9am - 6pm</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header id="heading-1">
                                    <Accordion.Toggle as={ Button } style={ { color: "#414258" } } onClick={ ( e ) => this.clickHandler1( e ) } variant="link" value="1" eventKey="1" className={ `btn btn-lg btn-link stretched-link ${ this.state.active1 ? '' : 'collapsed' }` } data-placeid="ChIJa76xwh5ymkcRW-WRjmtd6HU" aria-expanded={ this.state.active1 ? 'true' : 'false' }>
                                        Germany Office<i className="fas fa-long-arrow-alt-up"></i>
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="1" id="collapse-1" aria-labelledby="heading-1" data-parent="#accordion-maps">
                                    <Card.Body>
                                        <p>575 Crescent Ave. Quakertown, PA 18951</p>
                                        <p>+432 533 12 523</p>
                                        <p>
                                            <a href="mailto:info@domain.com">info@domain.com</a>
                                        </p>
                                        <p>Mon - Fri: 9am - 6pm</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header id="heading-2">
                                    <Accordion.Toggle as={ Button } style={ { color: "#414258" } } onClick={ ( e ) => this.clickHandler2( e ) } variant="link" value="2" eventKey="2" className={ `btn btn-lg btn-link stretched-link ${ this.state.active2 ? '' : 'collapsed' }` } data-placeid="ChIJA9KNRIL-1BIRb15jJFz1LOI" aria-expanded={ this.state.active2 ? 'true' : 'false' }>
                                        Italy Office<i className="fas fa-long-arrow-alt-up"></i>
                                    </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="2" id="collapse-2" aria-labelledby="heading-2" data-parent="#accordion-maps">
                                    <Card.Body>
                                        <p>575 Crescent Ave. Quakertown, PA 18951</p>
                                        <p>+432 533 12 523</p>
                                        <p>
                                            <a href="mailto:info@domain.com">info@domain.com</a>
                                        </p>
                                        <p>Mon - Fri: 9am - 6pm</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Scrollbars>
                </div>
            </div>
        );
    };
};

export default ContactsAccordion;
