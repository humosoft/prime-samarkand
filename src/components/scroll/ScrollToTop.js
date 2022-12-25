import React, { Component } from "react";
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-scroll';

class ScrollToTop extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            inView: false
        };
    };

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;

        if ( window.location.pathname === '/clients' ) {
            document.getElementById( 'back-to-top' ).style.display = 'none';
        }

        var sticky        = document.getElementById( 'back-to-top' );
        var footer        = document.getElementById( 'footer' );
        var sticky_height = sticky.clientHeight;
        var rem_divider   = parseInt( window.getComputedStyle( document.body ).fontSize );
        var sticky_bottom = 1.25;
        var fromTop       = -1;
        var fromHTML      = document.getElementById( 'main' ).firstChild.nextSibling;

        const that = this;

        window.addEventListener(
            "scroll",
            () => {
                if ( that.isInViewport( fromHTML, fromTop ) ) {
                    this.fadeIn();
                    this.checkY( footer, sticky, sticky_bottom, sticky_height, rem_divider );
                } else {
                    this.fadeOut();
                    this.checkY( footer, sticky, sticky_bottom, sticky_height, rem_divider );
                }
            },
            false
        );
    };

    fadeIn = () => {
        if ( this._isMounted ) {
            this.setState( { inView: true } );
        }
    };

    fadeOut = () => {
        if ( this._isMounted ) {
            this.setState( { inView: false } );
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
    }

    isInViewport = ( elem, fromTop ) => {
        let bounding = elem.getBoundingClientRect();
        if ( window.screenTop - bounding.top > fromTop ) {
            return true;
        }
    };

    checkY = ( footer, sticky, sticky_bottom, sticky_height, rem_divider ) => {
        if ( window.scrollY + window.innerHeight < document.body.scrollHeight - footer.clientHeight ) {
            sticky.style.bottom = sticky_bottom + 'rem';
            sticky.classList.remove( 'sticky-fixed-footer' );
        }
        if ( window.scrollY + window.innerHeight > document.body.scrollHeight - footer.clientHeight ) {
            sticky.style.bottom = ( ( sticky_height / rem_divider ) + sticky_bottom ) + 'rem';
            sticky.classList.add( 'sticky-fixed-footer' );
        }
    };

    render() {
        const { inView } = this.state;

        let page = '';
        if ( document.body.classList.contains( 'header-fixed-true' ) ) {
            page = 'main';
        } else {
            page = 'header';
        }

        return (
            <Fade in={ inView } timeout={ 600 }>
                <div id="back-to-top" style={ { display: 'block' } }>
                    <Link to={ page } spy={ true } smooth={ true } duration={ 0 } className="scroll-to-id transform-scale-h">
                        <i className="fas fa-long-arrow-alt-up"></i>
                    </Link>
                </div>
            </Fade>
        );
    };
};

export default ScrollToTop;
