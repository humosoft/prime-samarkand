import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const FloatClasses = () => {
    return (
        <div id="float-classes">
            <h4>Classes</h4>
            <p>Toggle a float with a class:</p>

            <div className="bd-example">
                <div className="float-left">Float left on all viewport sizes</div>
                <br />
                <div className="float-right">Float right on all viewport sizes</div>
                <br />
                <div className="float-none">Don't float on all viewport sizes</div>
            </div>

            <PrismCode
                code={ '<div className="float-left">Float left on all viewport sizes</div>' +
                '<br/>\n' +
                '<div className="float-right">Float right on all viewport sizes</div>' +
                '<br/>\n' +
                '<div className="float-none">Don\'t float on all viewport sizes</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default FloatClasses;
