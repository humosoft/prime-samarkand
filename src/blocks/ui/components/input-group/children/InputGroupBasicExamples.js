import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const InputGroupBasicExamples = () => {
    return (
        <div id="input-group-basic-examples">
            <h4>Basic examples</h4>
            <p>Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place <code>&lt;label&gt;</code>s outside the input group.</p>

            <div className="bd-example">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                </div>

                <label htmlFor="basic-url">Your vanity URL</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                    <div className="input-group-append">
                        <span className="input-group-text">.00</span>
                    </div>
                </div>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">With textarea</span>
                    </div>
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="input-group mb-3">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text" id="basic-addon1">@</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>\n' +
                '</div>\n' +
                '\n' +
                '<div className="input-group mb-3">\n' +
                '  <input type="text" className="form-control" placeholder="Recipient\'s username" aria-label="Recipient\'s username" aria-describedby="basic-addon2"/>\n' +
                '  <div className="input-group-append">\n' +
                '    <span className="input-group-text" id="basic-addon2">@example.com</span>\n' +
                '  </div>\n' +
                '</div>\n' +
                '\n' +
                '<label htmlFor="basic-url">Your vanity URL</label>\n' +
                '<div className="input-group mb-3">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>\n' +
                '</div>\n' +
                '\n' +
                '<div className="input-group mb-3">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text">$</span>\n' +
                '  </div>\n' +
                '  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>\n' +
                '  <div className="input-group-append">\n' +
                '    <span className="input-group-text">.00</span>\n' +
                '  </div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="input-group">\n' +
                '  <div className="input-group-prepend">\n' +
                '    <span className="input-group-text">With textarea</span>\n' +
                '  </div>\n' +
                '  <textarea className="form-control" aria-label="With textarea"></textarea>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default InputGroupBasicExamples;
