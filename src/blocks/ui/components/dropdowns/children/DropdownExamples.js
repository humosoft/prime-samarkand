import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup } from 'react-bootstrap';

const DropdownExamples = () => {
    return (
        <div id="dropdowns-examples" className="spacer m-top-lg">
            <h4>Default examples</h4>
            <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code>.dropdown</code>, or another element that declares <code>position: relative;</code>. Dropdowns can be triggered from <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code>{' '}elements to better fit your potential needs.</p>

            <div id="single-button">
                <h5>Single button</h5>
                <p>Any single <code>.btn</code> can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with either <code>&lt;button&gt;</code> elements:</p>

                <div className="bd-example">
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" id="dropdownMenuButton">
                            Dropdown button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#dropdowns-examples/action">Action</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action">Another action</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <PrismCode
                    code={
                        '<div className="dropdown">\n' +
                        '  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>\n' +
                        '\n' +
                        '  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
                        '    <a className="dropdown-item" href="#">Action</a>\n' +
                        '    <a className="dropdown-item" href="#">Another action</a>\n' +
                        '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />

                <p>And with <code>&lt;a&gt;</code> elements:</p>

                <div className="bd-example">
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" href="#dropdowns-examples/action" id="dropdownMenuButton">
                            Dropdown link
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#dropdowns-examples/action">Action</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action">Another action</Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <PrismCode
                    code={
                        '<div className="dropdown">\n' +
                        '  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</a>\n' +
                        '\n' +
                        '  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">\n' +
                        '    <a className="dropdown-item" href="#">Action</a>\n' +
                        '    <a className="dropdown-item" href="#">Another action</a>\n' +
                        '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />

                <p>The best part is you can do this with any button variant, too:</p>

                <div className="bd-example">
                    {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map((variant) => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={variant}
                            id={`dropdown-split-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                            className="mr-1"
                        >
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="4">
                                Separated link
                            </Dropdown.Item>
                        </DropdownButton>
                    ))}
                </div>
                <PrismCode
                    code={
                        '<!-- Example single danger button -->\n' +
                        '<div className="btn-group">\n' +
                        '  <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Primary</button>\n' +
                        ' \n' +
                        '  <div className="dropdown-menu">\n' +
                        '    <a className="dropdown-item" href="#">Action</a>\n' +
                        '    <a className="dropdown-item" href="#">Another action</a>\n' +
                        '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                        '    <div className="dropdown-divider"></div>\n' +
                        '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>

            <div id="split-button">
                <h5>Split button</h5>
                <p>Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of{' '}<code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.</p>
                <p>We use this extra className to reduce the horizontal <code>padding</code> on either side of the caret by 25% and remove the{' '}<code>margin-left</code> that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.</p>

                <div className="bd-example">
                    {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map((variant) => (
                        <SplitButton
                            key={variant}
                            id={`dropdown-split-variants-${variant}`}
                            variant={variant.toLowerCase()}
                            title={variant}
                            className="mr-1"
                        >
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="1">
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="3" active>
                                Active Item
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#dropdowns-examples/action" eventKey="4">
                                Separated link
                            </Dropdown.Item>
                        </SplitButton>
                    ))}
                </div>

                <PrismCode
                    code={
                        '<!-- Example split danger button -->\n' +
                        '<div className="btn-group">\n' +
                        '  <button type="button" className="btn btn-danger">Danger</button>\n' +
                        '  <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                        '    <span className="sr-only">Toggle Dropdown</span>\n' +
                        '  </button>\n' +
                        ' \n' +
                        '  <div className="dropdown-menu">\n' +
                        '    <a className="dropdown-item" href="#">Action</a>\n' +
                        '    <a className="dropdown-item" href="#">Another action</a>\n' +
                        '    <a className="dropdown-item" href="#">Something else here</a>\n' +
                        '    <div className="dropdown-divider"></div>\n' +
                        '    <a className="dropdown-item" href="#">Separated link</a>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>

            <div id="dropdowns-button-sizing">
                <h5>Sizing</h5>
                <p>Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.</p>

                <div className="bd-example">
                  <div className="btn-toolbar" role="toolbar">
                    {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                      <DropdownType
                        as={ButtonGroup}
                        key={idx}
                        id={`dropdown-button-drop-${idx}`}
                        size="lg"
                        title="Large button"
                        variant="secondary"
                        className="mr-1"
                      >
                        <Dropdown.Item href="#dropdowns-examples/action" eventKey="1">
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item href="#dropdowns-examples/action" eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#dropdowns-examples/action" eventKey="3">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#dropdowns-examples/action" eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </DropdownType>
                    ))}
                  </div>
                  <div className="btn-toolbar" role="toolbar">
                      {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                          <DropdownType
                              as={ButtonGroup}
                              key={idx}
                              id={`dropdown-button-drop-${idx}`}
                              size="sm"
                              title="Small button"
                              variant="secondary"
                            className="mr-1"
                          >
                              <Dropdown.Item href="#dropdowns-examples/action" eventKey="1">
                                  Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#dropdowns-examples/action" eventKey="2">
                                  Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#dropdowns-examples/action" eventKey="3">
                                  Something else here
                              </Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item href="#dropdowns-examples/action" eventKey="4">
                                  Separated link
                              </Dropdown.Item>
                          </DropdownType>
                      ))}
                  </div>
              </div>

              <PrismCode
                  code={
                    '<!-- Large button groups (default and split) -->\n' +
                    '<div className="btn-group">\n' +
                    '  <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Large button</button>\n' +
                    ' \n' +
                    '  <div className="dropdown-menu">\n' +
                    '    ...\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    ' \n' +
                    '<div className="btn-group">\n' +
                    '  <button className="btn btn-secondary btn-lg" type="button">Large split button</button>\n' +
                    '  <button type="button" className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                    '    <span className="sr-only">Toggle Dropdown</span>\n' +
                    '  </button>\n' +
                    ' \n' +
                    '  <div className="dropdown-menu">\n' +
                    '    ...\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    ' \n' +
                    '<!-- Small button groups (default and split) -->\n' +
                    '<div className="btn-group">\n' +
                    '  <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Small button</button>\n' +
                    ' \n' +
                    '  <div className="dropdown-menu">\n' +
                    '    ...\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    ' \n' +
                    '<div className="btn-group">\n' +
                    '  <button className="btn btn-secondary btn-sm" type="button">Small split button</button>\n'+
                    '  <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                    '    <span className="sr-only">Toggle Dropdown</span>\n' +
                    '  </button>\n' +
                    ' \n' +
                    '  <div className="dropdown-menu">\n' +
                    '    ...\n' +
                    '  </div>\n' +
                    '</div>'
                  }
                  language="html"
                  plugins={['line-numbers']}
              />
            </div>
        </div>
    );
};

export default DropdownExamples;
