import React, { Component } from 'react';

class ButtonRadioActive extends Component {
    constructor() {
        super();
        this.state         = {
            selectedOption: 'option1',
        };
        this.onChangeValue = this.onChangeValue.bind( this );
    }

    onChangeValue( event ) {
        this.setState( {
            selectedOption: event.target.id,
        } );
    }

    render() {
        return (
            <div className="bd-example" onChange={ this.onChangeValue }>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className={ `btn btn-primary ${ this.state.selectedOption === 'option1' ? 'active' : '' }` }>
                        <input type="radio" name="options" id="option1" />
                        Active
                    </label>
                    <label className={ `btn btn-primary ${ this.state.selectedOption === 'option2' ? 'active' : '' }` }>
                        <input type="radio" name="options" id="option2" />
                        Radio
                    </label>
                    <label className={ `btn btn-primary ${ this.state.selectedOption === 'option3' ? 'active' : '' }` }>
                        <input type="radio" name="options" id="option3" />
                        Radio
                    </label>
                </div>
            </div>
        );
    }
}

export default ButtonRadioActive;
