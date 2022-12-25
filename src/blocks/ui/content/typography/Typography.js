import React from 'react';
import Headings from '../../content/typography/children/Headings';
import InlineTextElements from '../../content/typography/children/InlineTextElements';
import TextUtilities from './children/TextUtilities';
import Abbreviations from '../../content/typography/children/Abbreviations';
import Blockquotes from '../../content/typography/children/Blockquotes';
import Lists from '../../content/typography/children/Lists';
import MoreExamples from '../../blocks/MoreExamples';

const Typography = () => {
    return (
        <div id="typography" className="spacer m-top-xl">
            <h3>Typography</h3>
            <p>There are examples of typography, including global settings, headings, body text, lists and more.</p>

            <Headings />

            <InlineTextElements />

            <TextUtilities />

            <Abbreviations />

            <Blockquotes />

            <Lists />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/content/typography/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Typography;
