import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';

const MenuAlignment = () => {
    return (
        <div id="menu-alignment">
            <h4>Menu alignment</h4>
            <p>By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. Add{' '}<code>.dropdown-menu-right</code> to a <code>.dropdown-menu</code> to right align the dropdown menu.</p>

            <div className="bd-example">
                <DropdownButton alignRight as={ButtonGroup} title="Right-aligned menu" id="dropdown-menu-align-right" variant="secondary">
                    <Dropdown.Item href="#menu-alignment/action" eventKey="1">
                        Action
                    </Dropdown.Item>
                    <Dropdown.Item href="#menu-alignment/action" eventKey="2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#menu-alignment/action" eventKey="3">
                        Something else here
                    </Dropdown.Item>
                </DropdownButton>
            </div>

            <PrismCode
                code={
                    '<div className="btn-group">\n' +
                    '  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Right-aligned menu</button>\n' +
                    ' \n' +
                    '  <div className="dropdown-menu dropdown-menu-right" >\n' +
                    '    <button className="dropdown-item" type="button">Action</button>\n' +
                    '    <button className="dropdown-item" type="button">Another action</button>\n' +
                    '    <button className="dropdown-item" type="button">Something else here</button>\n' +
                    '  </div>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <div id="responsive-alignment">
                <h5>Responsive alignment</h5>
                <p>If you want to use responsive alignment, disable dynamic positioning by adding the <code>data-display="static"</code> attribute and use the responsive variation classes.</p>
                <p>To align <strong>right</strong> the dropdown menu with the given breakpoint or larger, add{' '}<code>.dropdown-menu{`{-sm|-md|-lg|-xl}`}-right</code>.</p>

                <div className="bd-example">
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                            data-display="static"
                            variant="secondary"
                            className="btn btn-primary dropdown-toggle"
                            id="dropdownMenuButton-1"
                        >
                            Left-aligned but right aligned when large screen
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu-lg-right">
                            <Dropdown.Item href="#responsive-alignment/action">Action</Dropdown.Item>
                            <Dropdown.Item href="#responsive-alignment/action">Another action</Dropdown.Item>
                            <Dropdown.Item href="#responsive-alignment/action">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <PrismCode
                    code={
                        '<div className="btn-group">\n' +
                        '  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">Left-aligned but right aligned when large screen</button>\n' +
                        ' \n' +
                        '  <div className="dropdown-menu dropdown-menu-lg-right">\n' +
                        '    <button className="dropdown-item" type="button">Action</button>\n' +
                        '    <button className="dropdown-item" type="button">Another action</button>\n' +
                        '    <button className="dropdown-item" type="button">Something else here</button>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />

                <p>To align <strong>left</strong> the dropdown menu with the given breakpoint or larger, add <code>.dropdown-menu-right</code> and{' '}<code>.dropdown-menu{`{-sm|-md|-lg|-xl}`}-left</code>.</p>

                <div className="bd-example">
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle
                            data-display="static"
                            variant="secondary"
                            className="btn btn-primary dropdown-toggle"
                            id="dropdownMenuButton-2"
                        >
                            Right-aligned but left aligned when large screen
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                            <Dropdown.Item href="#responsive-alignment/action">Action</Dropdown.Item>
                            <Dropdown.Item href="#responsive-alignment/action">Another action</Dropdown.Item>
                            <Dropdown.Item href="#responsive-alignment/action">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <PrismCode
                    code={
                        '<div className="btn-group">\n' +
                        '  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">Right-aligned but left aligned when large screen</button>\n' +
                        ' \n' +
                        '  <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">\n' +
                        '    <button className="dropdown-item" type="button">Action</button>\n' +
                        '    <button className="dropdown-item" type="button">Another action</button>\n' +
                        '    <button className="dropdown-item" type="button">Something else here</button>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />

                <p>Note that you don’t need to add a <code>data-display="static"</code> attribute to dropdown buttons in navbars, since Popper.js isn’t used in navbars.</p>
            </div>
        </div>
    );
};

export default MenuAlignment;
