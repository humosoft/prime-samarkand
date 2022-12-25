import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import FloatClasses from './children/FloatClasses';
import FloatResponsive from './children/FloatResponsive';

const Float = () => {
    return (
        <div id="float" className="spacer m-top-xl">
            <h3>Float</h3>
            <p>Toggle floats on any element, across any breakpoint, using our responsive float utilities.</p>

            <FloatClasses />

            <FloatResponsive />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/float/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Float;
