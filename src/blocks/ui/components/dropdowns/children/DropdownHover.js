import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import Fade from '@material-ui/core/Fade';

class DropdownHover extends Component {
    constructor() {
        super();

        this.state = {
            show: false,
        };
    }

    render() {
        return (
            <Dropdown show={ this.state.show } onMouseLeave={ (e) => this.setState({ show: false }) }>
                <Dropdown.Toggle variant="secondary" id="dropdown-hover" onMouseEnter={ (e) => this.setState({ show: true }) }>
                    Hover
                </Dropdown.Toggle>

                <Fade in={ this.state.show } timeout={ 600 }>
                    <Dropdown.Menu onMouseLeave={ (e) => this.close({ show: false }) }>
                        <Dropdown.Item href="#dropdowns-open-variations/action">Action</Dropdown.Item>
                        <Dropdown.Item href="#dropdowns-open-variations/action">Another action</Dropdown.Item>
                        <Dropdown.Item href="#dropdowns-open-variations/action">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Fade>
            </Dropdown>
        );
    };
};

export default DropdownHover;
