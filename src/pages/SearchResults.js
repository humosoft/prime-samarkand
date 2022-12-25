import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import FooterSecondary from '../blocks/footer/FooterSecondary';

import PageTitleSearch from '../blocks/page-title/PageTitleSearch';
import SearchItemsData from '../data/search-results/searchItems';

const SearchResults = () => {
    useEffect( () => {
        document.body.classList.add( 'search-results' );
        document.body.classList.add( 'header-menu-true' );

        return () => {
            document.body.classList.remove( 'search-results' );
            document.body.classList.remove( 'header-menu-true' );
        }
    }, [] );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Search results | Erso - Logistics & Transportation React JS Template</title>

                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="robots" content="index, follow, noodp" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
            </MetaTags>

            <Loading />

            <Header logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleSearch />

                <section id="page-content" className="block spacer p-top-xl">
                    <div className="wrapper">
                        <div className="row gutter-width-md with-pb-lg">
                            { SearchItemsData.map( ( item, key ) => {
                                return (
                                    <div key={ key } className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="card border-0">
                                            <div className="card-body p-0">
                                                <h5>
                                                    <a title={ item.title } className="d-block" href={  item.link }>{ item.title }</a>
                                                </h5>

                                                <p className="p-small">
                                                    <a title={ item.categoryTitle } className="btn btn-primary btn-sm" href={  item.categoryLink }>{ item.categoryTitle }</a>
                                                </p>

                                                <p>{ item.description }</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } ) }
                        </div>
                    </div>
                </section>
            </main>

            <FooterSecondary />
        </Fragment>
    );
};

export default SearchResults;
