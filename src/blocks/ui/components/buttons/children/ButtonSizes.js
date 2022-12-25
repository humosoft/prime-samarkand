import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonSizes = () => {
    return (
        <div id="button-sizes">
            <h4>Sizes</h4>
            <p>Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</p>

            <div className="bd-example">
                <button type="button" className="btn btn-primary btn-sm mr-1">
                    Small
                </button>
                <button type="button" className="btn btn-primary mr-1">
                    Default
                </button>
                <button type="button" className="btn btn-primary btn-lg">
                    Large
                </button>
            </div>

            <PrismCode
                code={
                    '<button type="button" className="btn btn-primary btn-sm">Small</button>\n' +
                    '<button type="button" className="btn btn-primary">Default</button>\n' +
                    '<button type="button" className="btn btn-primary btn-lg">Large</button>'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />

            <p>Create block level buttons—those that span the full width of a parent—by adding <code>.btn-block</code>.</p>

            <div className="bd-example">
                <button type="button" className="btn btn-primary btn-block">
                    Block level button
                </button>
                <button type="button" className="btn btn-secondary btn-block">
                    Block level button
                </button>
            </div>

            <PrismCode
                code={
                    '<button type="button" className="btn btn-primary btn-block">Block level button</button>\n' +
                    '<button type="button" className="btn btn-secondary btn-block">Block level button</button>'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />
        </div>
    );
};

export default ButtonSizes;
