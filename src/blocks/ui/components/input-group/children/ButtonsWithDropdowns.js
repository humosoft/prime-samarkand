import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown } from 'react-bootstrap';

const ButtonsWithDropdowns = () => {
    return (
        <div id="buttons-with-dropdowns">
            <h4>Buttons with dropdowns</h4>

            <div className="bd-example">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary">Dropdown</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#buttons-with-dropdowns/action">Action</Dropdown.Item>
                                <Dropdown.Item href="#buttons-with-dropdowns/action">Another action</Dropdown.Item>
                                <Dropdown.Item href="#buttons-with-dropdowns/action">Something else</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#buttons-with-dropdowns/action">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>

                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                    <div className="input-group-append">
                        <Dropdown>
                            <Dropdown.Toggle variant="outline-secondary">Dropdown</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                    '<div className="input-group mb-3">\n' +
                    '  <div className="input-group-prepend">\n' +
                    '    <button className="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>\n' +
                    '    <div className="dropdown-menu">\n' +
                    '      <a className="dropdown-item" href="#">Action</a>\n' +
                    '      <a className="dropdown-item" href="#">Another action</a>\n' +
                    '      <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '      <div role="separator" className="dropdown-divider"></div>\n' +
                    '      <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <input type="text" className="form-control" aria-label="Text input with dropdown button">\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="input-group">\n' +
                    '  <input type="text" className="form-control" aria-label="Text input with dropdown button">\n' +
                    '  <div className="input-group-append">\n' +
                    '    <button className="btn btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>\n' +
                    '    <div className="dropdown-menu">\n' +
                    '      <a className="dropdown-item" href="#">Action</a>\n' +
                    '      <a className="dropdown-item" href="#">Another action</a>\n' +
                    '      <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '      <div role="separator" className="dropdown-divider"></div>\n' +
                    '      <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />
        </div>
    );
};

export default ButtonsWithDropdowns;
