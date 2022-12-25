import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const FontWeightAndItalics = () => {
    return (
        <div id="font-weight-and-italics" className="spacer p-top-lg">
            <h4>Font weight and italics</h4>
            <p>Quickly change the weight (boldness) of text or italicize text.</p>

            <div className="bd-example">
                <p className="font-weight-bold">Bold text.</p>
                <p className="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
                <p className="font-weight-normal">Normal weight text.</p>
                <p className="font-weight-light">Light weight text.</p>
                <p className="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
                <p className="font-italic">Italic text.</p>
            </div>

            <PrismCode
                code={ '<p className="font-weight-bold">Bold text.</p>\n' +
                '<p className="font-weight-bolder">Bolder weight text (relative to the parent element).</p>\n' +
                '<p className="font-weight-normal">Normal weight text.</p>\n' +
                '<p className="font-weight-light">Light weight text.</p>\n' +
                '<p className="font-weight-lighter">Lighter weight text (relative to the parent element).</p>\n' +
                '<p className="font-italic">Italic text.</p>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default FontWeightAndItalics;
