import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const TextWrappingAndOverflow = () => {
    return (
        <div id="text-wrapping-and-overflow">
            <h4>Text wrapping and overflow</h4>
            <p>Wrap text with a <code>.text-wrap</code> class.</p>

            <div className="bd-example">
                <div className="badge badge-primary text-wrap" style={ { "width": "6rem" } }>
                    This text should wrap.
                </div>
            </div>

            <PrismCode
                code={ '<div className="badge badge-primary text-wrap" style="width: 6rem;">\n' +
                '    This text should wrap.\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Prevent text from wrapping with a <code>.text-nowrap</code> class.</p>

            <div className="bd-example">
                <div className="text-nowrap" style={ { "width": "8rem" } }>
                    This text should overflow the parent.
                </div>
            </div>

            <PrismCode
                code={ '<div className="text-nowrap" style="width: 8rem;">\n' +
                '  This text should overflow the parent.\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>For longer content, you can add a <code>.text-truncate</code> class to truncate the text with an ellipsis. <strong>Requires <code>display: inline-block</code> or <code>display: block</code>.</strong></p>

            <div className="bd-example">
                <div className="row">
                    <div className="col-2 text-truncate">
                        Praeterea iter est quasdam res quas ex communi.
                    </div>
                </div>

                <span className="d-inline-block text-truncate" style={ { "maxWidth": "150px" } }>
                    Praeterea iter est quasdam res quas ex communi.
                </span>
            </div>

            <PrismCode
                code={ '<div className="row">\n' +
                '  <div className="col-2 text-truncate">\n' +
                '    Praeterea iter est quasdam res quas ex communi.\n' +
                '  </div>\n' +
                '</div>\n' +
                '\n' +
                '<span className="d-inline-block text-truncate" style="max-width: 150px;">\n' +
                '    Praeterea iter est quasdam res quas ex communi.\n' +
                '</span>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default TextWrappingAndOverflow;
