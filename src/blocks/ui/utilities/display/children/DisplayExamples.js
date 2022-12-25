import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const DisplayExamples = () => {
    return (
        <div id="display-examples" className="spacer m-top-lg">
            <h4>Examples</h4>

            <div className="bd-example">
                <div className="d-inline p-2 bg-primary text-white mr-1">d-inline</div>
                <div className="d-inline p-2 bg-secondary text-white">d-inline</div>
            </div>

            <PrismCode
                code={
                    '<div className="d-inline p-2 bg-primary text-white">d-inline</div>\n' +
                    '<div className="d-inline p-2 bg-secondary text-white">d-inline</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <div className="bd-example">
                <span className="d-block p-2 bg-primary text-white">d-block</span>
                <span className="d-block p-2 bg-secondary text-white">d-block</span>
            </div>

            <PrismCode
                code={
                    '<span className="d-block p-2 bg-primary text-white">d-block</span>\n' +
                    '<span className="d-block p-2 bg-secondary text-white">d-block</span>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default DisplayExamples;
