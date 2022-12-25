import React, { Component } from 'react';
import MoreExamples from '../../blocks/MoreExamples';

import OpenVariations from './children/OpenVariations';
import DropdownExamples from './children/DropdownExamples';
import Directions from './children/Directions';
import MenuItems from './children/MenuItems';
import MenuAlignment from './children/MenuAlignment';
import MenuContent from './children/MenuContent';
import DropdownOptions from './children/DropdownOptions';
import DropdownUsage from './children/DropdownUsage';

class Dropdowns extends Component {
    render() {
        return (
            <div id="dropdowns" className="spacer m-top-xl">
                <h3>Dropdowns</h3>
                <p>Toggle contextual overlays for displaying lists of links and more.</p>

                <OpenVariations />

                <DropdownExamples />

                <Directions />

                <MenuItems />

                <MenuAlignment />

                <MenuContent />

                <DropdownOptions />

                <DropdownUsage />

                <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/dropdowns/"
                              actionLinkContent="Bootstrap 4 documentation"
                              contentBefore="For more examples and demo data, click "
                              contentAfter="."
                />
            </div>
        );
    }
}

export default Dropdowns;
