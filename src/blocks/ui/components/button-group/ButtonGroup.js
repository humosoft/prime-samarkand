import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import ButtonGroupBasicExample from './children/ButtonGroupBasicExample';
import ButtonGroupButtonToolbar from './children/ButtonGroupButtonToolbar';
import ButtonGroupSizing from './children/ButtonGroupSizing';
import ButtonGroupNesting from './children/ButtonGroupNesting';
import ButtonGroupVerticalVariation from './children/ButtonGroupVerticalVariation';

const ButtonGroup = () => {
    return (
        <div id="button-group" className="spacer m-top-xl">
            <h3>Button group</h3>
            <p>Group a series of buttons together on a single line with the button group, and super-power them with JavaScript.</p>

            <ButtonGroupBasicExample />

            <ButtonGroupButtonToolbar />

            <ButtonGroupSizing />

            <ButtonGroupNesting />

            <ButtonGroupVerticalVariation />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/button-group/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default ButtonGroup;
