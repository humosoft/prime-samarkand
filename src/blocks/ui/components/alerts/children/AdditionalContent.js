import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const AdditionalContent = () => {
    return (
        <div id="additional-content">
            <h4>Additional content</h4>
            <p>Alerts can also contain additional HTML elements like headings, paragraphs and dividers.</p>

            <div className="bd-example">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Well done!</h4>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <hr />
                    <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="alert alert-success" role="alert">\n' +
                '  <h4 className="alert-heading">Well done!</h4>\n' +
                '  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n' +
                '  <hr>\n' +
                '  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default AdditionalContent;
