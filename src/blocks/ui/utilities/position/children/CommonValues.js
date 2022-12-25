import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const CommonValues = () => {
    return (
        <div id="common-values">
            <h4>Common values</h4>
            <p>Quick positioning classes are available, though they are not responsive.</p>

            <PrismCode
                code={ '<div className="position-static">...</div>\n' +
                '<div className="position-relative">...</div>\n' +
                '<div className="position-absolute">...</div>\n' +
                '<div className="position-fixed">...</div>\n' +
                '<div className="position-sticky">...</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default CommonValues;
