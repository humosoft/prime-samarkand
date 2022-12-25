import React, { Component } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import Swiper from 'swiper';

class CarouselExample extends Component {
    componentDidMount() {
        new Swiper ('.swiper-container.swiper-default', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }

    render() {
        return (
            <div id="carousel-examples">
                <h4>Examples</h4>

                <div id="slides-only">
                    <h5>Slides only</h5>
                    <p>Here’s a carousel with slides only.</p>

                    <div className="bd-example">
                        <div className="swiper-container swiper-default">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>First slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">First slide</text>
                                    </svg>
                                </div>

                                <div className="swiper-slide">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>Second slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">Second slide</text>
                                    </svg>
                                </div>

                                <div className="swiper-slide">
                                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                        <title>Third slide</title>
                                        <rect width="100%" height="100%"></rect>
                                        <text x="50%" y="50%" dy=".3em">Third slide</text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={
                        '<div className="swiper-container swiper-default">\n' +
                        '  <div className="swiper-wrapper">\n' +
                        '    <div className="swiper-slide">First slide</div>\n' +
                        '    <div className="swiper-slide">Second slide</div>\n' +
                        '    <div className="swiper-slide">Third slide</div>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>
        ); 
    };
}

export default CarouselExample;