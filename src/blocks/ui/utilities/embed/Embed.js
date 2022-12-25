import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import EmbedAbout from './children/EmbedAbout';
import EmbedExample from './children/EmbedExample';
import AspectRatios from './children/AspectRatios';

const Embed = () => {
    return (
        <div id="embed" className="spacer m-top-xl">
            <h3>Embed</h3>
            <p>Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.</p>

            <EmbedAbout />

            <EmbedExample />

            <AspectRatios />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/embed/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Embed;
