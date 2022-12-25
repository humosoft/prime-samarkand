import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const EmbedExample = () => {
    return (
        <div id="embed-example" className="spacer m-top-lg">
            <h4>Example</h4>
            <p>Wrap any embed like an <code>&lt;iframe&gt;</code> in a parent element with <code>.embed-responsive</code> and an aspect ratio. The <code>.embed-responsive-item</code> isn’t strictly required, but we encourage it.</p>

            <div className="bd-example">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="ui-iframe" className="embed-responsive-item" src="https://www.youtube.com/embed/lSNmfy_KOJg" allowFullScreen></iframe>
                </div>
            </div>

            <PrismCode
                code={ '<div className="embed-responsive embed-responsive-16by9">\n' +
                '  <iframe title="ui-iframe" className="embed-responsive-item" src="https://www.youtube.com/embed/lSNmfy_KOJg" allowFullScreen></iframe>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default EmbedExample;
