import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonHover = () => {
    return (
        <div id="button-hover">
            <h4>Button hover</h4>

            <h5>Default</h5>

            <div className="bd-example">
                <button type="button" className="btn btn-primary mr-1">
                  Hover
                </button>
                <button type="button" className="btn btn-outline-primary mr-1">
                  Hover
                </button>
                <button type="button" className="btn btn-link">
                  Hover
                </button>
            </div>

            <PrismCode
                code={
                  '<button type="button" className="btn btn-primary">Hover</button>\n' +
                  '<button type="button" className="btn btn-outline-primary">Hover</button>\n' +
                  '<button type="button" className="btn btn-link">Hover</button>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <h5>With transform scale</h5>
            <p>
                Add <code>.transform-scale-h</code> to an element.
            </p>

            <div className="bd-example">
                <button type="button" className="btn btn-primary transform-scale-h mr-1">
                  Hover
                </button>
                <button type="button" className="btn btn-outline-primary transform-scale-h mr-1">
                    Hover
                </button>
                <button type="button" className="btn btn-link transform-scale-h">
                    Hover
                </button>
            </div>

            <PrismCode
                code={
                    '<button type="button" className="btn btn-primary transform-scale-h">Hover</button>\n' +
                    '<button type="button" className="btn btn-outline-primary transform-scale-h">Hover</button>\n' +
                    '<button type="button" className="btn btn-link transform-scale-h">Hover</button>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default ButtonHover;
