import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonGroupButtonToolbar = () => {
    return (
        <div id="button-group-button-toolbar">
            <h4>Button toolbar</h4>
            <p>Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more.</p>

            <div className="bd-example">
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-primary">1</button>
                        <button type="button" className="btn btn-primary">2</button>
                        <button type="button" className="btn btn-primary">3</button>
                        <button type="button" className="btn btn-primary">4</button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        <button type="button" className="btn btn-primary">5</button>
                        <button type="button" className="btn btn-primary">6</button>
                        <button type="button" className="btn btn-primary">7</button>
                    </div>
                    <div className="btn-group" role="group" aria-label="Third group">
                        <button type="button" className="btn btn-primary">8</button>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">\n' +
                '  <div className="btn-group mr-2" role="group" aria-label="First group">\n' +
                '    <button type="button" className="btn btn-primary">1</button>\n' +
                '    <button type="button" className="btn btn-primary">2</button>\n' +
                '    <button type="button" className="btn btn-primary">3</button>\n' +
                '    <button type="button" className="btn btn-primary">4</button>\n' +
                '  </div>\n' +
                '  <div className="btn-group mr-2" role="group" aria-label="Second group">\n' +
                '    <button type="button" className="btn btn-primary">5</button>\n' +
                '    <button type="button" className="btn btn-primary">6</button>\n' +
                '    <button type="button" className="btn btn-primary">7</button>\n' +
                '  </div>\n' +
                '  <div className="btn-group" role="group" aria-label="Third group">\n' +
                '    <button type="button" className="btn btn-primary">8</button>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ButtonGroupButtonToolbar;
