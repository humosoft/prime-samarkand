import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import CollapseExample from './children/CollapseExample';
import MultipleTargets from './children/MultipleTargets';
import AccordionExample from './children/AccordionExample';

const Collapse = () => {
    return (
        <div id="collapse" className="spacer m-top-xl">
            <h3>Collapse</h3>
            <p>Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p>

            <CollapseExample />

            <MultipleTargets />

            <AccordionExample />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/collapse/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Collapse;
