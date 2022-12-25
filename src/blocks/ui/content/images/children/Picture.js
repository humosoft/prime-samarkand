import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Picture = () => {
    return (
        <div id="picture">
            <h4>Picture</h4>
            <p>If you are using the <code>&lt;picture&gt;</code> element to specify multiple <code>&lt;source&gt;</code> elements for a specific <code>&lt;img&gt;</code>, make sure to add the <code>.img-*</code> classes to the <code>&lt;img&gt;</code> and not to the <code>&lt;picture&gt;</code> tag.</p>

            <PrismCode
                code={
                '<picture>\n' +
                '  <source srcSet="..." type="image/svg+xml">\n' +
                '  <img src="..." className="img-fluid img-thumbnail" alt="...">\n' +
                '</picture>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Picture;
