import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

import ButtonRadioActive from './ButtonRadioActive';

const ButtonPlugin = () => {
    return (
        <div id="button-plugin">
            <h4>Button plugin</h4>
            <p>Do more with buttons. Control button states or create groups of buttons for more components like toolbars.</p>

            <div id="toggle-states">
                <h5>Toggle states</h5>
                <p>
                    Add <code>data-toggle="button"</code> to toggle a button’s <code>active</code> state. If you’re pre-toggling a button, you must
                    manually add the <code>.active</code> class <strong>and</strong>
                    <code>aria-pressed="true"</code> to the <code>&lt;button&gt;</code>.
                </p>

                <div className="bd-example">
                    <button type="button" className="btn btn-primary active" data-toggle="button" aria-pressed="true">
                       Single toggle
                    </button>
                </div>

                <PrismCode
                    code={
                        '<button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false">\n' +
                        '  Single toggle\n' +
                        '</button>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>

            <div id="checkbox-and-radio-buttons">
                <h5>Checkbox and radio buttons</h5>
                <p>
                    Bootstrap’s <code>.button</code> styles can be applied to other elements, such as <code>&lt;label&gt;</code>s, to provide checkbox
                    or radio style button toggling. Add <code>data-toggle="buttons"</code> to a <code>.btn-group</code> containing those modified
                    buttons to enable their toggling behavior via JavaScript and add <code>.btn-group-toggle</code> to style the{' '}
                    <code>&lt;input&gt;</code>s within your buttons.{' '}
                    <strong>Note that you can create single input-powered buttons or groups of them.</strong>
                </p>
                <p>
                    The checked state for these buttons is{' '}
                    <strong>
                      only updated via <code>click</code> event
                    </strong>{' '}
                    on the button. If you use another method to update the input—e.g., with <code>&lt;input type="reset"&gt;</code> or by manually
                    applying the input’s <code>checked</code> property—you’ll need to toggle <code>.active</code> on the <code>&lt;label&gt;</code>{' '}
                    manually.
                </p>
                <p>
                    Note that pre-checked buttons require you to manually add the <code>.active</code> class to the input’s <code>&lt;label&gt;</code>
                    .
                </p>

                <div className="bd-example">
                    <div className="btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-primary active">
                            <input type="checkbox" defaultChecked="" /> Checked
                        </label>
                    </div>
                </div>

                <PrismCode
                    code={
                        '<div className="btn-group-toggle" data-toggle="buttons">\n' +
                        '  <label className="btn btn-primary active">\n' +
                        '    <input type="checkbox" checked=""> Checked\n' +
                        '  </label>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />

                <ButtonRadioActive />

                <PrismCode
                    code={
                        '<div className="btn-group btn-group-toggle" data-toggle="buttons">\n' +
                        '  <label className="btn btn-primary active">\n' +
                        '    <input type="radio" name="options" id="option1" checked=""> Active\n' +
                        '  </label>\n' +
                        '  <label className="btn btn-primary">\n' +
                        '    <input type="radio" name="options" id="option2"> Radio\n' +
                        '  </label>\n' +
                        '  <label className="btn btn-primary active">\n' +
                        '    <input type="radio" name="options" id="option3"> Radio\n' +
                        '  </label>\n' +
                        '</div>'
                      }
                      language="html"
                      plugins={['line-numbers']}
                />
            </div>
        </div>
    );
};

export default ButtonPlugin;
