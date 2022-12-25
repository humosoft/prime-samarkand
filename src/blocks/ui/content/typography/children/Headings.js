import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Headings = () => {
    return (
        <div id="headings">
            <h4>Headings</h4>
            <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.</p>

            <div className="bd-example">
                <h1>H1 heading</h1>
                <h2>H2 heading</h2>
                <h3>H3 heading</h3>
                <h4>H4 heading</h4>
                <h5>H5 heading</h5>
                <h6>H6 heading</h6>
            </div>

            <PrismCode
                code={
                    '<h1>H1</h1>\n' +
                    '<h2>H2</h2>\n' +
                    '<h3>H3</h3>\n' +
                    '<h4>H4</h4>\n' +
                    '<h5>H5</h5>\n' +
                    '<h6>H6</h6>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <p>
                <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but
                cannot use the associated HTML element.
            </p>

            <div className="bd-example">
              <h1 className="h1">H1 heading</h1>
              <h2 className="h2">H2 heading</h2>
              <h3 className="h3">H3 heading</h3>
              <h4 className="h4">H4 heading</h4>
              <h5 className="h5">H5 heading</h5>
              <h6 className="h6">H6 heading</h6>
            </div>

            <PrismCode
                code={
                    '<h1 className="h1">H1 heading</h1>\n' +
                    '<h2 className="h2">H2 heading</h2>\n' +
                    '<h3 className="h3">H3 heading</h3>\n' +
                    '<h4 className="h4">H4 heading</h4>\n' +
                    '<h5 className="h5">H5 heading</h5>\n' +
                    '<h6 className="h6">H6 heading</h6>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default Headings;
