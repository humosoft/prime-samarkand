import React from 'react'
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Blockquotes = () => {
    return (
        <div id="blockquotes">
            <h4>Blockquotes</h4>
            <p>For quoting blocks of content from another source within your document. Wrap <code>&lt;blockquote className="blockquote"&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.</p>

            <div className="bd-example">
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>
            </div>

            <PrismCode
                code={
                '<blockquote>\n' +
                '  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                '</blockquote>' }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div id="blockquotes-naming-a-source">
                <h5>Naming a source</h5>
                <p>Add a <code>&lt;footer className="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the source work in <code>&lt;cite&gt;</code>.</p>

                <div className="bd-example">
                    <blockquote className="blockquote">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>

                <PrismCode
                    code={
                    '<blockquote className="blockquote">\n' +
                    '  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                    '  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n' +
                    '</blockquote>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="blockquotes-alignment">
                <h5>Alignment</h5>
                <p>Use text utilities as needed to change the alignment of your blockquote.</p>

                <div className="bd-example">
                    <blockquote className="blockquote text-center">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>

                <PrismCode
                    code={
                    '<blockquote className="blockquote text-center">\n' +
                    '  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                    '  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n' +
                    '</blockquote>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <div className="bd-example">
                    <blockquote className="blockquote text-right">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>

                <PrismCode
                    code={
                    '<blockquote className="blockquote text-right">\n' +
                    '  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                    '  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>\n' +
                    '</blockquote>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default Blockquotes;
