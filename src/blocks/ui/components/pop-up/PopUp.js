import React, { Component } from 'react';
import SwipeBox from 'fslightbox-react';
import MoreExamples from '../../blocks/MoreExamples';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';

class Popup extends Component {
    state     = {
        isVisible: false,
        slide: 0,
    };
    showSlide = ( slide, event ) => {
        event.preventDefault();
        this.setState( {
            isVisible: ! this.state.isVisible,
            slide: slide
        } );
    };

    render() {
        return (
            <div id="pop-up" className="spacer m-top-xl">
                <h3>Pop-up</h3>
                <p>A touchable React Js lightbox.</p>

                <div id="swipebox">
                    <h4>Swipebox</h4>
                    <p>Swipebox is a React Js "lightbox" plugin for desktop, mobile and tablet.</p>

                    <div className="bd-example bd-example-images">
                        <a onClick={ ( event ) => this.showSlide( 1, event ) } className="btn btn-primary swipebox" href="#example-image">Open blank image</a>
                    </div>

                    <SwipeBox
                        toggler={ this.state.isVisible }
                        slide={ this.state.slide }
                        urls={ [
                            'assets/img/ui/300x300.jpg',
                        ] }
                    />

                    <PrismCode
                        code={ '<SwipeBox />' }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>

                <MoreExamples actionLink="https://fslightbox.com/"
                              actionLinkContent="Swipebox documentation"
                              contentBefore="For more examples and demo data, click "
                              contentAfter="."
                />
            </div>
        );
    }
}

export default Popup;
