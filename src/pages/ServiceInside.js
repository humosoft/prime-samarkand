import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import ServiceInsideSwiper from '../blocks/service-inside/ServiceInsideSwiper';
import ServiceInsideWidget from '../blocks/service-inside/ServiceInsideWidget';

const ServiceInside = () => {
    useEffect( () => {
        document.body.classList.add( 'single' );
        document.body.classList.add( 'single-adveits_service' );

        return () => {
            document.body.classList.remove( 'single' );
            document.body.classList.remove( 'single-adveits_service' );
        }
    }, [] );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Service inside | Erso - Logistics & Transportation React JS Template</title>

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
                <PageTitleCommon title="Ship logistics" />

                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div id="single">
                                <div className="row gutter-width-md single-content">
                                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                                        <ServiceInsideSwiper />

                                        <div className="description style clearfix spacer m-top-lg">
                                            <h5>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</h5>
                                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                                        <aside id="aside" className="widget-area style-default">
                                            <div id="service" className="widget_service">
                                                <ServiceInsideWidget />
                                            </div>
                                        </aside>
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

export default ServiceInside;
