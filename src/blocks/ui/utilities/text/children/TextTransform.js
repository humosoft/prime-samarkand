import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const TextTransform = () => {
    return (
        <div id="text-transform">
            <h4>Text transform</h4>
            <p>Transform text in components with text capitalization classes.</p>

            <div className="bd-example">
                <p className="text-lowercase">Lowercased text.</p>
                <p className="text-uppercase">Uppercased text.</p>
                <p className="text-capitalize">CapiTaliZed text.</p>
            </div>

            <PrismCode
                code={ '<p className="text-lowercase">Lowercased text.</p>\n' +
                '<p className="text-uppercase">Uppercased text.</p>\n' +
                '<p className="text-capitalize">CapiTaliZed text.</p>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Note how <code>.text-capitalize</code> only changes the first letter of each word, leaving the case of any other letters unaffected.</p>
        </div>
    );
};

export default TextTransform;
