import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const Visibility = () => {
    return (
        <div id="visibility" className="spacer m-top-xl">
            <h3>Visibility</h3>
            <p>Control the visibility, without modifying the display, of elements with visibility utilities.</p>

            <p>Set the <code>visibility</code> of elements with our visibility utilities. These utility classes do not modify the <code>display</code> value at all and do not affect layout – <code>.invisible</code> elements still take up space in the page. Content will be hidden both visually and for assistive technology/screen reader users.</p>

            <p>Apply <code>.visible</code> or <code>.invisible</code> as needed.</p>

            <PrismCode
                code={ '<div className="visible">...</div>\n' +
                '<div className="invisible">...</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/visibility/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Visibility;
