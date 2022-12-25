import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Direction = () => {
    return (
        <div id="direction" className="spacer m-top-lg">
            <h4>Direction</h4>
            <p>Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is <code>row</code>. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).</p>
            <p>Use <code>.flex-row</code> to set a horizontal direction (the browser default), or <code>.flex-row-reverse</code> to start the horizontal direction from the opposite side.</p>

            <div className="bd-example">
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item 1</div>
                    <div className="p-2 bd-highlight">Flex item 2</div>
                    <div className="p-2 bd-highlight">Flex item 3</div>
                </div>
                <div className="d-flex flex-row-reverse bd-highlight">
                    <div className="p-2 bd-highlight">Flex item 1</div>
                    <div className="p-2 bd-highlight">Flex item 2</div>
                    <div className="p-2 bd-highlight">Flex item 3</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex flex-row bd-highlight mb-3">\n' +
                '  <div className="p-2 bd-highlight">Flex item 1</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item 2</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item 3</div>\n' +
                '</div>\n' +
                '<div className="d-flex flex-row-reverse bd-highlight">\n' +
                '    <div className="p-2 bd-highlight">Flex item 1</div>\n' +
                '    <div className="p-2 bd-highlight">Flex item 2</div>\n' +
                '    <div className="p-2 bd-highlight">Flex item 3</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Use <code>.flex-column</code> to set a vertical direction, or <code>.flex-column-reverse</code> to start the vertical direction from the opposite side.</p>

            <div className="bd-example">
                <div className="d-flex flex-column bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item 1</div>
                    <div className="p-2 bd-highlight">Flex item 2</div>
                    <div className="p-2 bd-highlight">Flex item 3</div>
                </div>
                <div className="d-flex flex-column-reverse bd-highlight">
                    <div className="p-2 bd-highlight">Flex item 1</div>
                    <div className="p-2 bd-highlight">Flex item 2</div>
                    <div className="p-2 bd-highlight">Flex item 3</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex flex-column bd-highlight mb-3">\n' +
                '  <div className="p-2 bd-highlight">Flex item 1</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item 2</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item 3</div>\n' +
                '</div>\n' +
                '<div className="d-flex flex-column-reverse bd-highlight">\n' +
                '  <div className="p-2 bd-highlight">Flex item 1</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item 2</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item 3</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Responsive variations also exist for <code>flex-direction</code>.</p>

            <ul>
                <li><code>.flex-row</code></li>
                <li><code>.flex-row-reverse</code></li>
                <li><code>.flex-column</code></li>
                <li><code>.flex-column-reverse</code></li>
                <li><code>.flex-sm-row</code></li>
                <li><code>.flex-sm-row-reverse</code></li>
                <li><code>.flex-sm-column</code></li>
                <li><code>.flex-sm-column-reverse</code></li>
                <li><code>.flex-md-row</code></li>
                <li><code>.flex-md-row-reverse</code></li>
                <li><code>.flex-md-column</code></li>
                <li><code>.flex-md-column-reverse</code></li>
                <li><code>.flex-lg-row</code></li>
                <li><code>.flex-lg-row-reverse</code></li>
                <li><code>.flex-lg-column</code></li>
                <li><code>.flex-lg-column-reverse</code></li>
                <li><code>.flex-xl-row</code></li>
                <li><code>.flex-xl-row-reverse</code></li>
                <li><code>.flex-xl-column</code></li>
                <li><code>.flex-xl-column-reverse</code></li>
            </ul>
        </div>
    );
};

export default Direction;
