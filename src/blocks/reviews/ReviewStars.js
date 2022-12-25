import React, { Component } from 'react';

class ReviewStars extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            starsNum: 0,
        }
    };

    componentDidMount( props ) {
        this.setState( { starsNum: this.props.num } )
    };

    countStars() {
        let n     = this.state.starsNum;
        let stars = [];

        for ( let i = 0; i < n; i++ ) {
            stars.push(
                <i key={ i } className="fas fa-star i-small-xs"></i> );
        }

        return stars;
    };

    render() {
        return <div>{ this.countStars() }</div>
    };
};

export default ReviewStars;
