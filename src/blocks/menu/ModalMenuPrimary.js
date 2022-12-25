import React, { Component } from 'react';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';

class ModalMenuPrimary extends Component {
    constructor( props ) {
        super();
        this.state = {
            open: false,
        };
    };

    handleClick = () => {
        this.setState( { open: ! this.state.open } )
    };

    render() {
        return (
            <nav className="menu-primary">
                <ul className="list-unstyled">
                    <li className="nav-item ">
                        <Link to={  "/" } title="Home">Home</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/services" ) || window.location.pathname.includes( "/service-inside" ) ? "current-nav-item" : "" ) }>
                        <Link to={  "/services" } title="Services">Services</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/about-us" ) ? "current-nav-item" : "" ) }>
                        <Link to={  "/about-us" } title="About us">About us</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/why-us" ) ? "current-nav-item" : "" ) }>
                        <Link to={  "/why-us" } title="Why us">Why us</Link>
                    </li>

                    <li className={ "nav-item nav-item-has-children dropdown-child-click-effect " + ( window.location.pathname.includes( "/gallery" ) || window.location.pathname.includes( "/gallery-inside" ) ? "current-nav-item" : "" ) + ( this.state.open ? ' show' : '' ) }>
                        <Link to={  "/gallery" } title="Gallery">Gallery</Link>

                        <span onClick={ this.handleClick } className="dropdown-toggle dropdown-custom-icon" style={ { color: '#414258' } }>
                            <span className="dropdown-icon">
                                <i className="fas fa-caret-down"></i>
                            </span>
                        </span>

                        <Collapse in={ this.state.open } timeout={ 400 }>
                            <ul className="dropdown-menu" style={ { display: 'block' } }>
                                <li>
                                    <Link to={  "/gallery-inside" } title="Truck Logistics">Truck Logistics</Link>
                                </li>

                                <li>
                                    <Link to={  "/gallery-inside" } title="Ship Logistics">Ship Logistics</Link>
                                </li>

                                <li>
                                    <Link to={  "/gallery-inside" } title="Storage Logistics">Storage Logistics</Link>
                                </li>

                                <li>
                                    <Link to={  "/gallery-inside" } title="Plain Logistics">Plane Logistics</Link>
                                </li>
                            </ul>
                        </Collapse>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/reviews" ) ? "current-nav-item" : "" ) }>
                        <Link to={  "/reviews" } title="Reviews">Reviews</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/clients" ) ? "current-nav-item" : "" ) }>
                        <Link to={  "/clients" } title="Clients">Clients</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/news" ) || window.location.pathname.includes( "/news-single-page" )? "current-nav-item" : "" ) }>
                        <Link to={  "/news" } title="News">News</Link>
                    </li>

                    <li className={ "nav-item " + ( window.location.pathname.includes( "/contacts" ) ? "current-nav-item" : "" ) }>
                        <Link to={  "/contacts" } title="Contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        );
    }

};

export default ModalMenuPrimary;
