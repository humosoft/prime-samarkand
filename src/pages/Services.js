import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import Footer from '../blocks/footer/Footer';

import PageTitleCommon from '../blocks/page-title/PageTitleCommon';
import ServicesContent from '../blocks/services/ServicesContent';

const Services = () => {
    useEffect( () => {
        document.body.classList.add( 'archive' );
        document.body.classList.add( 'header-menu-true' );

        return () => {
            document.body.classList.remove( 'archive' );
            document.body.classList.remove( 'header-menu-true' );
        }
    }, [] );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>Services | Erso - Logistics & Transportation React JS Template</title>

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
                <PageTitleCommon title="Services" />

                <section id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <ServicesContent />
                    </div>
                </section>
            </main>

            <Footer />
        </Fragment>
    );
};

export default Services;
