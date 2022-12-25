import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonGroupSizing = () => {
    return (
        <div id="button-group-sizing">
            <h4>Sizing</h4>
            <p>Instead of applying button sizing classes to every button in a group, just add <code>.btn-group-*</code> to each <code>.btn-group</code>, including each one when nesting multiple groups.</p>

            <div className="bd-example">
                <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <button type="button" className="btn btn-primary">Left</button>
                    <button type="button" className="btn btn-primary">Middle</button>
                    <button type="button" className="btn btn-primary">Right</button>
                </div>
                <br />
                <div className="btn-group" role="group" aria-label="Default button group">
                    <button type="button" className="btn btn-primary">Left</button>
                    <button type="button" className="btn btn-primary">Middle</button>
                    <button type="button" className="btn btn-primary">Right</button>
                </div>
                <br />
                <div className="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <button type="button" className="btn btn-primary">Left</button>
                    <button type="button" className="btn btn-primary">Middle</button>
                    <button type="button" className="btn btn-primary">Right</button>
                </div>
            </div>

            <PrismCode
                code={ '<div className="btn-group btn-group-lg" role="group" aria-label="...">...</div>\n' +
                '<div className="btn-group" role="group" aria-label="...">...</div>\n' +
                '<div className="btn-group btn-group-sm" role="group" aria-label="...">...</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ButtonGroupSizing;
