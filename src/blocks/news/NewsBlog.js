import React from 'react';

import LoadMoreNews from "../../components/loadmore/LoadMoreNews"
import NewsBlogItemsData from '../../data/news/newsBlogItems';

const NewsBlog = () => {
    return (
        <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="row gutter-width-md with-pb-lg">
                { NewsBlogItemsData && NewsBlogItemsData.map( ( item, key ) => {
                    return (
                        <div key={ key } className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title={ item.title } href={  item.link }>
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <img className="card-top-img" src={ item.imgLink } alt={ item.title } />

                                                <div className="img-bg-color"></div>
                                            </div>
                                        </div>
                                    </a>

                                    <div className="card-category">
                                        <a title={ item.categoryTitle } className="btn btn-sm btn-secondary transform-scale-h border-0" href={ `${  item.categoryLink }` }>{ item.categoryTitle }</a>
                                    </div>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title={ item.title } href={  item.link }>{ item.title }</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    );
                } ) }
            </div>

            <LoadMoreNews />
        </div>
    );
};

export default NewsBlog;
