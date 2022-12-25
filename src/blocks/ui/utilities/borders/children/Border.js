import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Border = () => {
    return (
        <div id="border">
            <h4>Border</h4>
            <p>Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.</p>

            <h5>Additive</h5>

            <div className="bd-example-border-utils">
                <div className="bd-example">
                    <span className="border"></span>
                    <span className="border-top"></span>
                    <span className="border-right"></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>
                </div>
            </div>

            <PrismCode
                code={ '<span className="border"></span>\n' +
                '<span className="border-top"></span>\n' +
                '<span className="border-right"></span>\n' +
                '<span className="border-bottom"></span>\n' +
                '<span className="border-left"></span>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <h5>Subtractive</h5>

            <div className="bd-example-border-utils bd-example-border-utils-0">
                <div className="bd-example">
                    <span className="border-0"></span>
                    <span className="border-top-0"></span>
                    <span className="border-right-0"></span>
                    <span className="border-bottom-0"></span>
                    <span className="border-left-0"></span>
                </div>
            </div>

            <PrismCode
                code={ '<span className="border-0"></span>\n' +
                '<span className="border-top-0"></span>\n' +
                '<span className="border-right-0"></span>\n' +
                '<span className="border-bottom-0"></span>\n' +
                '<span className="border-left-0"></span>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Border;
