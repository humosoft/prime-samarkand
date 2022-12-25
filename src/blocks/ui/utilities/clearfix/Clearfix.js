import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const Background = () => {
    return (
        <div id="clearfix" className="spacer m-top-xl">
            <h3>Clearfix</h3>
            <p>Quickly and easily clear floated content within a container by adding a clearfix utility.</p>
            <p>Easily clear <code>float</code>s by adding <code>.clearfix</code><strong>to the parent element</strong>. Can also be used as a mixin.</p>

            <PrismCode
                code={ '<div className="clearfix">...</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>The following example shows how the clearfix can be used. Without the clearfix the wrapping div would not span around the buttons which would cause a broken layout.</p>

            <div className="bd-example">
                <div className="bg-primary clearfix">
                    <button type="button" className="btn btn-secondary float-left">Example Button floated left</button>
                    <button type="button" className="btn btn-secondary float-right">Example Button floated right
                    </button>
                </div>
            </div>

            <PrismCode
                code={ '<div className="bg-primary clearfix">\n' +
                '  <button type="button" className="btn btn-secondary float-left">Example Button floated left</button>\n' +
                '  <button type="button" className="btn btn-secondary float-right">Example Button floated right</button>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/clearfix/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Background;
