import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const InputGroupSecondary = () => {
    return (
        <div id="input-group-secondary">
            <h4>Secondary</h4>

            <div className="bd-example">
                <p className="input-group gutter-width-xs">
                    <span className="gutter-width">
                        <input className="form-control" type="text" placeholder="Input text" />
                    </span>
                    <span className="gutter-width">
                        <input className="form-control" type="text" placeholder="Input text" />
                    </span>
                </p>
            </div>

            <PrismCode
                code={
                '<p className="input-group gutter-width-xs">\n' +
                '  <span className="gutter-width">\n' +
                '    <input className="form-control" type="text" placeholder="Input text"/>\n' +
                '  </span>\n' +
                '  <span className="gutter-width">\n' +
                '    <input className="form-control" type="text" placeholder="Input text"/>\n' +
                '  </span>\n' +
                '</p>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default InputGroupSecondary;
