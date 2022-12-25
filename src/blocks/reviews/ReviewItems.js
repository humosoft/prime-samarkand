import React, { Component } from 'react';
import Swiper from 'swiper';

import ReviewsItemListData from '../../data/reviews/reviewsItemList.json';
import ReviewStars from './ReviewStars';

class ReviewItems extends Component {
    componentDidMount() {
        new Swiper( '.swiper-container.reviews', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 45,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                1199: {
                    slidesPerView: 2,
                    centeredSlides: true
                }
            }
        } );
    };

    render() {
        return (
            <div className="swiper-container reviews style-default">
                <div className="swiper-wrapper">
                    { ReviewsItemListData && ReviewsItemListData.map( ( reviewItem, key ) => {
                        return (
                            <div key={ key } className="swiper-slide review">
                                <div className="d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row">
                                    <div className="swiper-slide-left">
                                        <img src={ reviewItem.image } className="rounded-circle" width="80" height="80" alt={ reviewItem.authorName } />
                                    </div>

                                    <div className="swiper-slide-right">
                                        <div className="review-author-top d-flex flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row justify-content-between">
                                            <h5>{ reviewItem.authorName }</h5>

                                            <div className="star-raiting">
                                                <ReviewStars num={ reviewItem.starsNum } />
                                            </div>
                                        </div>

                                        <p className="review-author-bottom p-small">{ reviewItem.authorPosition }</p>

                                        <p>{ reviewItem.reviewText }</p>
                                    </div>
                                </div>
                            </div>
                        );
                    } ) }

                </div>
            </div>
        );
    };
};

export default ReviewItems;
