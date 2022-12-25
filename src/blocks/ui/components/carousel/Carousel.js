import React from 'react';
import CarouselExample from './children/CarouselExample';
import CarouselWithControls from './children/CarouselWithControls';
import MoreExamples from '../../blocks/MoreExamples';

const Carousel = () => {

    return (
        <div id="carousel" className="spacer m-top-xl">
            <h3>Carousel</h3>
            <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>

            <CarouselExample />

            <CarouselWithControls />

            <MoreExamples actionLink="https://swiperjs.com/demos/"
                          actionLinkContent="Swiper documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    ); 
}

export default Carousel;