import React, { Component } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Modal } from 'react-bootstrap';

class StaticBackdrop extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal: false,
        };

        this.open  = this.open.bind( this );
        this.close = this.close.bind( this );
    };

    open() {
        this.setState( { showModal: true }, function() {
        } );
    };

    close() {
        this.setState( { showModal: false } );
    };

    render() {
        return (
            <div id="static-backdrop">
                <h5>Static backdrop</h5>
                <p>When backdrop is set to static, the modal will not close when clicking outside it. Click the button below to try it.</p>

                <Modal id="staticBackdropLive" show={ this.state.showModal } onHide={ this.close } className="modal fade" backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true" style={ { display: 'none' } }>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLiveLabel">
                                Modal title
                            </h5>
                            <button onClick={ this.close } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>I will not close if you click outside me. Don't even try to press escape key.</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={ this.close } type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button onClick={ this.close } type="button" className="btn btn-primary">
                                Understood
                            </button>
                        </div>
                    </div>
                </Modal>

                <div className="bd-example">
                    <button onClick={ this.open } type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdropLive">
                        Launch static backdrop modal
                    </button>
                </div>

                <PrismCode
                    code={
                        '<div id="staticBackdropLive" className="modal fade" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLiveLabel" aria-hidden="true">\n' +
                        '  <div className="modal-dialog" role="document">\n' +
                        '    <div className="modal-content">\n' +
                        '      <div className="modal-header">\n' +
                        '        <h5 className="modal-title" id="staticBackdropLiveLabel">Modal title</h5>\n' +
                        '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                        '          <span aria-hidden="true">×</span>\n' +
                        '        </button>\n' +
                        '      </div>\n' +
                        '      <div className="modal-body">\n' +
                        "        <p>I will not close if you click outside me. Don't even try to press escape key.</p>\n" +
                        '      </div>\n' +
                        '      <div className="modal-footer">\n' +
                        '        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
                        '        <button type="button" className="btn btn-primary">Understood</button>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="bd-example">\n' +
                        '    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdropLive">\n' +
                        '        Launch static backdrop modal\n' +
                        '    </button>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={ ['line-numbers'] }
                />
            </div>
        );
    };
};

export default StaticBackdrop;
