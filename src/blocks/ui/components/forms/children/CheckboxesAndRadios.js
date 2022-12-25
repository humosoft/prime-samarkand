import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const CheckboxesAndRadios = () => {
    return (
        <div id="checkboxes-and-radios">
            <h4>Checkboxes and radios</h4>
            <p>Default checkboxes and radios are improved upon with the help of <code>.form-check</code>, <strong>a single class for both input types that improves the layout and behavior of their HTML elements</strong>. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.</p>
            <p>Disabled checkboxes and radios are supported. The <code>disabled</code> attribute will apply a lighter color to help indicate the input’s state.</p>
            <p>Checkboxes and radio buttons support HTML-based form validation and provide concise, accessible labels. As such, our <code>&lt;input&gt;</code>s and <code>&lt;label&gt;</code>s are sibling elements as opposed to an <code>&lt;input&gt;</code> within a <code>&lt;label&gt;</code>. This is slightly more verbose as you must specify <code>id</code> and <code>for</code> attributes to relate the <code>&lt;input&gt;</code> and <code>&lt;label&gt;</code>.</p>

            <div id="checkboxes-and-radios-default-stacked">
                <h5>Default (stacked)</h5>
                <p>By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with <code>.form-check</code>.</p>

                <div className="bd-example">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Default checkbox
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled={ true } />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Disabled checkbox
                        </label>
                    </div>
                </div>

                <PrismCode
                    code={
                    '<div className="form-check">\n' +
                    '  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>\n' +
                    '  <label className="form-check-label" htmlFor="defaultCheck1">\n' +
                    '    Default checkbox\n' +
                    '  </label>\n' +
                    '</div>\n' +
                    '<div className="form-check">\n' +
                    '  <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled=""/>\n' +
                    '    <label className="form-check-label" htmlFor="defaultCheck2">\n' +
                    '      Disabled checkbox\n' +
                    '    </label>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <div className="bd-example">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked="" />
                        <label className="form-check-label" htmlFor="exampleRadios1">Default radio</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">Second default radio</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled={ true } />
                        <label className="form-check-label" htmlFor="exampleRadios3">Disabled radio</label>
                    </div>
                </div>

                <PrismCode
                    code={
                    '<div className="form-check">\n' +
                    '  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked=""/>\n' +
                    '  <label className="form-check-label" htmlFor="exampleRadios1">\n' +
                    '    Default radio\n' +
                    '  </label>\n' +
                    '</div>\n' +
                    '<div className="form-check">\n' +
                    '  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>\n' +
                    '  <label className="form-check-label" htmlFor="exampleRadios2">\n' +
                    '    Second default radio\n' +
                    '  </label>\n' +
                    '</div>\n' +
                    '<div className="form-check">\n' +
                    '  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled=""/>\n' +
                    '  <label className="form-check-label" htmlFor="exampleRadios3">\n' +
                    '    Disabled radio\n' +
                    '  </label>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="checkboxes-and-radios-inline">
                <h5>Inline</h5>
                <p>Group checkboxes or radios on the same horizontal row by adding <code>.form-check-inline</code> to any <code>.form-check</code>.</p>

                <div className="bd-example">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled={ true } />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                    </div>
                </div>

                <PrismCode
                    code={
                    '<div className="form-check form-check-inline">\n' +
                    '  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">\n' +
                    '  <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>\n' +
                    '</div>\n' +
                    '<div className="form-check form-check-inline">\n' +
                    '  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">\n' +
                    '  <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>\n' +
                    '</div>\n' +
                    '<div className="form-check form-check-inline">\n' +
                    '  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled="">\n' +
                    '  <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <div className="bd-example">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled={ true } />
                        <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                    </div>
                </div>

                <PrismCode
                    code={
                    '<div className="form-check form-check-inline">\n' +
                    '  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>\n' +
                    '  <label className="form-check-label" htmlFor="inlineRadio1">1</label>\n' +
                    '</div>\n' +
                    '<div className="form-check form-check-inline">\n' +
                    '  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>\n' +
                    '  <label className="form-check-label" htmlFor="inlineRadio2">2</label>\n' +
                    '</div>\n' +
                    '<div className="form-check form-check-inline">\n' +
                    '  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled=""/>\n' +
                    '  <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="checkboxes-and-radios-without-labels">
                <h6>Without labels</h6>
                <p>Add <code>.position-static</code> to inputs within <code>.form-check</code> that don’t have any label text. Remember to still provide some form of label for assistive technologies (for instance, using <code>aria-label</code>).</p>

                <div className="bd-example">
                    <div className="form-check">
                        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..." />
                    </div>
                </div>

                <PrismCode
                    code={
                    '<div className="form-check">\n' +
                    '  <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="...">\n' +
                    '</div>\n' +
                    '<div className="form-check">\n' +
                    '  <input className="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="...">\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default CheckboxesAndRadios;
