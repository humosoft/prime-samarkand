import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import Header from '../blocks/header/Header';
import FooterSecondary from '../blocks/footer/FooterSecondary';

import PageTitle404 from '../blocks/page-title/PageTitle404';
import BackToHome from "../components/button/BackToHome";

const Page404 = () => {
    useEffect( () => {
        document.body.classList.add( 'error404' );
        document.body.classList.add( 'header-menu-true' );

        return () => {
            document.body.classList.remove( 'error404' );
            document.body.classList.remove( 'header-menu-true' );
        }
    }, [] );

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>404 | Erso - Logistics & Transportation React JS Template</title>

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
                <PageTitle404 />

                <div id="page-content" className="block">
                    <div className="wrapper">
                        <p className="text w-50 mb-0 after">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>

                        <BackToHome />
                    </div>
                </div>
            </main>

            <FooterSecondary />
        </Fragment>
    );
};

export default Page404;
