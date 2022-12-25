import React, { Component } from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import FormExamples from './children/FormExamples';
import FormControls from './children/FormControls';
import CheckboxesAndRadios from './children/CheckboxesAndRadios';
import FormLayout from './children/FormLayout';
import HelpText from './children/HelpText';
import DisabledForms from './children/DisabledForms';

class Forms extends Component {
    render() {
        return (
            <div id="forms" className="spacer m-top-xl">
                <h3>Forms</h3>
                <p>Several form control styles, layout options, and custom components for creating a wide variety of forms.</p>

                <FormExamples />

                <FormControls />

                <CheckboxesAndRadios />

                <FormLayout />

                <HelpText />

                <DisabledForms />

                <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/forms/"
                              actionLinkContent="Bootstrap 4 documentation"
                              contentBefore="For more examples and demo data, click "
                              contentAfter="."
                />
            </div>
        );
    }
}

export default Forms;
