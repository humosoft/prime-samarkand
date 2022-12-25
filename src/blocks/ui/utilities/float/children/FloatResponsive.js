import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const FloatResponsive = () => {
    return (
        <div id="float-responsive">
            <h4>Responsive</h4>
            <p>Responsive variations also exist for each <code>float</code> value.</p>

            <div className="bd-example">
                <div className="float-sm-left">Float left on viewports sized SM (small) or wider</div>
                <br />
                <div className="float-md-left">Float left on viewports sized MD (medium) or wider</div>
                <br />
                <div className="float-lg-left">Float left on viewports sized LG (large) or wider</div>
                <br />
                <div className="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div>
                <br />
            </div>

            <PrismCode
                code={ '<div className="float-sm-left">Float left on viewports sized SM (small) or wider</div>' +
                '<br/>\n' +
                '<div className="float-md-left">Float left on viewports sized MD (medium) or wider</div>' +
                '<br/>\n' +
                '<div className="float-lg-left">Float left on viewports sized LG (large) or wider</div>' +
                '<br/>\n' +
                '<div className="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div>' +
                '<br/>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Here are all the support classes;</p>

            <ul>
                <li><code>.float-left</code></li>
                <li><code>.float-right</code></li>
                <li><code>.float-none</code></li>
                <li><code>.float-sm-left</code></li>
                <li><code>.float-sm-right</code></li>
                <li><code>.float-sm-none</code></li>
                <li><code>.float-md-left</code></li>
                <li><code>.float-md-right</code></li>
                <li><code>.float-md-none</code></li>
                <li><code>.float-lg-left</code></li>
                <li><code>.float-lg-right</code></li>
                <li><code>.float-lg-none</code></li>
                <li><code>.float-xl-left</code></li>
                <li><code>.float-xl-right</code></li>
                <li><code>.float-xl-none</code></li>
            </ul>
        </div>
    );
};

export default FloatResponsive;
