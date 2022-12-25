import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import TextColor from './children/TextColor';
import BackgroundColor from './children/BackgroundColor';

const Colors = () => {
    return (
        <div id="colors" className="spacer m-top-xl">
            <h3>Colors</h3>
            <p>Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</p>

            <TextColor />

            <BackgroundColor />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/colors/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Colors;
