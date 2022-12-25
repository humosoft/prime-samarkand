import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Nav, NavDropdown } from 'react-bootstrap';

const RegardingAccessibility = () => {
    return (
        <div id="regarding-accessibility">
            <h4>Regarding accessibility</h4>
            <p>If you’re using navs to provide a navigation bar, be sure to add a <code>role="navigation"</code> to the most logical parent container of the <code>&lt;ul&gt;</code>, or wrap a <code>&lt;nav&gt;</code> element around the whole navigation. Do not add the role to the <code>&lt;ul&gt;</code> itself, as this would prevent it from being announced as an actual list by assistive technologies.</p>
            <p>Note that navigation bars, even if visually styled as tabs with the <code>.nav-tabs</code> class, should <strong>not</strong> be given <code>role="tablist"</code>, <code>role="tab"</code> or <code>role="tabpanel"</code> attributes. These are only appropriate for dynamic tabbed interfaces, as described in the <a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel" target="_blank" rel="noopener noreferrer"><abbr title="Web Accessibility Initiative">WAI</abbr><abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices</a>.</p>

            <div id="using-dropdowns">
                <h5>Using dropdowns</h5>
                <p>Add dropdown menus with a little extra HTML and the dropdowns JavaScript plugin.</p>

                <div id="tabs-with-dropdowns">
                    <h6>Tabs with dropdowns</h6>

                    <div className="bd-example">
                        <Nav variant="tabs" activeKey="1">
                            <Nav.Item>
                                <Nav.Link eventKey="1" href="#using-dropdowns/action">
                                    Active
                                </Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link eventKey="2" href="#using-dropdowns/action" title="Item">
                                    Link
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3" href="#using-dropdowns/action" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <PrismCode
                        code={ '<ul className="nav nav-tabs">\n' +
                        '  <li className="nav-item">\n' +
                        '    <a className="nav-link active" href="#">Active</a>\n' +
                        '  </li>\n' +
                        '  <li className="nav-item dropdown">\n' +
                        '    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>\n' +
                        '      <div className="dropdown-menu">\n' +
                        '        <a className="dropdown-item" href="#">Action</a>\n' +
                        '        <a className="dropdown-item" href="#">Another action</a>\n' +
                        '        <a className="dropdown-item" href="#">Something else here</a>\n' +
                        '        <div className="dropdown-divider"></div>\n' +
                        '        <a className="dropdown-item" href="#">Separated link</a>\n' +
                        '      </div>\n' +
                        '  </li>\n' +
                        '  <li className="nav-item">\n' +
                        '    <a className="nav-link" href="#">Link</a>\n' +
                        '  </li>\n' +
                        '  <li className="nav-item">\n' +
                        '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                        '  </li>\n' +
                        '</ul>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>

                <div id="pills-with-dropdowns">
                    <h6>Pills with dropdowns</h6>

                    <div className="bd-example">
                        <Nav variant="pills" activeKey="1">
                            <Nav.Item>
                                <Nav.Link eventKey="1" href="#using-dropdowns/action">
                                    Active
                                </Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Dropdown" id="nav-dropdown">
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#using-dropdowns/action" eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link href="#using-dropdowns/action" eventKey="2" title="Item">
                                    Link
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#using-dropdowns/action" eventKey="3" disabled>
                                    Disabled
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <PrismCode
                        code={ '<ul className="nav nav-pills">\n' +
                        '  <li className="nav-item">\n' +
                        '    <a className="nav-link active" href="#">Active</a>\n' +
                        '  </li>\n' +
                        '  <li className="nav-item dropdown">\n' +
                        '    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>\n' +
                        '    <div className="dropdown-menu">\n' +
                        '      <a className="dropdown-item" href="#">Action</a>\n' +
                        '      <a className="dropdown-item" href="#">Another action</a>\n' +
                        '      <a className="dropdown-item" href="#">Something else here</a>\n' +
                        '      <div className="dropdown-divider"></div>\n' +
                        '      <a className="dropdown-item" href="#">Separated link</a>\n' +
                        '    </div>\n' +
                        '  </li>\n' +
                        '  <li className="nav-item">\n' +
                        '    <a className="nav-link" href="#">Link</a>\n' +
                        '  </li>\n' +
                        '  <li className="nav-item">\n' +
                        '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                        '  </li>\n' +
                        '</ul>'
                        }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>
            </div>
        </div>
    );
};

export default RegardingAccessibility;
