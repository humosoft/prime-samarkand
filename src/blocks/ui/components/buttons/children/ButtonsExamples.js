import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonsExamples = () => {
    return (
        <div id="buttons-examples">
            <h4>Examples</h4>

            <div className="bd-example">
                <button type="button" className="btn btn-primary mr-1">
                    Primary
                </button>
                <button type="button" className="btn btn-secondary mr-1">
                    Secondary
                </button>
                <button type="button" className="btn btn-success">
                    Success
                </button>
                <button type="button" className="btn btn-danger mr-1">
                    Danger
                </button>
                <button type="button" className="btn btn-warning mr-1">
                    Warning
                </button>
                <button type="button" className="btn btn-info">
                    Info
                </button>
                <button type="button" className="btn btn-light mr-1">
                    Light
                </button>
                <button type="button" className="btn btn-dark mr-1">
                    Dark
                </button>
                <button type="button" className="btn btn-link">
                    Link
                </button>
            </div>

            <PrismCode
                code={
                    '<button type="button" className="btn btn-primary">Primary</button>\n' +
                    '<button type="button" className="btn btn-secondary">Secondary</button>\n' +
                    '<button type="button" className="btn btn-success">Success</button>\n' +
                    '<button type="button" className="btn btn-danger">Danger</button>\n' +
                    '<button type="button" className="btn btn-warning">Warning</button>\n' +
                    '<button type="button" className="btn btn-info">Info</button>\n' +
                    '<button type="button" className="btn btn-light">Light</button>\n' +
                    '<button type="button" className="btn btn-dark">Dark</button>\n\n' +
                    '<button type="button" className="btn btn-link">Link</button>'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />
        </div>
    );
};

export default ButtonsExamples;
