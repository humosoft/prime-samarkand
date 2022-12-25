import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import CardExample from './children/CardExample';
import CardContentType from './children/CardContentType';
import CardSizing from './children/CardSizing';
import CardNavigation from './children/CardNavigation';
import CardImages from './children/CardImages';
import ImageHorizontal from './children/ImageHorizontal';
import CardStyle from './children/CardStyle';
import CardLayout from './children/CardLayout';
import CardPost from './children/CardPost';

const Card = () => {
    return (
        <div id="card" className="spacer m-top-xl">
            <h3>Card</h3>
            <p>Cards provide a flexible and extensible content container. It supports a wide variety of content, including images, text, links, and more.</p>

            <CardExample />

            <CardContentType />

            <CardSizing />

            <CardNavigation />

            <CardImages />

            <ImageHorizontal />

            <CardStyle />

            <CardLayout />

            <CardPost />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/card/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />

        </div>
    );
};

export default Card;
