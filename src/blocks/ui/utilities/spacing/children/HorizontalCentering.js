import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const HorizontalCentering = () => {
    return (
        <div id="horizontal-centering">
            <h4>Horizontal centering</h4>
            <p>Additionally, Bootstrap also includes an <code>.mx-auto</code> class for horizontally centering fixed-width block level content—that is, content that has <code>display: block</code> and a <code>width</code> set—by setting the horizontal margins to <code>auto</code>.</p>

            <div className="bd-example">
                <div className="mx-auto bd-highlight" style={ { "width": "200px" } }>Centered element</div>
            </div>

            <PrismCode
                code={ '<div className="mx-auto bd-highlight" style="width: 200px;">\n' +
                '  Centered element\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default HorizontalCentering;
