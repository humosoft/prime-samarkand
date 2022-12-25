import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const LinkColor = () => {
    return (
        <div id="link-color">
            <h4>Link color</h4>
            <p>Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert.</p>

            <div className="bd-example">
                <div className="alert alert-primary" role="alert">
                    A simple primary alert with <a href="#link-color/action" className="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div className="alert alert-secondary" role="alert">
                    A simple secondary alert with <a href="#link-color/action" className="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div className="alert alert-success" role="alert">
                    A simple success alert with <a href="#link-color/action" className="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div className="alert alert-danger" role="alert">
                    A simple danger alert with <a href="#link-color/action" className="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div className="alert alert-warning" role="alert">
                    A simple warning alert with <a href="#link-color/action" className="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div className="alert alert-info" role="alert">
                    A simple info alert with <a href="#link-color/action" className="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div className="alert alert-light" role="alert">
                    A simple light alert with <a href="#link-color/action" className="alert-link">an example link</a>. Give it a click if you like.
                </div>

                <div className="alert alert-dark" role="alert">
                    A simple dark alert with <a href="#link-color" className="alert-link">an example link</a>. Give it a click if you like.
                </div>
            </div>

            <PrismCode
                code={
                '<div className="alert alert-primary" role="alert">\n' +
                '  A simple primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>\n' +
                '<div className="alert alert-secondary" role="alert">\n' +
                '  A simple secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>\n' +
                '<div className="alert alert-success" role="alert">\n' +
                '  A simple success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>\n' +
                '<div className="alert alert-danger" role="alert">\n' +
                '  A simple danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>\n' +
                '<div className="alert alert-warning" role="alert">\n' +
                '  A simple warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>\n' +
                '<div className="alert alert-info" role="alert">\n' +
                '  A simple info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>\n' +
                '<div className="alert alert-light" role="alert">\n' +
                '  A simple light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>\n' +
                '<div className="alert alert-dark" role="alert">\n' +
                '  A simple dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default LinkColor;
