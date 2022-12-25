import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const InputGroupWrapping = () => {
    return (
        <div id="input-group-wrapping">
            <h4>Wrapping</h4>
            <p>Input groups wrap by default via <code>flex-wrap: wrap</code> in order to accommodate custom form field validation within an input group. You may disable this with <code>.flex-nowrap</code>.</p>

            <div className="bd-example">
                <div className="input-group flex-nowrap">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>

            <PrismCode
                code={
                '<div className="input-group flex-nowrap">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text" id="addon-wrapping">@</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default InputGroupWrapping;
