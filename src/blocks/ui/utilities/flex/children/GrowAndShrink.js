import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const GrowAndShrink = () => {
    return (
        <div id="grow-and-shrink" className="spacer m-top-lg">
            <h4>Grow and shrink</h4>
            <p>Use <code>.flex-grow-*</code> utilities to toggle a flex item’s ability to grow to fill available space. In the example below, the <code>.flex-grow-1</code> elements uses all available space it can, while allowing the remaining two flex items their necessary space.</p>

            <div className="bd-example">
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Third flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex bd-highlight">\n' +
                '  <div className="p-2 flex-grow-1 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Third flex item</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Use <code>.flex-shrink-*</code> utilities to toggle a flex item’s ability to shrink if necessary. In the example below, the second flex item with <code>.flex-shrink-1</code> is forced to wrap it’s contents to a new line, “shrinking” to allow more space for the previous flex item with <code>.w-100</code>.</p>

            <div className="bd-example">
                <div className="d-flex bd-highlight">
                    <div className="p-2 w-100 bd-highlight">Flex item</div>
                    <div className="p-2 flex-shrink-1 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex bd-highlight">\n' +
                '  <div className="p-2 w-100 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 flex-shrink-1 bd-highlight">Flex item</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
            <p>Responsive variations also exist for <code>flex-grow</code> and <code>flex-shrink</code>.</p>

            <ul>
                <li><code>.flex-{ `{grow|shrink}`}-0</code></li>
                <li><code>.flex-{ `{grow|shrink}`}-1</code></li>
                <li><code>.flex-sm-{ `{grow|shrink}`}-0</code></li>
                <li><code>.flex-sm-{ `{grow|shrink}`}-1</code></li>
                <li><code>.flex-md-{ `{grow|shrink}`}-0</code></li>
                <li><code>.flex-md-{ `{grow|shrink}`}-1</code></li>
                <li><code>.flex-lg-{ `{grow|shrink}`}-0</code></li>
                <li><code>.flex-lg-{ `{grow|shrink}`}-1</code></li>
                <li><code>.flex-xl-{ `{grow|shrink}`}-0</code></li>
                <li><code>.flex-xl-{ `{grow|shrink}`}-1</code></li>
            </ul>
        </div>
    );
};

export default GrowAndShrink;
