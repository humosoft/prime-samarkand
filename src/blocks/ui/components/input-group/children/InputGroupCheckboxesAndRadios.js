import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const InputGroupCheckboxesAndRadios = () => {
    return (
        <div id="input-group-checkboxes-and-radios">
            <h4>Checkboxes and radios</h4>
            <p>Place any checkbox or radio option within an input group’s addon instead of text.</p>

            <div className="bd-example">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with checkbox" />
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="radio" aria-label="Radio button for following text input" />
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with radio button" />
                </div>
            </div>

            <PrismCode
                code={
                '<div className="input-group mb-3">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <div className="input-group-text">\n' +
                '      <input type="checkbox" aria-label="Checkbox for following text input">\n' +
                '     </div>\n' +
                '   </div>\n' +
                '   <input type="text" className="form-control" aria-label="Text input with checkbox">\n' +
                '</div>\n' +
                '\n' +
                '<div className="input-group">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <div className="input-group-text">\n' +
                '      <input type="radio" aria-label="Radio button for following text input">\n' +
                '    </div>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" aria-label="Text input with radio button">\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default InputGroupCheckboxesAndRadios;
