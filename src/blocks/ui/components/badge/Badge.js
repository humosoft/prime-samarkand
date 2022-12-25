import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import LinksBadges from './children/LinksBadges';
import PillBadges from './children/PillBadges';
import ContextualVariations from './children/ContextualVariations';
import BadgeExample from './children/BadgeExample';

const Badge = () => {
    return (
        <div id="badge" className="spacer m-top-xl">
            <h3>Badges</h3>
            <p>Examples for badges, our small count and labeling component.</p>

            <BadgeExample />

            <ContextualVariations />

            <PillBadges />

            <LinksBadges />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/badge/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Badge;
