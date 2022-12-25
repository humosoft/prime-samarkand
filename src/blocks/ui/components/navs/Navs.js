import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import BaseNav from './children/BaseNav';
import AvailableStyles from './children/AvailableStyles';
import WorkingWithFlexUtilities from './children/WorkingWithFlexUtilities';
import RegardingAccessibility from './children/RegardingAccessibility';
import JavascriptBehavior from './children/JavascriptBehavior';

const UINav = () => {
    return (
        <div id="navs" className="spacer m-top-xl">
            <h3>Navs</h3>
            <p>Examples for how to use included navigation components.</p>

            <BaseNav />

            <AvailableStyles />

            <WorkingWithFlexUtilities />

            <RegardingAccessibility />

            <JavascriptBehavior />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/navs/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default UINav;
