import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const OutlineButtons = () => {
    return (
        <div id="outline-buttons">
            <h4>Outline buttons</h4>

            <div className="bd-example">
                <button type="button" className="btn btn-outline-primary mr-1">
                    Primary
                </button>
                <button type="button" className="btn btn-outline-secondary mr-1">
                    Secondary
                </button>
                <button type="button" className="btn btn-outline-success">
                    Success
                </button>
                <button type="button" className="btn btn-outline-danger mr-1">
                    Danger
                </button>
                <button type="button" className="btn btn-outline-warning mr-1">
                    Warning
                </button>
                <button type="button" className="btn btn-outline-info">
                    Info
                </button>
                <button type="button" className="btn btn-outline-light mr-1">
                    Light
                </button>
                <button type="button" className="btn btn-outline-dark">
                    Dark
                </button>
            </div>

            <PrismCode
                code={
                    '<button type="button" className="btn btn-outline-primary">Primary</button>\n' +
                    '<button type="button" className="btn btn-outline-secondary">Secondary</button>\n' +
                    '<button type="button" className="btn btn-outline-success">Success</button>\n' +
                    '<button type="button" className="btn btn-outline-danger">Danger</button>\n' +
                    '<button type="button" className="btn btn-outline-warning">Warning</button>\n' +
                    '<button type="button" className="btn btn-outline-info">Info</button>\n' +
                    '<button type="button" className="btn btn-outline-light">Light</button>\n' +
                    '<button type="button" className="btn btn-outline-dark">Dark</button>'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />
        </div>
    );
};

export default OutlineButtons;
