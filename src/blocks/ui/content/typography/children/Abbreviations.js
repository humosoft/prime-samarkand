import React from 'react'
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Abbreviations = () => {
    return (
        <div id="abbreviations" className="spacer p-top-lg">
            <h4>Abbreviations</h4>
            <p>Stylized implementation of HTML’s <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.</p>
            <p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>

            <div className="bd-example">
                <p><abbr title="attribute">attr</abbr></p>
                <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
            </div>

            <PrismCode
                code={
                '<p><abbr title="attribute">attr</abbr></p>\n' +
                '<p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Abbreviations;
