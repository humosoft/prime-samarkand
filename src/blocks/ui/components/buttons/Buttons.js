import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import ButtonsExamples from './children/ButtonsExamples';
import OutlineButtons from './children/OutlineButtons';
import ButtonTags from './children/ButtonTags';
import ButtonSizes from './children/ButtonSizes';
import ButtonHover from './children/ButtonHover';
import ButtonActive from './children/ButtonActive';
import ButtonDisabled from './children/ButtonDisabled';
import ButtonPlugin from './children/ButtonPlugin';

const Buttons = () => {
    return (
        <div id="buttons" className="spacer m-top-xl">
            <h3>Buttons</h3>
            <p>Includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control. </p>

            <ButtonsExamples />

            <OutlineButtons />

            <ButtonTags />

            <ButtonSizes />

            <ButtonHover />

            <ButtonActive />

            <ButtonDisabled />

            <ButtonPlugin />

            <MoreExamples 
                actionLink="https://getbootstrap.com/docs/4.4/components/buttons/" 
                actionLinkContent="Bootstrap 4 documentation" 
                contentBefore="For more examples and demo data, click " 
                contentAfter="." />
        </div>
    );
};

export default Buttons;
