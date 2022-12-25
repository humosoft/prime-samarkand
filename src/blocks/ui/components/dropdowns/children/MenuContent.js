import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';

const MenuContent = () => {
    return (
        <div id="menu-content" className="spacer m-top-lg">
            <h4>Menu content</h4>

            <div id="headers">
                <h5>Headers</h5>
                <p>Add a header to label sections of actions in any dropdown menu.</p>

                <div className="bd-example">
                    <Dropdown className="dropdown-menu" show>
                        <h6 className="dropdown-header">Dropdown header</h6>
                        <Dropdown.Item href="#headers/action" eventKey="2">Action</Dropdown.Item>
                        <Dropdown.Item href="#headers/action" eventKey="3">Another action</Dropdown.Item>
                    </Dropdown>
                </div>

                <PrismCode
                    code={
                    '<div className="dropdown-menu">\n' +
                    '  <h6 className="dropdown-header">Dropdown header</h6>\n' +
                    '  <a className="dropdown-item" href="#">Action</a>\n' +
                    '  <a className="dropdown-item" href="#">Another action</a>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="dividers">
                <h5>Dividers</h5>
                <p>Separate groups of related menu items with a divider.</p>

                <div className="bd-example">
                    <Dropdown className="dropdown-menu" show>
                        <Dropdown.Item href="#dividers/action" eventKey="2">Action</Dropdown.Item>
                        <Dropdown.Item href="#dividers/action" eventKey="3">Another action</Dropdown.Item>
                        <Dropdown.Item href="#dividers/action" eventKey="4">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#dividers/action" eventKey="5">Separated link</Dropdown.Item>
                    </Dropdown>
                </div>

                <PrismCode
                    code={
                    '<div className="dropdown-menu">\n' +
                    '  <a className="dropdown-item" href="#">Action</a>\n' +
                    '  <a className="dropdown-item" href="#">Another action</a>\n' +
                    '  <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '  <div className="dropdown-divider"></div>\n' +
                    '  <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="menu-text">
                <h5>Text</h5>
                <p>Place any freeform text within a dropdown menu with text and use <Link title="Spacing" className="scroll-to-id" to="spacing" spy={ true } smooth={ true } duration={ 0 } href="#spacing">spacing utilities</Link>. Note that you’ll likely need additional sizing styles to constrain the menu width.</p>

                <div className="bd-example">
                    <Dropdown className="dropdown-menu p-4 text-muted" style={ { "maxWidth": "200px" } } show>
                        <p>Some example text that's free-flowing within the dropdown menu.</p>
                        <p className="mb-0">And this is more example text.</p>
                    </Dropdown>
                </div>

                <PrismCode
                    code={
                    '<div className="dropdown-menu p-4 text-muted" style="maxWidth: 200px;">\n' +
                    '  <p>\n' +
                    '    Some example text that\'s free-flowing within the dropdown menu.\n' +
                    '  </p>\n' +
                    '  <p className="mb-0">\n' +
                    '    And this is more example text.\n' +
                    '  </p>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="menu-forms">
                <h5>Forms</h5>
                <p>Put a form within a dropdown menu, or make it into a dropdown menu, and use <Link title="Spacing" className="scroll-to-id" to="spacing" spy={ true } smooth={ true } duration={ 0 } href="#spacing">margin or padding utilities</Link> to give it the negative space you require.</p>

                <div className="bd-example">
                    <div className="dropdown-menu">
                        <form className="px-3 py-3">
                            <div className="form-group">
                                <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleDropdownFormPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                    <label className="form-check-label" htmlFor="dropdownCheck">Remember me</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#menu-forms/action">New around here? Sign up</a>
                        <a className="dropdown-item" href="#menu-forms/action">Forgot password?</a>
                    </div>
                </div>

                <PrismCode
                    code={
                    '<div className="dropdown-menu">\n' +
                    '  <form className="px-3 py-3">\n' +
                    '    <div className="form-group">\n' +
                    '      <label for="exampleDropdownFormEmail1">Email address</label>\n' +
                    '      <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>\n' +
                    '    </div>\n' +
                    '    <div className="form-group">\n' +
                    '      <label for="exampleDropdownFormPassword1">Password</label>\n' +
                    '      <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>\n' +
                    '    </div>\n' +
                    '    <div className="form-group">\n' +
                    '      <div className="form-check">\n' +
                    '        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>\n' +
                    '        <label className="form-check-label" for="dropdownCheck">\n' +
                    '          Remember me\n' +
                    '        </label>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '    <button type="submit" className="btn btn-primary">Sign in</button>\n' +
                    '  </form>\n' +
                    '  <div className="dropdown-divider"></div>\n' +
                    '  <a className="dropdown-item" href="#menu-forms">New around here? Sign up</a>\n' +
                    '  <a className="dropdown-item" href="#menu-forms">Forgot password?</a>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <div className="bd-example">
                    <form className="dropdown-menu p-4">
                        <div className="form-group">
                            <label htmlFor="exampleDropdownFormEmail2">Email address</label>
                            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleDropdownFormPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                                <label className="form-check-label" htmlFor="dropdownCheck2">Remember me</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>

                <PrismCode
                    code={
                    '<form className="dropdown-menu p-4">\n' +
                    '  <div className="form-group">\n' +
                    '    <label for="exampleDropdownFormEmail2">Email address</label>\n' +
                    '    <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>\n' +
                    '  </div>\n' +
                    '  <div className="form-group">\n' +
                    '    <label for="exampleDropdownFormPassword2">Password</label>\n' +
                    '    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>\n' +
                    '  </div>\n' +
                    '  <div className="form-group">\n' +
                    '    <div className="form-check">\n' +
                    '      <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>\n' +
                    '      <label className="form-check-label" for="dropdownCheck2">\n' +
                    '        Remember me\n' +
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
        </div>
    );
};

export default MenuContent;
