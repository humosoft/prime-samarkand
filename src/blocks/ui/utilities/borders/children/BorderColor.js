import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const BorderColor = () => {
    return (
        <div id="border-color">
            <h4>Border color</h4>
            <p>Change the border color using utilities built on our theme colors.</p>

            <div className="bd-example-border-utils">
                <div className="bd-example">
                    <span className="border border-primary"></span>
                    <span className="border border-secondary"></span>
                    <span className="border border-success"></span>
                    <span className="border border-danger"></span>
                    <span className="border border-warning"></span>
                    <span className="border border-info"></span>
                    <span className="border border-light"></span>
                    <span className="border border-dark"></span>
                    <span className="border border-white"></span>
                </div>
            </div>

            <PrismCode
                code={ '<span className="border border-primary"></span>\n' +
                '<span className="border border-secondary"></span>\n' +
                '<span className="border border-success"></span>\n' +
                '<span className="border border-danger"></span>\n' +
                '<span className="border border-warning"></span>\n' +
                '<span className="border border-info"></span>\n' +
                '<span className="border border-light"></span>\n' +
                '<span className="border border-dark"></span>\n' +
                '<span className="border border-white"></span>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default BorderColor;
