import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const FormControls = () => {
    return (
        <div id="form-controls">
            <h4>Form controls</h4>
            <p>Textual form controls—like <code>&lt;input&gt;</code>s, <code>&lt;select&gt;</code>s, and <code>&lt;textarea&gt;</code>s—are styled with the <code>.form-control</code> class. Included are styles for general appearance, focus state, sizing, and more.</p>
            <p>Be sure to explore our custom forms to further style <code>&lt;select&gt;</code>s.</p>

            <div className="bd-example">
              <form>
                  <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Example select</label>
                      <select className="form-control" id="exampleFormControlSelect1">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                      <select multiple className="form-control" id="exampleFormControlSelect2">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </select>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </form>
            </div>

            <PrismCode
                code={
                    '<form>\n' +
                    '  <div className="form-group">\n' +
                    '    <label htmlFor="exampleFormControlInput1">Email address</label>\n' +
                    '    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">\n' +
                    '  </div>\n' +
                    '  <div className="form-group">\n' +
                    '    <label htmlFor="exampleFormControlSelect1">Example select</label>\n' +
                    '    <select className="form-control" id="exampleFormControlSelect1">\n' +
                    '      <option>1</option>\n' +
                    '      <option>2</option>\n' +
                    '      <option>3</option>\n' +
                    '      <option>4</option>\n' +
                    '      <option>5</option>\n' +
                    '    </select>\n' +
                    '  </div>\n' +
                    '  <div className="form-group">\n' +
                    '    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>\n' +
                    '    <select multiple className="form-control" id="exampleFormControlSelect2">\n' +
                    '      <option>1</option>\n' +
                    '      <option>2</option>\n' +
                    '      <option>3</option>\n' +
                    '      <option>4</option>\n' +
                    '      <option>5</option>\n' +
                    '    </select>\n' +
                    '  </div>\n' +
                    '  <div className="form-group">\n' +
                    '    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>\n' +
                    '    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>\n' +
                    '  </div>\n' +
                    '</form>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <p>For file inputs, swap the <code>.form-control</code> for <code>.form-control-file</code>.</p>

            <div className="bd-example">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Example file input</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </form>
            </div>

            <PrismCode
                code={
                  '<form>\n' +
                  '  <div className="form-group">\n' +
                  '    <label htmlFor="exampleFormControlFile1">Example file input</label>\n' +
                  '    <input type="file" className="form-control-file" id="exampleFormControlFile1">\n' +
                  '  </div>\n' +
                  '</form>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <div id="form-sizing">
                <h5>Sizing</h5>
                <p>Set heights using classes like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>

                <div className="bd-example">
                    <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
                    <input className="form-control" type="text" placeholder="Default input" />
                    <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
                </div>

                <PrismCode
                    code={
                      '<input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"/>\n' +
                      '<input className="form-control" type="text" placeholder="Default input"/>\n' +
                      '<input className="form-control form-control-sm" type="text" placeholder=".form-control-sm"/>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />

                <div className="bd-example">
                    <select className="form-control form-control-lg">
                        <option>Large select</option>
                    </select>
                    <select className="form-control">
                        <option>Default select</option>
                    </select>
                    <select className="form-control form-control-sm">
                        <option>Small select</option>
                    </select>
                </div>

                <PrismCode
                    code={
                        '<select className="form-control form-control-lg">\n' +
                        '  <option>Large select</option>\n' +
                        '</select>\n' +
                        '<select className="form-control">\n' +
                        '  <option>Default select</option>\n' +
                        '</select>\n' +
                        '<select className="form-control form-control-sm">\n' +
                        '  <option>Small select</option>\n' +
                        '</select>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>

            <div id="readonly">
                <h5>Readonly</h5>
                <p>Add the <code>readonly</code> boolean attribute on an input to prevent modification of the input’s value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.</p>

                <div className="bd-example">
                    <input className="form-control" type="text" placeholder="Readonly input here..." readOnly />
                </div>

                <PrismCode
                    code={'<input className="form-control" type="text" placeholder="Readonly input here..." readOnly=""/>'}
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>

            <div id="readonly-plain-text">
                <h5>Readonly plain text</h5>
                <p>If you want to have <code>&lt;input readonly&gt;</code> elements in your form styled as plain text, use the{' '}<code>.form-control-plaintext</code> class to remove the default form field styling and preserve the correct margin and padding.</p>

                <div className="bd-example">
                    <form>
                        <div className="form-group row">
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword" />
                            </div>
                        </div>
                    </form>
                </div>

                <PrismCode
                    code={
                        '<form>\n' +
                        '  <div className="form-group row">\n' +
                        '    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>\n' +
                        '    <div className="col-sm-10">\n' +
                        '      <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail" defaultValue="email@example.com">\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="form-group row">\n' +
                        '    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>\n' +
                        '    <div className="col-sm-10">\n' +
                        '      <input type="password" className="form-control" id="inputPassword">\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</form>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />

                <div className="bd-example">
                    <form className="form-inline">
                        <div className="form-group mb-2">
                            <label htmlFor="staticEmail2" className="sr-only">
                                Email
                            </label>
                            <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail2" defaultValue="email@example.com" />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="inputPassword2" className="sr-only">
                                Password
                            </label>
                            <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2">
                            Confirm identity
                        </button>
                    </form>
                </div>

                <PrismCode
                    code={
                        '<form className="form-inline">\n' +
                        '  <div className="form-group mb-2">\n' +
                        '    <label htmlFor="staticEmail2" className="sr-only">Email</label>\n' +
                        '    <input type="text" readOnly="" className="form-control-plaintext" id="staticEmail2" defaultValue="email@example.com"/>\n' +
                        '  </div>\n' +
                        '  <div className="form-group mx-sm-3 mb-2">\n' +
                        '    <label htmlFor="inputPassword2" className="sr-only">Password</label>\n' +
                        '    <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>\n' +
                        '  </div>\n' +
                        '  <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>\n' +
                        '</form>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>

            <div id="range-input">
                <h5>Range input</h5>
                <p>Set horizontally scrollable range inputs using <code>.form-control-range</code>.</p>

                <div className="bd-example">
                    <form>
                        <div className="form-group">
                            <label htmlFor="formControlRange">Example Range input</label>
                            <input type="range" className="form-control-range" id="formControlRange" />
                        </div>
                    </form>
                </div>

                <PrismCode
                    code={
                        '<form>\n' +
                        '  <div className="form-group">\n' +
                        '    <label htmlFor="formControlRange">Example Range input</label>\n' +
                        '    <input type="range" className="form-control-range" id="formControlRange">\n' +
                        '  </div>\n' +
                        '</form>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>
        </div>
    );
};

export default FormControls;
