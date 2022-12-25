import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import CommonValues from './children/CommonValues';
import FixedTop from './children/FixedTop';
import FixedBottom from './children/FixedBottom';
import StickyTop from './children/StickyTop';

const Position = () => {
    return (
        <div id="position" className="spacer m-top-xl">
            <h3>Position</h3>
            <p>Use these shorthand utilities for quickly configuring the position of an element.</p>

            <CommonValues />

            <FixedTop />

            <FixedBottom />

            <StickyTop />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/position/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Position;
