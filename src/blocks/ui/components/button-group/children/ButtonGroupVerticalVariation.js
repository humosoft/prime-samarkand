import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { ButtonGroup, Dropdown } from 'react-bootstrap';

const ButtonGroupVerticalVariation = () => {
    return (
        <div id="button-group-vertical-variation">
            <h4>Vertical variation</h4>
            <p>Make a set of buttons appear vertically stacked rather than horizontally. <strong>Split button dropdowns are not supported here.</strong></p>

            <div className="bd-example">
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>
                </div>
            </div>

            <div className="bd-example">
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>

                    <Dropdown as={ ButtonGroup }>
                        <Dropdown.Toggle className="btn btn-primary dropdown-toggle" id="btnGroupVerticalDrop1">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Dropdown link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <button type="button" className="btn btn-primary">Button</button>
                    <button type="button" className="btn btn-primary">Button</button>

                    <Dropdown as={ ButtonGroup }>
                        <Dropdown.Toggle className="btn btn-primary dropdown-toggle" id="btnGroupVerticalDrop2">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Dropdown link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={ ButtonGroup }>
                        <Dropdown.Toggle className="btn btn-primary dropdown-toggle" id="btnGroupVerticalDrop3">
                            Dropdown
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Dropdown link</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Dropdown link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as={ ButtonGroup }>
                        <Dropdown.Toggle className="btn btn-primary dropdown-toggle" id="btnGroupVerticalDrop4">
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
                '<div className="btn-group-vertical">\n' +
                '  ...\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ButtonGroupVerticalVariation;
