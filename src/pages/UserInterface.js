import React, { Fragment, useEffect } from 'react';
import MetaTags from 'react-meta-tags';

import Loading from '../blocks/loading/Loading';
import HeaderUI from '../blocks/header/HeaderUI';
import FooterUI from '../blocks/footer/FooterUI';

import PageTitleUserInterface from '../blocks/page-title/PageTitleUserInterface';

// Content
import Typography from '../blocks/ui/content/typography/Typography';
import Icons from '../blocks/ui/content/icons/Icons';
import Images from '../blocks/ui/content/images/Images';
import Tables from '../blocks/ui/content/tables/Tables';
import Figures from '../blocks/ui/content/figures/Figures';

// Components
import Alerts from '../blocks/ui/components/alerts/Alerts';
import Badge from '../blocks/ui/components/badge/Badge';
import Buttons from '../blocks/ui/components/buttons/Buttons';
import ButtonGroup from '../blocks/ui/components/button-group/ButtonGroup';
import Card from '../blocks/ui/components/card/Card';
import Carousel from '../blocks/ui/components/carousel/Carousel';
import Collapse from '../blocks/ui/components/collapse/Collapse';
import Dropdowns from '../blocks/ui/components/dropdowns/Dropdowns';
import Forms from '../blocks/ui/components/forms/Forms';
import InputGroup from '../blocks/ui/components/input-group/InputGroup';
import ListGroup from '../blocks/ui/components/list-group/ListGroup';
import MediaObject from '../blocks/ui/components/media-object/MediaObject';
import Modal from '../blocks/ui/components/modal/Modal';
import UINav from '../blocks/ui/components/navs/Navs';
import Pagination from '../blocks/ui/components/pagination/Pagination';
import PopUp from '../blocks/ui/components/pop-up/PopUp';
import Scroll from '../blocks/ui/components/scroll/Scroll';

// Utilities
import Borders from '../blocks/ui/utilities/borders/Borders';
import Clearfix from '../blocks/ui/utilities/clearfix/Clearfix';
import Colors from '../blocks/ui/utilities/colors/Colors';
import Display from '../blocks/ui/utilities/display/Display';
import Embed from '../blocks/ui/utilities/embed/Embed';
import Flex from '../blocks/ui/utilities/flex/Flex';
import Float from '../blocks/ui/utilities/float/Float';
import Overflow from '../blocks/ui/utilities/overflow/Overflow';
import Position from '../blocks/ui/utilities/position/Position';
import Shadows from '../blocks/ui/utilities/shadows/Shadows';
import Sizing from '../blocks/ui/utilities/sizing/Sizing';
import Spacing from '../blocks/ui/utilities/spacing/Spacing';
import StrechedLink from '../blocks/ui/utilities/streched-link/StrechedLink';
import Text from '../blocks/ui/utilities/text/Text';
import VerticalAlignment from '../blocks/ui/utilities/vertical-alignment/VerticalAlignment';
import Visibility from '../blocks/ui/utilities/visibility/Visibility';

// Sidebar
import Sidebar from '../blocks/ui/sidebar/Sidebar';

const UserInterface = () => {
    useEffect(() => {
        document.body.classList.add('page');
        document.body.classList.add('ui');
        document.body.classList.add('header-menu-false');
      
        return () => {
            document.body.classList.remove('page');
            document.body.classList.remove('ui');
            document.body.classList.remove('header-menu-false');
        }
    }, []);

    return (
        <Fragment>
            <MetaTags>
                <meta charSet="UTF-8" />
                <title>UI | Erso - Logistics & Transportation React JS Template</title>

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

            <HeaderUI logoColor="dark" />

            <main id="main" className="site-main">
                <PageTitleUserInterface />

                <div id="page-content" className="spacer p-top-xl">
                    <div className="wrapper">
                        <div className="content">
                            <div className="row gutter-width-md">
                                <div className="col-xl-8 col-lg-8 col-md-12 order-xl-0 order-lg-0 order-md-1 order-1">
                                    <p> Erso project is created using Bootstrap 4 Framework and all of the examples below are based on it. Also, Erso includes custom classes, plugins and scripts which are also based on our experience of Bootstrap 4 Framework. </p>

                                    <div id="content" className="spacer m-top-xl">
                                        <h2>Content</h2>

                                        <Typography />
                                        <Icons />
                                        <Images />
                                        <Tables />
                                        <Figures />
                                    </div>

                                    <div id="components" className="block spacer m-top-xl">
                                        <h2>Components</h2>

                                        <Alerts />
                                        <Badge />
                                        <Buttons />
                                        <ButtonGroup />
                                        <Card />
                                        <Carousel />
                                        <Collapse />
                                        <Dropdowns />
                                        <Forms />
                                        <InputGroup />
                                        <ListGroup />
                                        <MediaObject />
                                        <Modal />
                                        <UINav />
                                        <Pagination />
                                        <PopUp />
                                        <Scroll />
                                    </div>

                                    <div id="utilities" className="block spacer m-top-xl">
                                        <h2>Utilities</h2>

                                        <Borders />
                                        <Clearfix />
                                        <Colors />
                                        <Display />
                                        <Embed />
                                        <Flex />
                                        <Float />
                                        <Overflow />
                                        <Position />
                                        <Shadows />
                                        <Sizing />
                                        <Spacing />
                                        <StrechedLink />
                                        <Text />
                                        <VerticalAlignment />
                                        <Visibility />
                                    </div>
                                </div>

                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <FooterUI />
        </Fragment>
    );
};

export default UserInterface;
