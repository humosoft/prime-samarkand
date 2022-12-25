import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const RelativeToTheViewport = () => {
    return (
        <div id="relative-to-the-viewport">
            <h4>Relative to the viewport</h4>
            <p>You can also use utilities to set the width and height relative to the viewport.</p>

            <PrismCode
                code={ '<div className="min-vw-100">Min-width 100vw</div>\n' +
                '<div className="min-vh-100">Min-height 100vh</div>\n' +
                '<div className="vw-100">Width 100vw</div>\n' +
                '<div className="vh-100">Height 100vh</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default RelativeToTheViewport;
