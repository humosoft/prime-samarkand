import React, { Component } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import Swiper from 'swiper';

class CarouselWithControls extends Component {
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
            <div id="with-controls">
                <h5>With controls</h5>
                <p>Adding in the previous and next controls.</p>

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

                        <div className="swiper-button-next">
                            <i className="fas fa-arrow-right i-small"></i>
                        </div>

                        <div className="swiper-button-prev">
                            <i className="fas fa-arrow-left i-small"></i>
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
                        '   \n' +
                        '  <!-- Add Arrows -->\n' +
                        '  <div className="swiper-button-next">\n' +
                        '    <i className="fas fa-arrow-right i-small"></i>\n' +
                        '  </div>\n' +
                        '   \n' +
                        '  <div className="swiper-button-prev">\n' +
                        '    <i className="fas fa-arrow-left i-small"></i>\n' +
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

export default CarouselWithControls;