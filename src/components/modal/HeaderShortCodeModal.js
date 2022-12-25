import React, { Component, Fragment } from 'react';
import { Modal } from 'react-bootstrap';

import ShortCodeModalForm from '../form/ShortCodeModalForm';

class HeaderShortCodeModal extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false,
        };

        this.open = this.open.bind( this );
        this.close = this.close.bind( this );
    };

    open() {
        this.setState( { showModal: true } );
    };

    close() {
        this.setState( { showModal: false } );
    };

    render() {
        return (
            <Fragment>
                <a onClick={ this.open } className="d-flex btn btn-link border-0 p-0 min-w-auto transform-scale-h icon-active" href="#header" data-toggle="modal" data-target="#shortcode-modal">
                    <i className="fas fas-space-r fa-file-alt"></i>
                    <span className="bold">Request a quote</span>
                </a>

                <Modal className="shortcode-modal in"
                       id="shortcode-modal"
                       tabIndex="-1"
                       show={ this.state.showModal }
                       onHide={ this.close }
                       backdrop={ false }
                       aria-labelledby="shortcode-modal"
                       aria-hidden="true"
                       aria-modal="true"
                       dialogClassName="modal-full"
                       ref={ ( node ) => ( this.chart = node ) }
                >
                    <div className="modal-dialog modal-full" role="document">
                        <div className="wrapper">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button onClick={ this.close } type="button" className="close btn btn-link border-0 min-w-auto transform-scale-h" data-dismiss="modal" aria-label="Close">
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="modal-lg m-auto">
                                        <div className="title spacer m-bottom-lg">
                                            <h5 className="text-secondary">Get a quote</h5>
                                        </div>

                                        <ShortCodeModalForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

            </Fragment>
        );
    };
};

export default HeaderShortCodeModal;
