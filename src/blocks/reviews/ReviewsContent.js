import React from 'react';

import ReviewItems from './ReviewItems';

const ReviewsContent = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="clearfix">
                    <ReviewItems />
                    
                    <div className="swiper-control spacer m-top-lg">
                        <div className="d-flex justify-content-center">
                            <p className="p-small">
                                <i className="swiper-button-prev fas fa-long-arrow-alt-left"></i>

                                <span className="swiper-pagination"></span>

                                <i className="swiper-button-next fas fa-long-arrow-alt-right"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsContent;
