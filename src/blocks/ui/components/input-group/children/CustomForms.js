import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const CustomForms = () => {
    return (
        <div id="custom-forms">
            <h4>Custom forms</h4>
            <p>Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.</p>

            <div id="custom-select">
                <h5>Custom select</h5>

                <div className="bd-example">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">
                                Options
                            </label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option defaultValue="">Choose...</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <select className="custom-select" id="inputGroupSelect02">
                            <option defaultValue="">Choose...</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                        <div className="input-group-append">
                            <label className="input-group-text" htmlFor="inputGroupSelect02">
                                Options
                            </label>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button">
                                Button
                            </button>
                        </div>
                        <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                            <option defaultValue="">Choose...</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option defaultValue="">Choose...</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">
                                Button
                            </button>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={
                        '<div className="input-group mb-3">\n' +
                        '  <div className="input-group-prepend">\n' +
                        '    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>\n' +
                        '  </div>\n' +
                        '  <select className="custom-select" id="inputGroupSelect01">\n' +
                        '    <option selected="">Choose...</option>\n' +
                        '    <option value="1">One</option>\n' +
                        '    <option value="2">Two</option>\n' +
                        '    <option value="3">Three</option>\n' +
                        '  </select>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="input-group mb-3">\n' +
                        '  <select className="custom-select" id="inputGroupSelect02">\n' +
                        '    <option selected="">Choose...</option>\n' +
                        '    <option value="1">One</option>\n' +
                        '    <option value="2">Two</option>\n' +
                        '    <option value="3">Three</option>\n' +
                        '  </select>\n' +
                        '  <div className="input-group-append">\n' +
                        '    <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="input-group mb-3">\n' +
                        '  <div className="input-group-prepend">\n' +
                        '    <button className="btn btn-outline-primary" type="button">Button</button>\n' +
                        '  </div>\n' +
                        '  <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">\n' +
                        '    <option selected="">Choose...</option>\n' +
                        '    <option value="1">One</option>\n' +
                        '    <option value="2">Two</option>\n' +
                        '    <option value="3">Three</option>\n' +
                        '  </select>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="input-group">\n' +
                        '  <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">\n' +
                        '    <option selected="">Choose...</option>\n' +
                        '    <option value="1">One</option>\n' +
                        '    <option value="2">Two</option>\n' +
                        '    <option value="3">Three</option>\n' +
                        '  </select>\n' +
                        '  <div className="input-group-append">\n' +
                        '    <button className="btn btn-outline-primary" type="button">Button</button>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={ ['line-numbers'] }
                />
            </div>

            <div id="custom-file-input">
                <h5>Custom file input</h5>

                <div className="bd-example">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                Choose file
                            </label>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02" />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">
                                Choose file
                            </label>
                        </div>
                        <div className="input-group-append">
                            <span className="input-group-text" id="inputGroupFileAddon02">
                                Upload
                            </span>
                        </div>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon03">
                                Button
                            </button>
                        </div>
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
                            <label className="custom-file-label" htmlFor="inputGroupFile03">
                                Choose file
                            </label>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                            <label className="custom-file-label" htmlFor="inputGroupFile04">
                                Choose file
                            </label>
                        </div>
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">
                                Button
                            </button>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={
                        '<div className="input-group mb-3">\n' +
                        '  <div className="input-group-prepend">\n' +
                        '    <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>\n' +
                        '  </div>\n' +
                        '  <div className="custom-file">\n' +
                        '    <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">\n' +
                        '    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="input-group mb-3">\n' +
                        '  <div className="custom-file">\n' +
                        '    <input type="file" className="custom-file-input" id="inputGroupFile02">\n' +
                        '    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>\n' +
                        '  </div>\n' +
                        '  <div className="input-group-append">\n' +
                        '    <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="input-group mb-3">\n' +
                        '  <div className="input-group-prepend">\n' +
                        '    <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon03">Button</button>\n' +
                        '  </div>\n' +
                        '  <div className="custom-file">\n' +
                        '    <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03">\n' +
                        '    <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="input-group">\n' +
                        '  <div className="custom-file">\n' +
                        '    <input type="file" className="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04">\n' +
                        '    <label className="custom-file-label" htmlFor="inputGroupFile04">Choose file</label>\n' +
                        '  </div>\n' +
                        '  <div className="input-group-append">\n' +
                        '    <button className="btn btn-outline-primary" type="button" id="inputGroupFileAddon04">Button</button>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={ ['line-numbers'] }
                />
            </div>
        </div>
    );
};

export default CustomForms;
