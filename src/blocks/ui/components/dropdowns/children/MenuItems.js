import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown } from 'react-bootstrap';

const MenuItems = () => {
    return (
        <div id="menu-items">
            <h4>Menu items</h4>
            <p>Historically dropdown menu contents <em>had</em> to be links, but that’s no longer the case with v4. Now you can optionally use{' '}<code>&lt;button&gt;</code> elements in your dropdowns instead of just <code>&lt;a&gt;</code>s.</p>

            <div className="bd-example">
                <Dropdown>
                    <Dropdown.Toggle className="btn btn-secondary" id="dropdownMenu2">
                        Dropdown
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#menu-items/action">Action</Dropdown.Item>
                        <Dropdown.Item href="#menu-items/action">Another action</Dropdown.Item>
                        <Dropdown.Item href="#menu-items/action">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <PrismCode
                code={
                    '<div className="dropdown">\n' +
                    '  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>\n' +
                    ' \n' +
                    '  <div className="dropdown-menu" aria-labelledby="dropdownMenu2" >\n' +
                    '    <button className="dropdown-item" type="button">Action</button>\n' +
                    '    <button className="dropdown-item" type="button">Another action</button>\n' +
                    '    <button className="dropdown-item" type="button">Something else here</button>\n' +
                    '  </div>\n' +
                  '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <p>You can also create non-interactive dropdown items with <code>.dropdown-item-text</code>. Feel free to style further with custom CSS or text utilities.</p>

            <div className="bd-example">
                <Dropdown className="dropdown-menu" show>
                    <span className="dropdown-item-text">Dropdown item text</span>
                    <Dropdown.Item href="#menu-items/action">Action</Dropdown.Item>
                    <Dropdown.Item href="#menu-items/action">Another action</Dropdown.Item>
                    <Dropdown.Item href="#menu-items/action">Something else</Dropdown.Item>
                </Dropdown>
            </div>

            <PrismCode
                code={
                    '<div className="dropdown-menu">\n' +
                    '  <span className="dropdown-item-text">Dropdown item text</span>\n' +
                    '  <a className="dropdown-item" href="#">Action</a>\n' +
                    '  <a className="dropdown-item" href="#">Another action</a>\n' +
                    '  <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <h5>Active</h5>
            <p>Add <code>.active</code> to items in the dropdown to <strong>style them as active</strong>.</p>

            <div className="bd-example">
                <Dropdown className="dropdown-menu" show>
                    <Dropdown.Item href="#menu-items/action">Regular link</Dropdown.Item>
                    <Dropdown.Item className="active" href="#menu-items/action">
                        Active link
                    </Dropdown.Item>
                    <Dropdown.Item href="#menu-items/action">Another link</Dropdown.Item>
                </Dropdown>
            </div>

            <PrismCode
                code={
                    '<div className="dropdown-menu">\n' +
                    '  <a className="dropdown-item" href="#">Regular link</a>\n' +
                    '  <a className="dropdown-item active" href="#">Active link</a>\n' +
                    '  <a className="dropdown-item" href="#">Another link</a>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <h5>Disabled</h5>
            <p>Add <code>.disabled</code> to items in the dropdown to <strong>style them as disabled</strong>.</p>

            <div className="bd-example">
                <Dropdown className="dropdown-menu" show>
                    <Dropdown.Item href="#menu-items/action">Regular link</Dropdown.Item>
                    <Dropdown.Item className="disabled" href="#menu-items/action">
                        Disabled link
                    </Dropdown.Item>
                    <Dropdown.Item href="#menu-items/action">Another link</Dropdown.Item>
                </Dropdown>
            </div>

            <PrismCode
                code={
                    '<div className="dropdown-menu">\n' +
                    '  <a className="dropdown-item" href="#">Regular link</a>\n' +
                    '  <a className="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a>\n' +
                    '  <a className="dropdown-item" href="#">Another link</a>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default MenuItems;
