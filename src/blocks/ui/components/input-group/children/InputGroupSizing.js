import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const InputGroupSizing = () => {
    return (
        <div id="input-group-sizing">
            <h4>Sizing</h4>
            <p>Add the relative form sizing classes to the <code>.input-group</code> itself and contents within will automatically resize—no need for repeating the form control size classes on each element.</p>
            <p><strong>Sizing on the individual input group elements isn’t supported.</strong></p>

            <div className="bd-example">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group input-group-lg">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
            </div>

            <PrismCode
                code={
                '<div className="input-group input-group-sm mb-3">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">\n' +
                '</div>\n' +
                '\n' +
                '<div className="input-group mb-3">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text" id="inputGroup-sizing-default">Default</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">\n' +
                '</div>\n' +
                '\n' +
                '<div className="input-group input-group-lg">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default InputGroupSizing;
