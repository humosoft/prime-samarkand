import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ResetColor = () => {
    return (
        <div id="reset-color">
            <h4>Reset color</h4>
            <p>Reset a text or link’s color with <code>.text-reset</code>, so that it inherits the color from its parent.</p>

            <div className="bd-example">
                <p className="text-muted">Muted text with a <a href="#reset-color/action" className="text-reset">reset link</a>.</p>
            </div>

            <PrismCode
                code={ '<p className="text-muted">\n' +
                '  Muted text with a <a href="#" className="text-reset">reset link</a>.\n' +
                '</p>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ResetColor;
