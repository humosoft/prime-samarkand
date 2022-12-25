import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const FormExamples = () => {
    return (
        <div id="form-examples">
            <h4>Examples</h4>

            <div id="form-primary">
                <h5>Form primary</h5>
                <p>No classes.</p>

                <div className="bd-example">
                    <form>
                        <p><input type="text" placeholder="Input text" /></p>

                        <p><textarea placeholder="Textarea"></textarea></p>

                        <p>
                            <select>
                                <option>Select</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </p>

                        <p className="form-crop-ba">
                            <input type="checkbox" id="checkbox-input" />
                            <label htmlFor="checkbox-input">Checkbox</label>
                        </p>

                        <p className="form-crop-ba">
                            <input type="radio" id="radio-input" />
                            <label htmlFor="radio-input">Radio</label>
                        </p>

                        <p className="form-check form-crop-ba">
                            <input type="checkbox" className="form-check-input" id="checkbox-input-2" />
                            <label className="form-label-secondary" htmlFor="checkbox-input-2">Checkbox</label>
                        </p>

                        <p className="form-check form-crop-ba">
                            <input type="radio" className="form-check-input" id="radio-input-2" />
                            <label className="form-label-secondary" htmlFor="radio-input-2">Radio</label>
                        </p>
                    </form>
                </div>

                <PrismCode
                    code={
                    '<form>\n' +
                    '  <p>\n' +
                    '    <input type="text" placeholder="Input text">\n' +
                    '  </p>\n' +
                    '  <p>\n' +
                    '    <textarea placeholder="Textarea"></textarea>\n' +
                    '  </p>\n' +
                    '  <p>\n' +
                    '    <select>\n' +
                    '      <option>Select</option>\n' +
                    '      <option>Option 1</option>\n' +
                    '      <option>Option 2</option>\n' +
                    '    </select>\n' +
                    '  </p>\n' +
                    '  <p className="form-crop-ba">\n' +
                    '    <input type="checkbox" id="checkbox-input">\n' +
                    '    <label htmlFor="checkbox-input">Checkbox</label>\n' +
                    '  </p>\n' +
                    '  <p className="form-crop-ba">\n' +
                    '    <input type="radio" id="radio-input">\n' +
                    '    <label htmlFor="radio-input">Radio</label>\n' +
                    '  </p>\n' +
                    '  <p className="form-check form-crop-ba">\n' +
                    '    <input type="checkbox" className="form-check-input" id="checkbox-input-2">\n' +
                    '    <label className="form-label-secondary" htmlFor="checkbox-input-2">Checkbox</label>\n' +
                    '  </p>\n' +
                    '  <p className="form-check form-crop-ba">\n' +
                    '    <input type="radio" className="form-check-input" id="radio-input-2">\n' +
                    '    <label className="form-label-secondary" htmlFor="radio-input-2">Radio</label>\n' +
                    '  </p>\n' +
                    '</form>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="form-secondary">
                <h5>Form secondary</h5>
                <p>With classes.</p>

                <div className="bd-example">
                    <form>
                        <p><input type="text" className="form-control" placeholder="Input text" /></p>

                        <p><textarea className="form-control" placeholder="Textarea"></textarea></p>

                        <p>
                            <select className="form-control">
                                <option>Select</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </p>

                        <p className="custom-control custom-checkbox form-crop-ba">
                            <input type="checkbox" className="custom-control-input" id="custom-checkbox-input" />
                            <label htmlFor="custom-checkbox-input" className="custom-control-label">Checkbox</label>
                        </p>

                        <p className="custom-control custom-radio form-crop-ba">
                            <input type="radio" className="custom-control-input" id="custom-radio-input" />
                            <label htmlFor="custom-radio-input" className="custom-control-label">Radio</label>
                        </p>
                    </form>
                </div>

                <PrismCode
                    code={
                    '<form>\n' +
                    '  <p>\n' +
                    '    <input type="text" className="form-control" placeholder="Input text">\n' +
                    '  </p>\n' +
                    '  <p>\n' +
                    '    <textarea className="form-control" placeholder="Textarea"></textarea>\n' +
                    '  </p>\n' +
                    '  <p>\n' +
                    '    <select className="form-control">\n' +
                    '      <option>Select</option>\n' +
                    '      <option>Option 1</option>\n' +
                    '      <option>Option 2</option>\n' +
                    '    </select>\n' +
                    '  </p>\n' +
                    '  <p className="custom-control custom-checkbox form-crop-ba">\n' +
                    '    <input type="checkbox" className="custom-control-input" id="custom-checkbox-input">\n' +
                    '    <label htmlFor="custom-checkbox-input" className="custom-control-label">Checkbox</label>\n' +
                    '  </p>\n' +
                    '  <p className="custom-control custom-radio form-crop-ba">\n' +
                    '    <input type="radio" className="custom-control-input" id="custom-radio-input">\n' +
                    '    <label htmlFor="custom-radio-input" className="custom-control-label">Radio</label>\n' +
                    '  </p>\n' +
                    '</form>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default FormExamples;
