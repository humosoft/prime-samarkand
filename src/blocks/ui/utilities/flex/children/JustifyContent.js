import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const JustifyContent = () => {
    return (
        <div id="justify-content" className="spacer m-top-lg">
            <h4>Justify content</h4>
            <p>Use <code>justify-content</code> utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if <code>flex-direction: column</code>). Choose from <code>start</code> (browser default), <code>end</code>, <code>center</code>, <code>between</code>, or <code>around</code>.</p>

            <div className="bd-example">
                <div className="d-flex justify-content-start bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex justify-content-end bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex justify-content-center bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex justify-content-between bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex justify-content-around bd-highlight">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex justify-content-start">...</div>\n' +
                '<div className="d-flex justify-content-end">...</div>\n' +
                '<div className="d-flex justify-content-center">...</div>\n' +
                '<div className="d-flex justify-content-between">...</div>\n' +
                '<div className="d-flex justify-content-around">...</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Responsive variations also exist for <code>justify-content</code>.
            </p>

            <ul>
                <li><code>.justify-content-start</code></li>
                <li><code>.justify-content-end</code></li>
                <li><code>.justify-content-center</code></li>
                <li><code>.justify-content-between</code></li>
                <li><code>.justify-content-around</code></li>
                <li><code>.justify-content-sm-start</code></li>
                <li><code>.justify-content-sm-end</code></li>
                <li><code>.justify-content-sm-center</code></li>
                <li><code>.justify-content-sm-between</code></li>
                <li><code>.justify-content-sm-around</code></li>
                <li><code>.justify-content-md-start</code></li>
                <li><code>.justify-content-md-end</code></li>
                <li><code>.justify-content-md-center</code></li>
                <li><code>.justify-content-md-between</code></li>
                <li><code>.justify-content-md-around</code></li>
                <li><code>.justify-content-lg-start</code></li>
                <li><code>.justify-content-lg-end</code></li>
                <li><code>.justify-content-lg-center</code></li>
                <li><code>.justify-content-lg-between</code></li>
                <li><code>.justify-content-lg-around</code></li>
                <li><code>.justify-content-xl-start</code></li>
                <li><code>.justify-content-xl-end</code></li>
                <li><code>.justify-content-xl-center</code></li>
                <li><code>.justify-content-xl-between</code></li>
                <li><code>.justify-content-xl-around</code></li>
            </ul>
        </div>
    );
};

export default JustifyContent;
