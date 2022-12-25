import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';

class SearchModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false,
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    }

    open() {
        this.setState( { showModal: true }, function() {
        } );
    }

    close() {
        this.setState( { showModal: false } );
    }

    render() {
        return (
            <Fragment>
                <button onClick={ this.open } type="button" className="btn btn-link border-0 p-0 min-w-auto transform-scale-h" data-toggle="modal" data-target="#search-modal">
                    <i className="fas fa-search"></i>
                </button>

                <Modal className="search-modal"
                       id="search-modal"
                       tabIndex="-1"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="search-modal"
                       aria-hidden="true"
                       aria-modal="true"
                       dialogClassName="modal-full"
                       ref={ ( node ) => ( this.chart = node ) }
                >
                    <div className="modal-dialog modal-full" role="document">
                        <div className="wrapper">
                            <div className="modal-content">
                                <div className="modal-header modal-header-top">
                                    <button onClick={ this.close } type="button" className="close btn btn-link border-0 min-w-auto transform-scale-h" data-dismiss="modal" aria-label="Close">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>

                                <div className="modal-body modal-body-centered">
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </Fragment>
        );
    };
};

export default SearchModal;