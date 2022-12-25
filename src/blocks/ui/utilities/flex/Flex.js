import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import EnableFlexBehaviors from './children/EnableFlexBehaviors';
import Direction from './children/Direction';
import JustifyContent from './children/JustifyContent';
import AlignItems from './children/AlignItems';
import AlignSelf from './children/AlignSelf';
import Fill from './children/Fill';
import GrowAndShrink from './children/GrowAndShrink';
import AutoMargins from './children/AutoMargins';
import WithAlignItems from './children/WithAlignItems';
import Wrap from './children/Wrap';
import Order from './children/Order';
import AlignContent from './children/AlignContent';

const Flex = () => {
    return (
        <div id="flex" className="spacer m-top-xl">
            <h3>Flex</h3>
            <p>Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS may be necessary.</p>

            <EnableFlexBehaviors />

            <Direction />

            <JustifyContent />

            <AlignItems />

            <AlignSelf />

            <Fill />

            <GrowAndShrink />

            <AutoMargins />

            <WithAlignItems />

            <Wrap />

            <Order />

            <AlignContent />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/flex/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Flex;
