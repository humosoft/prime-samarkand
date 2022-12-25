import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const MultipleInputs = () => {
    return (
        <div id="multiple-inputs">
            <h4>Multiple inputs</h4>
            <p>While multiple <code>&lt;input&gt;</code>s are supported visually, validation styles are only available for input groups with a single <code>&lt;input&gt;</code>.</p>

            <div className="bd-example">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">First and last name</span>
                    </div>
                    <input type="text" aria-label="First name" className="form-control" />
                    <input type="text" aria-label="Last name" className="form-control" />
                </div>
            </div>

            <PrismCode
                code={
                '<div className="input-group">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text">First and last name</span>\n' +
                '  </div>\n' +
                '  <input type="text" aria-label="First name" className="form-control">\n' +
                '  <input type="text" aria-label="Last name" className="form-control">\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default MultipleInputs;
