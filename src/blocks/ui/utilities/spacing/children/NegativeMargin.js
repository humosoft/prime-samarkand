import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const NegativeMargin = () => {
    return (
        <div id="negative-margin">
            <h4>Negative margin</h4>
            <p>In CSS, <code>margin</code> properties can utilize negative values (<code>padding</code> cannot). As of 4.2, we’ve added negative margin utilities for every non-zero integer size listed above (e.g., <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>). These utilities are ideal for customizing grid column gutters across breakpoints.</p>
            <p>The syntax is nearly the same as the default, positive margin utilities, but with the addition of <code>n</code> before the requested size. Here’s an example class that’s the opposite of <code>.mt-1</code>:</p>

            <PrismCode
                code={ '.mt-n1 {\n' +
                'margin-top: -0.25rem !important;\n' +
                '}'
                }
                language="css"
                plugins={ ["line-numbers"] }
            />

            <p>Here’s an example of customizing the Bootstrap grid at the medium (<code>md</code>) breakpoint and above. We’ve increased the <code>.col</code> padding with <code>.px-md-5</code> and then counteracted that with <code>.mx-md-n5</code> on the parent <code>.row</code>.</p>

            <div className="bd-example">
                <div className="row mx-md-n5">
                    <div className="col px-md-5">
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div>
                    <div className="col px-md-5">
                        <div className="p-3 border bg-light">Custom column padding</div>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="row mx-md-n5">\n' +
                '  <div className="col px-md-5">\n' +
                '    <div className="p-3 border bg-light">Custom column padding</div>\n' +
                '  </div>\n' +
                '  <div className="col px-md-5">\n' +
                '    <div className="p-3 border bg-light">Custom column padding</div>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default NegativeMargin;
