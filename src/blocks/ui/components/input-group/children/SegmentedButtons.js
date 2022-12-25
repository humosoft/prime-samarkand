import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Button, Dropdown } from 'react-bootstrap';

const SegmentedButtons = () => {
    return (
        <div id="segmented-buttons">
            <h4>Segmented buttons</h4>

            <div className="bd-example">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <Dropdown>
                            <Button variant="outline-secondary">Action</Button>

                            <Dropdown.Toggle split variant="outline-secondary" id="dropdown-segmented-buttons" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#segmented-buttons/action">Action</Dropdown.Item>
                                <Dropdown.Item href="#segmented-buttons/action">Another action</Dropdown.Item>
                                <Dropdown.Item href="#segmented-buttons/action">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#segmented-buttons/action">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                </div>

                <div className="input-group">
                    <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                    <div className="input-group-append">
                        <Dropdown>
                            <Button variant="outline-secondary">Action</Button>

                            <Dropdown.Toggle split variant="outline-secondary" id="dropdown-segmented-buttons" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
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
                    '    <button type="button" className="btn btn-outline-primary">Action</button>\n' +
                    '    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                    '      <span className="sr-only">Toggle Dropdown</span>\n' +
                    '     </button>\n' +
                    '     <div className="dropdown-menu">\n' +
                    '       <a className="dropdown-item" href="#">Action</a>\n' +
                    '       <a className="dropdown-item" href="#">Another action</a>\n' +
                    '       <a className="dropdown-item" href="#">Something else here</a>\n' +
                    '       <div role="separator" className="dropdown-divider"></div>\n' +
                    '       <a className="dropdown-item" href="#">Separated link</a>\n' +
                    '     </div>\n' +
                    '   </div>\n' +
                    '   <input type="text" className="form-control" aria-label="Text input with segmented dropdown button">\n' +
                    '</div>\n' +
                    '\n' +
                    '<div className="input-group">\n' +
                    '  <input type="text" className="form-control" aria-label="Text input with segmented dropdown button">\n' +
                    '  <div className="input-group-append">\n' +
                    '    <button type="button" className="btn btn-outline-primary">Action</button>\n' +
                    '    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                    '      <span className="sr-only">Toggle Dropdown</span>\n' +
                    '    </button>\n' +
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

export default SegmentedButtons;
