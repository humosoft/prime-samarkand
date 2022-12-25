import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonAddons = () => {
    return (
        <div id="button-addons">
            <h4>Button addons</h4>

            <div className="bd-example">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon1">
                            Button
                        </button>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                            Button
                        </button>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend" id="button-addon3">
                        <button className="btn btn-outline-secondary" type="button">
                            Button
                        </button>
                        <button className="btn btn-outline-secondary" type="button">
                            Button
                        </button>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        aria-label="Example text with two button addons"
                        aria-describedby="button-addon3"
                    />
                </div>

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username with two button addons"
                        aria-describedby="button-addon4"
                    />
                    <div className="input-group-append" id="button-addon4">
                        <button className="btn btn-outline-secondary" type="button">
                            Button
                        </button>
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
                    '    <button className="btn btn-outline-primary" type="button" id="button-addon1">Button</button>\n' +
                    '  </div>\n' +
                    '  <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="input-group mb-3">\n' +
                    '  <input type="text" className="form-control" placeholder="Recipient\'s username" aria-label="Recipient\'s username" aria-describedby="button-addon2">\n' +
                    '  <div className="input-group-append">\n' +
                    '    <button className="btn btn-outline-primary" type="button" id="button-addon2">Button</button>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="input-group mb-3">\n' +
                    '  <div className="input-group-prepend" id="button-addon3">\n' +
                    '    <button className="btn btn-outline-primary" type="button">Button</button>\n' +
                    '    <button className="btn btn-outline-primary" type="button">Button</button>\n' +
                    '  </div>\n' +
                    '  <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="input-group">\n' +
                    '  <input type="text" className="form-control" placeholder="Recipient\'s username" aria-label="Recipient\'s username with two button addons" aria-describedby="button-addon4">\n' +
                    '  <div className="input-group-append" id="button-addon4">\n' +
                    '    <button className="btn btn-outline-primary" type="button">Button</button>\n' +
                    '    <button className="btn btn-outline-primary" type="button">Button</button>\n' +
                    '  </div>\n' +
                    '</div>'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />
        </div>
    );
};

export default ButtonAddons;
