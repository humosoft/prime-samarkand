import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import DisplayNotation from './children/DisplayNotation';
import DisplayExamples from './children/DisplayExamples';
import HiddingElements from './children/HiddingElements';
import DisplayInPrint from './children/DisplayInPrint';

const Display = () => {
    return (
        <div id="display" className="spacer m-top-xl">
            <h3>Display</h3>
            <p>Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display when printing.</p>

            <DisplayNotation />

            <DisplayExamples />

            <HiddingElements />

            <DisplayInPrint />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/display/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Display;
