import React, { Component } from 'react';
import axios from 'axios';

import PostComment from '../button/PostComment';

class CommentForm extends Component {
    constructor( props ) {
        super( props );

        this.state             = {
            values: {
                name: '',
                email: '',
                website: '',
                comment: '',
                saveEmail: false
            },
            successMessage: "Sender's message was sent successfully",
            warningMessage: 'Fill up the form, please!',
            errorMessage: 'Something go wrong. Try again later!',
            alertClass: '',
            responseMessage: '',
            alertTimeout: '',
            delay: 5000
        };

        this.handleInputChange = this.handleInputChange.bind( this );
    }

    submitForm = async ( e ) => {
        e.preventDefault();

        if ( document.querySelector( '#alert' ) ) {
            document.querySelector( '#alert' ).remove();
        }

        this.setState( { isSubmitting: true } );

        axios.post( 'https://store.adveits.com/API/form.php', this.state.values, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8',
            },
        } ).then( ( response ) => {
            if ( response.data.status === 'success' ) {
                this.setState( { responseMessage: this.state.successMessage } );
            }

            if ( response.data.status === 'warning' ) {
                this.setState( { responseMessage: this.state.warningMessage } );
            }

            if ( response.data.status === 'error' ) {
                this.setState( { responseMessage: this.state.errorMessage } );
            }

            this.callAlert( this.state.responseMessage, response.data.status );
        } ).catch( ( error ) => {
            this.callAlert( this.state.errorMessage, 'error' );
        } );
    };

    removeAlert = () => {
        clearTimeout( this.state.alertTimeout );

        this.setState( {
            alertTimeout: setTimeout( function() {
                var element = document.querySelector( '#alert' );
                element.classList.remove( 'fadeIn' );
                element.classList.add( 'fadeOut' );

                setTimeout( function() {
                    element.remove();
                }, 900 );
            }, this.state.delay ),
        } );
    };

    callAlert = ( message, type ) => {
        if ( ! document.querySelector( '#alert' ) ) {
            if ( type === 'success' ) {
                this.setState( { alertClass: 'success' } );
            }

            if ( type === 'error' ) {
                this.setState( { alertClass: 'danger' } );
            }

            if ( type === 'warning' ) {
                this.setState( { alertClass: 'warning' } );
            }

            var alert = '<div id="alert" class="animated fadeIn alert alert--shadow alert-' + this.state.alertClass + '">' + message + '</div>';

            var element = document.querySelector( '#commentform' );

            element.insertAdjacentHTML( 'beforeend', alert );

            this.removeAlert();
        }
    };

    handleInputChange = ( e ) => {
        this.setState( {
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
                saveEmail: true
            }
        } );
    };

    render() {
        return (
            <form onSubmit={ this.submitForm } action="form.php" method="post" id="commentform" className="comment-form">
                <div className="form-group">
                    <p className="comment-notes p-small">Your email address will not be published. Required fields are marked <span className="required">*</span></p>
                </div>

                <div className="form-group">
                    <p className="input-group gutter-width-45 no-space">
                        <span className="gutter-width">
                            <label className="after" htmlFor="comment-author">Name *</label>
                            <input id="comment-author" className="form-lg" value={ this.state.values.name } onChange={ this.handleInputChange } name="name" type="text" size="30" maxLength="245" required="required" placeholder="Lucas Reynolds" />
                        </span>

                        <span className="gutter-width">
                            <label className="after" htmlFor="comment-email">Email *</label>
                            <input id="comment-email" className="form-lg" value={ this.state.values.email } onChange={ this.handleInputChange } name="email" type="email" size="30" maxLength="100" required="required" placeholder="info@domain.com" />
                        </span>
                    </p>
                </div>

                <div className="form-group">
                    <p className="comment-form-url no-space">
                        <label className="after" htmlFor="comment-url">Website</label>
                        <input id="comment-url" className="form-lg" value={ this.state.values.website } onChange={ this.handleInputChange } name="website" type="url" size="30" maxLength="200" placeholder="www.domain.com" />
                    </p>
                </div>

                <div className="form-group">
                    <p className="comment-form-comment no-space">
                        <label className="after" htmlFor="comment">Comment *</label>
                        <textarea id="comment" className="form-lg" value={ this.state.values.comment } onChange={ this.handleInputChange } name="comment" cols="45" rows="8" maxLength="65525" required="required" placeholder="Type your comment here..."></textarea>
                    </p>
                </div>

                <div className="form-group">
                    <p className="comment-form-cookies-consent custom-control custom-checkbox">
                        <input checked={ this.state.values.saveEmail } onChange={ this.handleInputChange } id="wp-comment-cookies-consent" className="custom-control-input" name="wp-comment-cookies-consent" type="checkbox" value="yes" />

                        <label className="custom-control-label" htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                </div>

                <PostComment />
            </form>
        )
    };
};

export default CommentForm;
