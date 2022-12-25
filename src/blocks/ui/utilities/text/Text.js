import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import TextAlignment from './children/TextAlignment';
import TextWrappingAndOverflow from './children/TextWrappingAndOverflow';
import WordBreak from './children/WordBreak';
import TextTransform from './children/TextTransform';
import FontWeightAndItalics from './children/FontWeightAndItalics';
import Monospace from './children/Monospace';
import ResetColor from './children/ResetColor';
import TextDecoration from './children/TextDecoration';

const Text = () => {
    return (
        <div id="text" className="spacer m-top-xl">
            <h3>Text</h3>
            <p>Examples for common text utilities to control alignment, wrapping, weight, and more.</p>

            <TextAlignment />

            <TextWrappingAndOverflow />

            <WordBreak />

            <TextTransform />

            <FontWeightAndItalics />

            <Monospace />

            <ResetColor />

            <TextDecoration />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/text/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Text;
