import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const MultipleAddons = () => {
    return (
        <div id="multiple-addons">
            <h4>Multiple addons</h4>
            <p>Multiple add-ons are supported and can be mixed with checkbox and radio input versions.</p>

            <div className="bd-example">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                        <span className="input-group-text">0.00</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                </div>

                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                    <div className="input-group-append">
                        <span className="input-group-text">$</span>
                        <span className="input-group-text">0.00</span>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="input-group mb-3">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text">$</span>\n' +
                '    <span className="input-group-text">0.00</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>\n' +
                '</div>\n' +
                '\n' +
                '<div className="input-group">\n' +
                '  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>\n' +
                '  <div className="input-group-append">\n' +
                '    <span className="input-group-text">$</span>\n' +
                '    <span className="input-group-text">0.00</span>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default MultipleAddons;
