import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const AlignSelf = () => {
    return (
        <div id="align-self" className="spacer m-top-lg">
            <h4>Align self</h4>
            <p>Use <code>align-self</code> utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if <code>flex-direction: column</code>). Choose from the same options as <code>align-items</code>: <code>start</code>, <code>end</code>, <code>center</code>, <code>baseline</code>, or <code>stretch</code> (browser default).</p>

            <div className="bd-example">
                <div className="d-flex bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="align-self-start p-2 bd-highlight">Aligned flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="align-self-end p-2 bd-highlight">Aligned flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="align-self-center p-2 bd-highlight">Aligned flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex bd-highlight mb-3" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="align-self-baseline p-2 bd-highlight">Aligned flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex bd-highlight" style={ { "height": "100px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="align-self-stretch p-2 bd-highlight">Aligned flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="align-self-start">Aligned flex item</div>\n' +
                '<div className="align-self-end">Aligned flex item</div>\n' +
                '<div className="align-self-center">Aligned flex item</div>\n' +
                '<div className="align-self-baseline">Aligned flex item</div>\n' +
                '<div className="align-self-stretch">Aligned flex item</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Responsive variations also exist for <code>align-self</code>.
            </p>

            <ul>
                <li><code>.align-self-start</code></li>
                <li><code>.align-self-end</code></li>
                <li><code>.align-self-center</code></li>
                <li><code>.align-self-baseline</code></li>
                <li><code>.align-self-stretch</code></li>
                <li><code>.align-self-sm-start</code></li>
                <li><code>.align-self-sm-end</code></li>
                <li><code>.align-self-sm-center</code></li>
                <li><code>.align-self-sm-baseline</code></li>
                <li><code>.align-self-sm-stretch</code></li>
                <li><code>.align-self-md-start</code></li>
                <li><code>.align-self-md-end</code></li>
                <li><code>.align-self-md-center</code></li>
                <li><code>.align-self-md-baseline</code></li>
                <li><code>.align-self-md-stretch</code></li>
                <li><code>.align-self-lg-start</code></li>
                <li><code>.align-self-lg-end</code></li>
                <li><code>.align-self-lg-center</code></li>
                <li><code>.align-self-lg-baseline</code></li>
                <li><code>.align-self-lg-stretch</code></li>
                <li><code>.align-self-xl-start</code></li>
                <li><code>.align-self-xl-end</code></li>
                <li><code>.align-self-xl-center</code></li>
                <li><code>.align-self-xl-baseline</code></li>
                <li><code>.align-self-xl-stretch</code></li>
            </ul>
        </div>
    );
};

export default AlignSelf;
