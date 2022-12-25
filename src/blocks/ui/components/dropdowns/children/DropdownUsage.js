import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const DropdownUsage = () => {
    return (
        <div id="dropdown-usage">
            <h4>Usage</h4>
            <p>Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the <code>.show</code> class on the parent list item. The <code>data-toggle="dropdown"</code> attribute is relied on for closing dropdown menus at an application level, so it’s a good idea to always use it.</p>

            <h5>Via data attributes</h5>
            <p>Add <code>data-toggle="dropdown"</code> to a link or button to toggle a dropdown.</p>

            <PrismCode
                code={
                '<div className="dropdown">\n' +
                '  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                '    Dropdown trigger\n' +
                '  </button>\n' +
                '  <div className="dropdown-menu" aria-labelledby="dLabel">\n' +
                '    ...\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default DropdownUsage;
