import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Fill = () => {
    return (
        <div id="fill" className="spacer m-top-lg">
            <h4>Fill</h4>
            <p>Use the <code>.flex-fill</code> class on a series of sibling elements to force them into widths equal to their content (or equal widths if their content does not surpass their border-boxes) while taking up all available horizontal space.</p>

            <div className="bd-example">
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>
                    <div className="p-2 flex-fill bd-highlight">Flex item</div>
                    <div className="p-2 flex-fill bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex bd-highlight">\n' +
                '  <div className="p-2 flex-fill bd-highlight">Flex item with a lot of content</div>\n' +
                '  <div className="p-2 flex-fill bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 flex-fill bd-highlight">Flex item</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Responsive variations also exist for <code>flex-fill</code>.</p>

            <ul>
                <li><code>.flex-fill</code></li>
                <li><code>.flex-sm-fill</code></li>
                <li><code>.flex-md-fill</code></li>
                <li><code>.flex-lg-fill</code></li>
                <li><code>.flex-xl-fill</code></li>
            </ul>
        </div>
    );
};

export default Fill;
