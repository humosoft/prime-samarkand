import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const DisplayInPrint = () => {
    return (
        <div id="display-in-print">
            <h4>Display in print</h4>
            <p>Change the <code>display</code> value of elements when printing with our print display utility classes. Includes support for the same <code>display</code> values as our responsive <code>.d-*</code> utilities.</p>

            <ul>
                <li><code>.d-print-none</code></li>
                <li><code>.d-print-inline</code></li>
                <li><code>.d-print-inline-block</code></li>
                <li><code>.d-print-block</code></li>
                <li><code>.d-print-table</code></li>
                <li><code>.d-print-table-row</code></li>
                <li><code>.d-print-table-cell</code></li>
                <li><code>.d-print-flex</code></li>
                <li><code>.d-print-inline-flex</code></li>
            </ul>

            <p>The print and display classes can be combined.</p>

            <div className="bd-example">
                <div className="d-print-none">Screen Only (Hide on print only)</div>
                <div className="d-none d-print-block">Print Only (Hide on screen only)</div>
                <div className="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>
            </div>

            <PrismCode
                code={ '<div className="d-print-none">Screen Only (Hide on print only)</div>\n' +
                '<div className="d-none d-print-block">Print Only (Hide on screen only)</div>\n' +
                '<div className="d-none d-lg-block d-print-block">Hide up to large on screen, but always show on print</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default DisplayInPrint;
