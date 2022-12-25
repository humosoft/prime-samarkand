import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const DisabledForms = () => {
    return (
        <div id="disabled-forms">
            <h4>Disabled forms</h4>
            <p>Add the <code>disabled</code> boolean attribute on an input to prevent user interactions and make it appear lighter.</p>

            <figure className="highlight">
                <pre>
                    <code className="language-html">
                        &lt;input className=&quot;form-control&quot; id=&quot;disabledInput&quot; type=&quot;text&quot; placeholder=&quot;Disabled input
                        here...&quot; disabled&gt;
                    </code>
                </pre>
            </figure>

            <p>Add the <code>disabled</code> attribute to a <code>&lt;fieldset&gt;</code> to disable all the controls within.</p>

            <div className="bd-example">
                <form>
                    <fieldset disabled={true}>
                        <div className="form-group">
                            <label htmlFor="disabledTextInput">Disabled input</label>
                            <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" disabled={true} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="disabledSelect">Disabled select menu</label>
                            <select id="disabledSelect" className="form-control" disabled={true}>
                                <option>Disabled select</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled={true} />
                                <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                    Can't check this
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>

            <PrismCode
                code={
                    '<form>\n' +
                    '  <fieldset disabled="">\n' +
                    '    <div className="form-group">\n' +
                    '      <label htmlFor="disabledTextInput">Disabled input</label>\n' +
                    '      <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input">\n' +
                    '    </div>\n' +
                    '    <div className="form-group">\n' +
                    '      <label htmlFor="disabledSelect">Disabled select menu</label>\n' +
                    '      <select id="disabledSelect" className="form-control">\n' +
                    '        <option>Disabled select</option>\n' +
                    '      </select>\n' +
                    '    </div>\n' +
                    '    <div className="form-group">\n' +
                    '      <div className="form-check">\n' +
                    '        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">\n' +
                    '        <label className="form-check-label" htmlFor="disabledFieldsetCheck">\n' +
                    "          Can't check this\n" +
                    '        </label>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '    <button type="submit" className="btn btn-primary">Submit</button>\n' +
                    '  </fieldset>\n' +
                    '</form>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default DisabledForms;
