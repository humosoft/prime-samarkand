import React from 'react'
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const InlineTextElements = () => {
    return (
        <div id="inline-text-elements">
            <h4>Inline text elements</h4>

            <div className="bd-example">
                <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                <p><del>This line of text is meant to be treated as deleted text.</del></p>
                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                <p><u>This line of text will render as underlined</u></p>
                <p><small>This line of text is meant to be treated as fine print.</small></p>
                <p><strong>This line rendered as bold text.</strong></p>
                <p><em>This line rendered as italicized text.</em></p>
            </div>

            <PrismCode
                code={
                '<p>You can use the mark tag to <mark>highlight</mark> text.</p>\n' +
                '<p><del>This line of text is meant to be treated as deleted text.</del></p>\n' +
                '<p><s>This line of text is meant to be treated as no longer accurate.</s></p>\n' +
                '<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>\n' +
                '<p><u>This line of text will render as underlined</u></p>\n' +
                '<p><small>This line of text is meant to be treated as fine print.</small></p>\n' +
                '<p><strong>This line rendered as bold text.</strong></p>\n' +
                '<p><em>This line rendered as italicized text.</em></p>' }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p><code>.mark</code> and <code>.small</code> classes are also available to apply the same styles as <code>&lt;mark&gt;</code> and <code>&lt;small&gt;</code> while avoiding any unwanted semantic implications that the tags would bring.</p>

            <p>While not shown above, feel free to use <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> in HTML5. <code>&lt;b&gt;</code> is meant to highlight words or phrases without conveying additional importance while <code>&lt;i&gt;</code> is mostly for voice, technical terms, etc.</p>
        </div>
    );
};

export default InlineTextElements;
