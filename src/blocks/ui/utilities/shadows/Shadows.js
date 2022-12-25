import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const Shadows = () => {
    return (
        <div id="shadows" className="spacer m-top-xl">
            <h3>Shadows</h3>
            <p>Add or remove shadows to elements with box-shadow utilities.</p>

            <div id="shadows-examples">
                <h4>Examples</h4>
                <p>While shadows on components are disabled by default in Bootstrap and can be enabled via <code>$enable-shadows</code>, you can also quickly add or remove a shadow with our <code>box-shadow</code> utility classes. Includes support for <code>.shadow-none</code> and three default sizes (which have associated variables to match).</p>

                <div className="bd-example">
                    <div className="shadow-none p-3 mb-4 bg-light rounded">No shadow</div>
                    <div className="shadow-sm p-3 mb-4 bg-white rounded">Small shadow</div>
                    <div className="shadow p-3 mb-4 bg-white rounded">Regular shadow</div>
                    <div className="shadow-lg p-3 bg-white rounded">Larger shadow</div>
                </div>

                <PrismCode
                    code={ '<div className="shadow-none p-3 mb-4 bg-light rounded">No shadow</div>\n' +
                    '<div className="shadow-sm p-3 mb-4 bg-white rounded">Small shadow</div>\n' +
                    '<div className="shadow p-3 mb-4 bg-white rounded">Regular shadow</div>\n' +
                    '<div className="shadow-lg p-3 bg-white rounded">Larger shadow</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/shadows/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Shadows;
