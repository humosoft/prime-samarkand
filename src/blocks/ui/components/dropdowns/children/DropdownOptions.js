import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';

const DropdownOptions = () => {
    return (
        <div id="dropdown-options">
            <h4>Dropdown options</h4>
            <p>Use <code>data-offset</code> or <code>data-reference</code> to change the location of the dropdown.</p>

            <div className="bd-example">
                <div className="d-flex">
                    <Dropdown className="">
                        <Dropdown.Toggle className="btn btn-secondary dropdown-toggle mr-1" id="dropdownMenuOffset">
                            Offset
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#dropdown-options/action">Action</Dropdown.Item>
                            <Dropdown.Item href="#dropdown-options/action">Another action</Dropdown.Item>
                            <Dropdown.Item href="#dropdown-options/action">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={ButtonGroup}>
                        <Button className="btn btn-secondary">Reference</Button>

                        <Dropdown.Toggle className="btn btn-secondary" split id="dropdownMenuReference" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#dropdown-options/action">Action</Dropdown.Item>
                            <Dropdown.Item href="#dropdown-options/action">Another action</Dropdown.Item>
                            <Dropdown.Item href="#dropdown-options/action">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#dropdown-options/action">Something else here</Dropdown.Item>
                            <Dropdown.Item href="#dropdown-options/action">Something else here</Dropdown.Item>
                        </Dropdown.Menu>
                  </Dropdown>
                </div>
            </div>

            <PrismCode
              code={
                  '<div className="d-flex">\n' +
                  '  <div className="dropdown ">\n' +
                  '    <button type="button" className="btn btn-primary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">Offset</button>\n' +
                  ' \n' +
                  '    <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">\n' +
                  '      <a className="dropdown-item" href="#">Action</a>\n' +
                  '      <a className="dropdown-item" href="#">Another action</a>\n' +
                  '      <a className="dropdown-item" href="#">Something else here</a>\n' +
                  '    </div>\n' +
                  '  </div>\n' +
                  '  <div className="btn-group">\n' +
                  '    <button type="button" className="btn btn-primary">Reference</button>\n' +
                  '    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">\n' +
                  '      <span className="sr-only">Toggle Dropdown</span>\n' +
                  '    </button>\n' +
                  ' \n' +
                  '    <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">\n' +
                  '      <a className="dropdown-item" href="#">Action</a>\n' +
                  '      <a className="dropdown-item" href="#">Another action</a>\n' +
                  '      <a className="dropdown-item" href="#">Something else here</a>\n' +
                  '      <div className="dropdown-divider"></div>\n' +
                  '      <a className="dropdown-item" href="#">Separated link</a>\n' +
                  '    </div>\n' +
                  '  </div>\n' +
                  '</div>'
              }
              language="html"
              plugins={['line-numbers']}
            />
        </div>
    );
};

export default DropdownOptions;
