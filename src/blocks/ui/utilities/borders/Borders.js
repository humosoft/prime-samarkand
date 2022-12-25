import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import Border from './children/Border';
import BorderColor from './children/BorderColor';
import BorderRadius from './children/BorderRadius';
import BorderRadiusSize from './children/BorderRadiusSize';

const Borders = () => {
    return (
        <div id="borders" className="spacer m-top-xl">
            <h3>Borders</h3>
            <p>Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.</p>

            <Border />

            <BorderColor />

            <BorderRadius />

            <BorderRadiusSize />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/borders/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Borders;
