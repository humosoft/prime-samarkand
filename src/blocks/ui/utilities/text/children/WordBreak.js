import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const WordBreak = () => {
    return (
        <div id="word-break">
            <h4>Word break</h4>
            <p>Prevent long strings of text from breaking your components’ layout by using <code>.text-break</code> to set <code>overflow-wrap: break-word</code> (and <code>word-break: break-word</code> for IE &amp; Edge compatibility).</p>

            <div className="bd-example">
                <p className="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
            </div>

            <PrismCode
                code={ '<p className="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default WordBreak;
