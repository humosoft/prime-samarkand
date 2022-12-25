import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import NewsMeta from '../blocks/news/NewsMeta';
import NewsDescription from '../blocks/news/NewsDescription';
import NewsTags from '../blocks/news/NewsTags';
import NewsComments from '../blocks/news/NewsComments';
import Widget from '../blocks/widget/Widget';

const NewsSinglePage = () => {
    useEffect( () => {
        document.body.classList.add( 'single-post' );
        document.body.classList.add( 'header-menu-true' );

        return () => {
            document.body.classList.remove( 'single-post' );
            document.body.classList.remove( 'header-menu-true' );
        }
    }, [] );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>News single page | Erso - Logistics & Transportation React JS Template</title>

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
                <PageTitleCommon title="Neque porro quisquam est qui dolorem ipsum quia" />

                <section id="page-content" className="block spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div className="row gutter-width-md single-content">
                                    <div className="col-xl-8 col-lg-8 col-md-12">
                                        <div className="img object-fit">
                                            <div className="object-fit-cover">
                                                <img src="assets/img/placeholder/1051x487.jpg" alt="Neque porro quisquam est qui dolorem ipsum quia" />
                                            </div>
                                        </div>

                                        <NewsMeta />

                                        <NewsDescription />

                                        <NewsTags />

                                        <hr className="spacer m-top-lg" />

                                        <NewsComments />
                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                        <Widget />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
};

export default NewsSinglePage;
