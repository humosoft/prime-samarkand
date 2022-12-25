import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const AlignItems = () => {
    return (
        <div id="align-items" className="spacer m-top-lg">
            <h4>Align items</h4>
            <p>Use <code>align-items</code> utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if <code>flex-direction: column</code>). Choose from <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).</p>

            <div className="bd-example">
                <div className="d-flex align-items-start bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex align-items-end bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex align-items-center bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex align-items-baseline bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex align-items-stretch bd-highlight" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex align-items-start">...</div>\n' +
                '<div className="d-flex align-items-end">...</div>\n' +
                '<div className="d-flex align-items-center">...</div>\n' +
                '<div className="d-flex align-items-baseline">...</div>\n' +
                '<div className="d-flex align-items-stretch">...</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Responsive variations also exist for <code>align-items</code>.
            </p>

            <ul>
                <li><code>.align-items-start</code></li>
                <li><code>.align-items-end</code></li>
                <li><code>.align-items-center</code></li>
                <li><code>.align-items-baseline</code></li>
                <li><code>.align-items-stretch</code></li>
                <li><code>.align-items-sm-start</code></li>
                <li><code>.align-items-sm-end</code></li>
                <li><code>.align-items-sm-center</code></li>
                <li><code>.align-items-sm-baseline</code></li>
                <li><code>.align-items-sm-stretch</code></li>
                <li><code>.align-items-md-start</code></li>
                <li><code>.align-items-md-end</code></li>
                <li><code>.align-items-md-center</code></li>
                <li><code>.align-items-md-baseline</code></li>
                <li><code>.align-items-md-stretch</code></li>
                <li><code>.align-items-lg-start</code></li>
                <li><code>.align-items-lg-end</code></li>
                <li><code>.align-items-lg-center</code></li>
                <li><code>.align-items-lg-baseline</code></li>
                <li><code>.align-items-lg-stretch</code></li>
                <li><code>.align-items-xl-start</code></li>
                <li><code>.align-items-xl-end</code></li>
                <li><code>.align-items-xl-center</code></li>
                <li><code>.align-items-xl-baseline</code></li>
                <li><code>.align-items-xl-stretch</code></li>
            </ul>
        </div>
    );
};

export default AlignItems;
