import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const FormLayout = () => {
    return (
        <div id="form-layout">
            <h4>Layout</h4>
            <p>Since Bootstrap applies <code>display: block</code> and <code>width: 100%</code> to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.</p>

            <div id="form-groups">
                <h5>Form groups</h5>
                <p>The <code>.form-group</code> class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies <code>margin-bottom</code>, but it picks up additional styles in <code>.form-inline</code> as needed. Use it with <code>&lt;fieldset&gt;</code>s, <code>&lt;div&gt;</code>s, or nearly any other element.</p>

                <div className="bd-example">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Another label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                        </div>
                    </form>
                </div>

                <PrismCode
                    code={
                    '<form>\n' +
                    '  <div className="form-group">\n' +
                    '    <label htmlFor="formGroupExampleInput">Example label</label>\n' +
                    '    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">\n' +
                    '  </div>\n' +
                    '  <div className="form-group">\n' +
                    '    <label htmlFor="formGroupExampleInput2">Another label</label>\n' +
                    '    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">\n' +
                    '  </div>\n' +
                    '</form>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="form-grid">
                <h5>Form grid</h5>
                <p>More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.</p>

                <div className="bd-example">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                    </form>
                </div>

                <PrismCode
                    code={
                    '<form>\n' +
                    '  <div className="row">\n' +
                    '    <div className="col">\n' +
                    '      <input type="text" className="form-control" placeholder="First name">\n' +
                    '    </div>\n' +
                    '    <div className="col">\n' +
                    '      <input type="text" className="form-control" placeholder="Last name">\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</form>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <div id="form-row">
                    <h6>Form row</h6>
                    <p>You may also swap <code>.row</code> for <code>.form-row</code>, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.</p>

                    <div className="bd-example">
                        <form>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <PrismCode
                        code={
                        '<form>\n' +
                        '  <div className="form-row">\n' +
                        '    <div className="col">\n' +
                        '      <input type="text" className="form-control" placeholder="First name"/>\n' +
                        '    </div>\n' +
                        '    <div className="col">\n' +
                        '      <input type="text" className="form-control" placeholder="Last name"/>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</form>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />

                    <p>More complex layouts can also be created with the grid system.</p>

                    <div className="bd-example">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress">Address</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState">State</label>
                                    <select id="inputState" className="form-control">
                                        <option defaultValue="Choose...">Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip">Zip</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>

                    <PrismCode
                        code={
                        '<form>\n' +
                        '  <div className="form-row">\n' +
                        '    <div className="form-group col-md-6">\n' +
                        '      <label htmlFor="inputEmail4">Email</label>\n' +
                        '      <input type="email" className="form-control" id="inputEmail4"/>\n' +
                        '    </div>\n' +
                        '    <div className="form-group col-md-6">\n' +
                        '      <label htmlFor="inputPassword4">Password</label>\n' +
                        '      <input type="password" className="form-control" id="inputPassword4"/>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="form-group">\n' +
                        '    <label htmlFor="inputAddress">Address</label>\n' +
                        '    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>\n' +
                        '  </div>\n' +
                        '  <div className="form-group">\n' +
                        '    <label htmlFor="inputAddress2">Address 2</label>\n' +
                        '    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>\n' +
                        '  </div>\n' +
                        '  <div className="form-row">\n' +
                        '    <div className="form-group col-md-6">\n' +
                        '      <label htmlFor="inputCity">City</label>\n' +
                        '      <input type="text" className="form-control" id="inputCity"/>\n' +
                        '    </div>\n' +
                        '    <div className="form-group col-md-4">\n' +
                        '      <label htmlFor="inputState">State</label>\n' +
                        '      <select id="inputState" className="form-control">\n' +
                        '        <option selected="">Choose...</option>\n' +
                        '        <option>...</option>\n' +
                        '      </select>\n' +
                        '    </div>\n' +
                        '    <div className="form-group col-md-2">\n' +
                        '      <label htmlFor="inputZip">Zip</label>\n' +
                        '      <input type="text" className="form-control" id="inputZip"/>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="form-group">\n' +
                        '    <div className="form-check">\n' +
                        '      <input className="form-check-input" type="checkbox" id="gridCheck"/>\n' +
                        '      <label className="form-check-label" htmlFor="gridCheck">\n' +
                        '        Check me out\n' +
                        '      </label>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <button type="submit" className="btn btn-primary">Sign in</button>\n' +
                        '</form>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>

                <div id="horizontal-form">
                    <h6>Horizontal form</h6>
                    <p>Create horizontal forms with the grid by adding the <code>.row</code> class to form groups and using the <code>.col-*-*</code> classes to specify the width of your labels and controls. Be sure to add <code>.col-form-label</code> to your <code>&lt;label&gt;</code>s as well so they’re vertically centered with their associated form controls.</p>
                    <p>At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we’ve removed the <code>padding-top</code> on our stacked radio inputs label to better align the text baseline.</p>

                    <div className="bd-example">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <label className="col-form-label col-sm-2 pt-0">Radios</label>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked="" />
                                            <label className="form-check-label" htmlFor="gridRadios1">First radio</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                            <label className="form-check-label" htmlFor="gridRadios2">Second radio</label>
                                        </div>
                                        <div className="form-check disabled">
                                            <input className="form-check-input" type="radio" name="gridRadios"
                                                   id="gridRadios3" value="option3" disabled="" />
                                            <label className="form-check-label" htmlFor="gridRadios3">Third disabled radio</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-2">Checkbox</div>
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">Example checkbox</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <PrismCode
                        code={
                        '<form>\n' +
                        '  <div className="form-group row">\n' +
                        '    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>\n' +
                        '    <div className="col-sm-10">\n' +
                        '      <input type="email" className="form-control" id="inputEmail3">\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="form-group row">\n' +
                        '    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>\n' +
                        '    <div className="col-sm-10">\n' +
                        '      <input type="password" className="form-control" id="inputPassword3">\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="form-group">\n' +
                        '    <div className="row">\n' +
                        '      <label className="col-form-label col-sm-2 pt-0">Radios</label>\n' +
                        '      <div className="col-sm-10">\n' +
                        '        <div className="form-check">\n' +
                        '          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" defaultChecked="">\n' +
                        '          <label className="form-check-label" htmlFor="gridRadios1">\n' +
                        '            First radio\n' +
                        '          </label>\n' +
                        '        </div>\n' +
                        '        <div className="form-check">\n' +
                        '          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">\n' +
                        '          <label className="form-check-label" htmlFor="gridRadios2">\n' +
                        '            Second radio\n' +
                        '          </label>\n' +
                        '        </div>\n' +
                        '        <div className="form-check disabled">\n' +
                        '          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled="">\n' +
                        '          <label className="form-check-label" htmlFor="gridRadios3">\n' +
                        '            Third disabled radio\n' +
                        '          </label>\n' +
                        '        </div>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="form-group row">\n' +
                        '    <div className="col-sm-2">Checkbox</div>\n' +
                        '    <div className="col-sm-10">\n' +
                        '      <div className="form-check">\n' +
                        '        <input className="form-check-input" type="checkbox" id="gridCheck1">\n' +
                        '        <label className="form-check-label" htmlFor="gridCheck1">\n' +
                        '          Example checkbox\n' +
                        '        </label>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="form-group row">\n' +
                        '    <div className="col-sm-10">\n' +
                        '      <button type="submit" className="btn btn-primary">Sign in</button>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</form>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />

                    <div id="horizontal-form-label-sizing">
                        <h6>Horizontal form label sizing</h6>
                        <p>Be sure to use <code>.col-form-label-sm</code> or <code>.col-form-label-lg</code> to your <code>&lt;label&gt;</code>s or <code>&lt;legend&gt;</code>s to correctly follow the size of <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>

                        <div className="bd-example">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <PrismCode
                            code={
                            '<form>\n' +
                            '  <div className="form-group row">\n' +
                            '    <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>\n' +
                            '    <div className="col-sm-10">\n' +
                            '      <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm">\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div className="form-group row">\n' +
                            '    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>\n' +
                            '    <div className="col-sm-10">\n' +
                            '      <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label">\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '  <div className="form-group row">\n' +
                            '    <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>\n' +
                            '    <div className="col-sm-10">\n' +
                            '      <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg">\n' +
                            '    </div>\n' +
                            '  </div>\n' +
                            '</form>'
                            }
                            language="html"
                            plugins={ ["line-numbers"] }
                        />
                    </div>
                </div>

                <div id="column-sizing">
                    <h6>Column sizing</h6>
                    <p>As shown in the previous examples, our grid system allows you to place any number of <code>.col</code>s within a <code>.row</code> or <code>.form-row</code>. They’ll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining <code>.col</code>s equally split the rest, with specific column classes like <code>.col-7</code>.</p>

                    <div className="bd-example">
                        <form>
                            <div className="form-row">
                                <div className="col-7">
                                    <input type="text" className="form-control" placeholder="City" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="State" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Zip" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <PrismCode
                        code={
                        '<form>\n' +
                        '  <div className="form-row">\n' +
                        '    <div className="col-7">\n' +
                        '      <input type="text" className="form-control" placeholder="City">\n' +
                        '    </div>\n' +
                        '    <div className="col">\n' +
                        '      <input type="text" className="form-control" placeholder="State">\n' +
                        '    </div>\n' +
                        '    <div className="col">\n' +
                        '      <input type="text" className="form-control" placeholder="Zip">\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</form>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>

                <div id="auto-sizing">
                    <h6>Auto-sizing</h6>
                    <p>The example below uses a flexbox utility to vertically center the contents and changes <code>.col</code> to <code>.col-auto</code> so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.</p>

                    <div className="bd-example">
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                                    <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe" />
                                </div>
                                <div className="col-auto">
                                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="autoSizingCheck" />
                                        <label className="form-check-label" htmlFor="autoSizingCheck">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <PrismCode
                        code={
                        '<form>\n' +
                        '  <div className="form-row align-items-center">\n' +
                        '    <div className="col-auto">\n' +
                        '      <label className="sr-only" htmlFor="inlineFormInput">Name</label>\n' +
                        '      <input type="text" className="form-control mb-2" id="inlineFormInput" placeholder="Jane Doe">\n' +
                        '    </div>\n' +
                        '    <div className="col-auto">\n' +
                        '      <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>\n' +
                        '      <div className="input-group mb-2">\n' +
                        '        <div className="input-group-prepend">\n' +
                        '          <div className="input-group-text">@</div>\n' +
                        '        </div>\n' +
                        '        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username">\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '    <div className="col-auto">\n' +
                        '      <div className="form-check mb-2">\n' +
                        '        <input className="form-check-input" type="checkbox" id="autoSizingCheck">\n' +
                        '        <label className="form-check-label" htmlFor="autoSizingCheck">\n' +
                        '          Remember me\n' +
                        '        </label>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '    <div className="col-auto">\n' +
                        '      <button type="submit" className="btn btn-primary mb-2">Submit</button>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</form>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />

                    <p>You can then remix that once again with size-specific column classes.</p>

                    <div className="bd-example">
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-sm-3 my-1">
                                    <label className="sr-only" htmlFor="inlineFormInputName">Name</label>
                                    <input type="text" className="form-control" id="inlineFormInputName" placeholder="Jane Doe" />
                                </div>
                                <div className="col-sm-3 my-1">
                                    <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="autoSizingCheck2" />
                                        <label className="form-check-label" htmlFor="autoSizingCheck2">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <PrismCode
                        code={
                        '<form>\n' +
                        '  <div className="form-row align-items-center">\n' +
                        '    <div className="col-sm-3 my-1">\n' +
                        '      <label className="sr-only" htmlFor="inlineFormInputName">Name</label>\n' +
                        '      <input type="text" className="form-control" id="inlineFormInputName" placeholder="Jane Doe">\n' +
                        '    </div>\n' +
                        '    <div className="col-sm-3 my-1">\n' +
                        '      <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Username</label>\n' +
                        '      <div className="input-group">\n' +
                        '        <div className="input-group-prepend">\n' +
                        '          <div className="input-group-text">@</div>\n' +
                        '        </div>\n' +
                        '        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username">\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '    <div className="col-auto my-1">\n' +
                        '      <div className="form-check">\n' +
                        '        <input className="form-check-input" type="checkbox" id="autoSizingCheck2">\n' +
                        '        <label className="form-check-label" htmlFor="autoSizingCheck2">\n' +
                        '          Remember me\n' +
                        '        </label>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '    <div className="col-auto my-1">\n' +
                        '      <button type="submit" className="btn btn-primary">Submit</button>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</form>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />

                    <p>And of course custom form controls are supported.</p>

                    <div className="bd-example">
                        <form>
                            <div className="form-row align-items-center">
                                <div className="col-auto my-1">
                                    <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                        <option defaultValue="0">Choose...</option>
                                        <option defaultValue="1">One</option>
                                        <option defaultValue="2">Two</option>
                                        <option defaultValue="3">Three</option>
                                    </select>
                                </div>
                                <div className="col-auto my-1">
                                    <div className="custom-control custom-checkbox mr-sm-2">
                                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                        <label className="custom-control-label" htmlFor="customControlAutosizing">Remember my preference</label>
                                    </div>
                                </div>
                                <div className="col-auto my-1">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <PrismCode
                        code={
                        '<form>\n' +
                        '  <div className="form-row align-items-center">\n' +
                        '    <div className="col-auto my-1">\n' +
                        '      <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>\n' +
                        '      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">\n' +
                        '        <option defaultValue="0">Choose...</option>\n' +
                        '        <option defaultValue="1">One</option>\n' +
                        '        <option defaultValue="2">Two</option>\n' +
                        '        <option defaultValue="3">Three</option>\n' +
                        '      </select>\n' +
                        '    </div>\n' +
                        '    <div className="col-auto my-1">\n' +
                        '      <div className="custom-control custom-checkbox mr-sm-2">\n' +
                        '        <input type="checkbox" className="custom-control-input" id="customControlAutosizing">\n' +
                        '        <label className="custom-control-label" htmlFor="customControlAutosizing">Remember my preference</label>\n' +
                        '     </div>\n' +
                        '   </div>\n' +
                        '   <div className="col-auto my-1">\n' +
                        '     <button type="submit" className="btn btn-primary">Submit</button>\n' +
                        '   </div>\n' +
                        '  </div>\n' +
                        '</form>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>
            </div>


            <div id="inline-forms">
                <h5>Inline forms</h5>
                <p>Use the <code>.form-inline</code> class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.</p>

                <ul>
                    <li>Controls are <code>display: flex</code>, collapsing any HTML white space and allowing you to provide alignment control with <Link title="Spacing" className="scroll-to-id" to="spacing" spy={ true } smooth={ true } duration={ 0 } href="#spacing">spacing</Link> and <Link title="Flex" className="scroll-to-id" to="flex" spy={ true } smooth={ true } duration={ 0 } href="#flex">flexbox</Link> utilities.</li>
                    <li>Controls and input groups receive <code>width: auto</code> to override the Bootstrap default <code>width: 100%</code>.</li>
                    <li>Controls <strong>only appear inline in viewports that are at least 576px wide</strong> to account for narrow viewports on mobile devices.</li>
                </ul>

                <p>You may need to manually address the width and alignment of individual form controls with <Link title="Spacing" className="scroll-to-id" to="spacing" spy={ true } smooth={ true } duration={ 0 } href="#spacing">spacing utilities</Link> (as shown below). Lastly, be sure to always include a <code>&lt;label&gt;</code> with each form control, even if you need to hide it from non-screenreader visitors with <code>.sr-only</code>.</p>

                <div className="bd-example">
                    <form className="form-inline">
                        <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                        <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe" />

                        <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                        <div className="input-group mb-2 mr-sm-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">@</div>
                            </div>
                            <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username" />
                        </div>

                        <div className="form-check mb-2 mr-sm-2">
                            <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                            <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                        </div>

                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>

                <PrismCode
                    code={
                    '<form className="form-inline">\n' +
                    '  <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>\n' +
                    '  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe">\n' +
                    '\n' +
                    '  <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>\n' +
                    '  <div className="input-group mb-2 mr-sm-2">\n' +
                    '    <div className="input-group-prepend">\n' +
                    '      <div className="input-group-text">@</div>\n' +
                    '    </div>\n' +
                    '    <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">\n' +
                    '  </div>\n' +
                    '\n' +
                    '  <div className="form-check mb-2 mr-sm-2">\n' +
                    '    <input className="form-check-input" type="checkbox" id="inlineFormCheck">\n' +
                    '    <label className="form-check-label" htmlFor="inlineFormCheck">\n' +
                    '      Remember me\n' +
                    '    </label>\n' +
                    '  </div>\n' +
                    '\n' +
                    '  <button type="submit" className="btn btn-primary mb-2">Submit</button>\n' +
                    '</form>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>Custom form controls and selects are also supported.</p>

                <div className="bd-example">
                    <form className="form-inline">
                        <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Preference</label>
                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option defaultValue="0">Choose...</option>
                            <option defaultValue="1">One</option>
                            <option defaultValue="2">Two</option>
                            <option defaultValue="3">Three</option>
                        </select>

                        <div className="custom-control custom-checkbox my-1 mr-sm-2">
                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                            <label className="custom-control-label" htmlFor="customControlInline">Remember my preference</label>
                        </div>

                        <button type="submit" className="btn btn-primary my-1">Submit</button>
                    </form>
                </div>

                <PrismCode
                    code={
                    '<form className="form-inline">\n' +
                    '  <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Preference</label>\n' +
                    '  <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">\n' +
                    '    <option selected="">Choose...</option>\n' +
                    '    <option value="1">One</option>\n' +
                    '    <option value="2">Two</option>\n' +
                    '    <option value="3">Three</option>\n' +
                    '  </select>\n' +
                    '\n' +
                    '  <div className="custom-control custom-checkbox my-1 mr-sm-2">\n' +
                    '    <input type="checkbox" className="custom-control-input" id="customControlInline">\n' +
                    '    <label className="custom-control-label" htmlFor="customControlInline">Remember my preference</label>\n' +
                    '  </div>\n' +
                    '\n' +
                    '  <button type="submit" className="btn btn-primary my-1">Submit</button>\n' +
                    '</form>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <div className="bd-callout bd-callout-warning">
                    <h5>Alternatives to hidden labels</h5>
                    <p>Assistive technologies such as screen readers will have trouble with your forms if you don’t include a label for every input. For these inline forms, you can hide the labels using the <code>.sr-only</code> class. There are further alternative methods of providing a label for assistive technologies, such as the <code>aria-label</code>, <code>aria-labelledby</code> or <code>title</code> attribute. If none of these are present, assistive technologies may resort to using the <code>placeholder</code> attribute, if present, but note that use of <code>placeholder</code> as a replacement for other labelling methods is not advised.</p>
                </div>
            </div>
        </div>
    );
};

export default FormLayout;
