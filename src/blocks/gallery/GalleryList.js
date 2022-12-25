import React, { Component } from 'react';

import GalleryListData from '../../data/gallery/galleryItems.json';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
            index: 1,
            xPos: '',
            maxXPos: ''
        };

        this.swipeLeft  = this.swipeLeft.bind( this );
        this.swipeRight = this.swipeRight.bind( this );
        this.close      = this.close.bind( this );
    };

    componentDidMount() {
        document.documentElement.classList.add( 'swipebox-no-touch' );
    
        window.addEventListener("keydown", ( e ) => {
            if ( this.state.open ) {
                    if( e.keyCode === 37 && this.state.xPos !== 0 ) {
                    this.swipeLeft();
                }
        
                if( e.keyCode === 39 && this.state.index < GalleryListData.length) {
                    this.setState( { xPos: this.state.xPos - 100 } );
                    this.setState( { index: this.state.index + 1 } );
                }
        
                if( e.keyCode === 27 ) {
                    this.close();
                }
            }

        }, false );
    };

    componentWillUnmount() {
        document.documentElement.classList.remove( 'swipebox-no-touch' );
    };

    handleClick( e, key, GalleryListData ) {
        e.preventDefault();

        document.documentElement.classList.add( 'swipebox-html' );
        document.body.style.overflow = 'hidden';

        this.setState( {
            index: key + 1,
            xPos: ( ( ( key + 1 ) * -100 ) + 100 )
        } );

        if ( key === 0 ) {
            document.getElementById( 'swipebox-prev' ).classList.add( 'disabled' );
        }

        if ( key === GalleryListData.length - 1 ) {
            document.getElementById( 'swipebox-next' ).classList.add( 'disabled' );
        }

        this.setState( {
            open: ! this.state.open,
        } );
    };

    swipeLeft() {
        document.getElementById( 'swipebox-prev' ).classList.remove( 'disabled' );
        document.getElementById( 'swipebox-next' ).classList.remove( 'disabled' );

        this.setState( { xPos: this.state.xPos + 100 } );
        this.setState( { index: this.state.index - 1 } );

        if ( this.state.xPos === -100 ) {
            document.getElementById( 'swipebox-prev' ).classList.add( 'disabled' );
        }

        if ( this.state.xPos === 0 ) {
            document.getElementById( 'swipebox-prev' ).classList.add( 'disabled' );
            this.setState( { xPos: this.state.xPos } );
            this.setState( { index: this.state.index } );
        }
    };

    swipeRight() {
        document.getElementById( 'swipebox-next' ).classList.remove( 'disabled' );
        document.getElementById( 'swipebox-prev' ).classList.remove( 'disabled' );

        this.setState( { xPos: this.state.xPos - 100 } );
        this.setState( { index: this.state.index + 1 } );

        if ( this.state.xPos === ( GalleryListData.length * -100 ) + 200 ) {
            document.getElementById( 'swipebox-next' ).classList.add( 'disabled' );
        }

        if ( this.state.xPos === ( GalleryListData.length * -100 ) + 100 ) {
            document.getElementById( 'swipebox-next' ).classList.add( 'disabled' );
            this.setState( { xPos: this.state.xPos } );
            this.setState( { index: this.state.index } );
        }
    };

    close() {
        this.setState( { open: false } );

        if ( document.getElementById( 'swipebox-prev' ).classList.contains( 'disabled' ) ) {
            document.getElementById( 'swipebox-prev' ).classList.remove( 'disabled' )
        }
        if ( document.getElementById( 'swipebox-next' ).classList.contains( 'disabled' ) ) {
            document.getElementById( 'swipebox-next' ).classList.remove( 'disabled' )
        }

        document.documentElement.classList.remove( 'swipebox-html' );
        document.body.style.overflow = 'auto';
    };

    render() {
        const images = [];

        for ( let i = 0; i < GalleryListData.length; i++ ) {
            images.push( GalleryListData[i] );
        }

        return (
            <div className="gallery-items clearfix">
                { GalleryListData && GalleryListData.map( ( galleryItem, key ) => {
                    return (
                        <a key={ key } id={ galleryItem.id } title={ galleryItem.title } className="gallery-item swipebox swiper-slide" href={ galleryItem.imageLink } rel="gallery">
                            <div className="gallery-content" onClick={ ( e ) => this.handleClick( e, key, GalleryListData ) }>
                                <div className="zoom">
                                    <div className="zoom-icon fas fa-plus"></div>
                                    <h6 className="zoom-title">{ galleryItem.zoomTitle }</h6>
                                </div>
                            </div>

                            <div className="img object-fit">
                                <div className="object-fit-cover">
                                    <img src={ galleryItem.imageLink } alt={ "Image " + galleryItem.id } />
                                </div>
                            </div>

                            <div className="img-bg-color"></div>
                        </a>
                    );
                } ) }

                <div id="swipebox-overlay" style={ { display: this.state.open ? "block" : "none" } }>
                    <div id="swipebox-container">
                        <div id="swipebox-slider" style={ { display: 'block', transform: `translate3d( ${ this.state.xPos }%, 0px, 0px)` } }>
                            { images && images.map( ( image, key ) => {
                                return (
                                    <div key={ key } className={ "slide " + ( this.state.index === image.id ? " current" : " " ) }>
                                        <img src={ image.imageLink } alt={ "Image " + image.id } />
                                    </div>
                                );
                            } ) }
                        </div>

                        <div id="swipebox-top-bar">
                            <div id="swipebox-title">
                                { images[this.state.index - 1].title  }
                            </div>
                        </div>

                        <div id="swipebox-bottom-bar">
                            <div id="swipebox-arrows">
                                <div id="swipebox-prev" onClick={ this.swipeLeft }></div>
                                <div id="swipebox-next" onClick={ this.swipeRight }></div>
                            </div>
                        </div>

                        <div id="swipebox-close" onClick={ this.close }></div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Gallery;
