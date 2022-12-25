import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const Overflow = () => {
    return (
        <div id="overflow" className="spacer m-top-xl">
            <h3>Overflow</h3>
            <p>Use these shorthand utilities for quickly configuring how content overflows an element.</p>
            <p>Barebones <code>overflow</code> functionality is provided for two values by default, and they are not responsive.</p>

            <div className="bd-example d-md-flex">
                <div className="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style={ { "maxWidth": "260px", "maxHeight": "100px" } }>
                    This is an example of using <code>.overflow-auto</code> on an element with set width and height
                    dimensions. By design, this content will vertically scroll.
                </div>
                <div className="overflow-hidden p-3 bg-light" style={ { "maxWidth": "260px", "maxHeight": "100px" } }>
                    This is an example of using <code>.overflow-hidden</code> on an element with set width and height
                    dimensions.
                </div>
            </div>

            <PrismCode
                code={ '<div className="overflow-auto">...</div>\n' +
                '<div className="overflow-hidden">...</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/overflow/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Overflow;
