import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import RelativeToTheParent from './children/RelativeToTheParent';
import RelativeToTheViewport from './children/RelativeToTheViewport';

const Sizing = () => {
    return (
        <div id="sizing" className="spacer m-top-xl">
            <h3>Sizing</h3>
            <p>Easily make an element as wide or as tall with our width and height utilities.</p>

            <RelativeToTheParent />

            <RelativeToTheViewport />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/sizing/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Sizing;
