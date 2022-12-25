import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import InputGroupPrimary from './children/InputGroupPrimary';
import InputGroupSecondary from './children/InputGroupSecondary';
import InputGroupBasicExamples from './children/InputGroupBasicExamples';
import InputGroupWrapping from './children/InputGroupWrapping';
import InputGroupSizing from './children/InputGroupSizing';
import InputGroupCheckboxesAndRadios from './children/InputGroupCheckboxesAndRadios';
import MultipleInputs from './children/MultipleInputs';
import MultipleAddons from './children/MultipleAddons';
import ButtonAddons from './children/ButtonAddons';
import ButtonsWithDropdowns from './children/ButtonsWithDropdowns';
import SegmentedButtons from './children/SegmentedButtons';
import CustomForms from './children/CustomForms';
import InputGroupAccessibility from './children/InputGroupAccessibility';

const InputGroup = () => {
    return (
        <div id="input-group" className="spacer m-top-xl">
            <h3>Input group</h3>
            <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>

            <InputGroupPrimary />

            <InputGroupSecondary />

            <InputGroupBasicExamples />

            <InputGroupWrapping />

            <InputGroupSizing />

            <InputGroupCheckboxesAndRadios />

            <MultipleInputs />

            <MultipleAddons />

            <ButtonAddons />

            <ButtonsWithDropdowns />

            <SegmentedButtons />

            <CustomForms />

            <InputGroupAccessibility />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/input-group/"
                actionLinkContent="Bootstrap 4 documentation"
                contentBefore="For more examples and demo data, click "
                contentAfter="."
            />
        </div>
    );
};

export default InputGroup;
