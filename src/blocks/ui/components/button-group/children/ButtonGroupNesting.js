import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

const ButtonGroupNesting = () => {
    return (
        <div id="button-group-nesting">
            <h4>Nesting</h4>
            <p>Place a <code>.btn-group</code> within another <code>.btn-group</code> when you want dropdown menus mixed with a series of buttons.</p>

            <div className="bd-example">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-primary">1</button>
                    <button type="button" className="btn btn-primary">2</button>

                    <Dropdown as={ ButtonGroup }>
                        <Dropdown.Toggle className="btn btn-primary dropdown-toggle" id="btnGroupDrop1">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Dropdown link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="btn-group" role="group" aria-label="Button group with nested dropdown">\n' +
                '  <button type="button" className="btn btn-primary">1</button>\n' +
                '  <button type="button" className="btn btn-primary">2</button>\n' +
                '\n' +
                '  <div className="btn-group" role="group">\n' +
                '    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                '      Dropdown\n' +
                '    </button>\n' +
                '    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">\n' +
                '      <a className="dropdown-item" href="#">Dropdown link</a>\n' +
                '      <a className="dropdown-item" href="#">Dropdown link</a>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ButtonGroupNesting;
