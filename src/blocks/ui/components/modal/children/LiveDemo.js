import React, { Component } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Modal } from 'react-bootstrap';

class LiveDemo extends Component {
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
            <div id="live-demo">
                <h5>Live demo</h5>
                <p>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.</p>

                <Modal
                    id="exampleModalLive"
                    show={ this.state.showModal }
                    onHide={ this.close }
                    backdrop={ true }
                    className="modal fade"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLiveLabel"
                    style={ { display: 'none' } }
                    aria-hidden="true"
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLiveLabel">
                                Modal title
                            </h5>
                            <button onClick={ this.close } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Woohoo, you're reading this text in a modal!</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={ this.close } type="button" className="btn btn-secondary" data-dismiss="modal">
                                Close
                            </button>
                            <button onClick={ this.close } type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </Modal>

                <div className="bd-example">
                    <button
                        onClick={ this.open.bind( this ) }
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModalLive"
                    >
                        Launch demo modal
                    </button>
                </div>

                <PrismCode
                    code={
                        '<div id="exampleModalLive" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">\n' +
                        '  <div className="modal-dialog" role="document">\n' +
                        '    <div className="modal-content">\n' +
                        '      <div className="modal-header">\n' +
                        '        <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>\n' +
                        '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                        '          <span aria-hidden="true">×</span>\n' +
                        '        </button>\n' +
                        '      </div>\n' +
                        '      <div className="modal-body">\n' +
                        "        <p>Woohoo, you're reading this text in a modal!</p>\n" +
                        '      </div>\n' +
                        '      <div className="modal-footer">\n' +
                        '        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
                        '        <button type="button" className="btn btn-primary">Save changes</button>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="bd-example">\n' +
                        '  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">\n' +
                        '    Launch demo modal\n' +
                        '  </button>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={ ['line-numbers'] }
                />
            </div>
        );
    };
};

export default LiveDemo;
