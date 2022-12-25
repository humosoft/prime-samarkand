import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const InputGroupPrimary = () => {
    return (
        <div id="input-group-primary">
            <h4>Primary</h4>

            <div className="bd-example">
                <p className="input-group gutter-width-xs">
                    <span className="gutter-width">
                        <input type="text" placeholder="Input text" />
                    </span>

                    <span className="gutter-width">
                        <input type="text" placeholder="Input text" />
                    </span>
                </p>
            </div>

            <PrismCode
                code={
                '<p className="input-group gutter-width-xs">\n' +
                '  <span className="gutter-width">\n' +
                '    <input type="text" placeholder="Input text"/>\n' +
                '  </span>\n' +
                '\n' +
                '  <span className="gutter-width">\n' +
                '    <input type="text" placeholder="Input text"/>\n' +
                '  </span>\n' +
                '</p>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default InputGroupPrimary;
