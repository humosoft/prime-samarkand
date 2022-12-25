import React, { Component } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Modal } from 'react-bootstrap';

class OptionalSize extends Component {
    constructor( context ) {
        super( context );

        this.state = {
            showModal0: false,
            showModal1: false,
            showModal2: false,
            showModal3: false,
        };

        this.open0  = this.open0.bind( this );
        this.open1  = this.open1.bind( this );
        this.open2  = this.open2.bind( this );
        this.open3  = this.open3.bind( this );
        this.close0 = this.close0.bind( this );
        this.close1 = this.close1.bind( this );
        this.close2 = this.close2.bind( this );
        this.close3 = this.close3.bind( this );
    };

    open0() {
        this.setState( { showModal0: true }, function() {
        } );
    };

    open1() {
        this.setState( { showModal1: true }, function() {
        } );
    };

    open2() {
        this.setState( { showModal2: true }, function() {
        } );
    };

    open3() {
        this.setState( { showModal3: true }, function() {
        } );
    };

    close0() {
        this.setState( { showModal0: false } );
    };

    close1() {
        this.setState( { showModal1: false } );
    };

    close2() {
        this.setState( { showModal2: false } );
    };

    close3() {
        this.setState( { showModal3: false } );
    };

    render() {
        return (
            <div id="optional-size">
                <h5>Optional size</h5>
                <p>Modals have three optional sizes, available via modifier classes to be placed on a <code>.modal-dialog</code>. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>

                <div className="bd-example">
                    <button onClick={ this.open0.bind( this ) } type="button" className="btn btn-primary mr-1" data-toggle="modal" data-target=".bd-example-modal-full">
                        Full modal
                    </button>
                    <button onClick={ this.open1.bind( this ) } type="button" className="btn btn-primary mr-1" data-toggle="modal" data-target=".bd-example-modal-xl">
                        Extra large modal
                    </button>
                    <button onClick={ this.open2.bind( this ) } type="button" className="btn btn-primary mr-1" data-toggle="modal" data-target=".bd-example-modal-lg">
                        Large modal
                    </button>
                    <button onClick={ this.open3.bind( this ) } type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">
                        Small modal
                    </button>
                </div>

                <Modal className="modal fade bd-example-modal-full" show={ this.state.showModal0 } onHide={ this.close0 } dialogClassName="modal-full" tabIndex="-1" role="dialog" aria-labelledby="myFullModalLabel" aria-hidden="true" style={ { display: 'none' } }>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myFullModalLabel">
                                Full modal
                            </h5>
                            <button onClick={ this.close0 } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">...</div>
                    </div>
                </Modal>

                <Modal className="modal fade bd-example-modal-xl" show={ this.state.showModal1 } onHide={ this.close1 } dialogClassName="modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true" style={ { display: 'none' } }>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myExtraLargeModalLabel">
                                Extra large modal
                            </h5>
                            <button onClick={ this.close1 } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">...</div>
                    </div>
                </Modal>

                <Modal className="modal fade bd-example-modal-lg" dialogClassName="modal-lg" show={ this.state.showModal2 } onHide={ this.close2 } tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={ { display: 'none' } }>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myLargeModalLabel">
                                Large modal
                            </h5>
                            <button onClick={ this.close2 } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">...</div>
                    </div>
                </Modal>

                <Modal dialogClassName="modal-sm" show={ this.state.showModal3 } onHide={ this.close3 } className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="mySmallModalLabel">
                                Small modal
                            </h5>
                            <button onClick={ this.close3 } type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">...</div>
                    </div>
                </Modal>

                <PrismCode
                    code={
                        '<div className="bd-example">\n' +
                        '  <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-full">Full modal</button>\n' +
                        '  <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Extra large modal</button>\n' +
                        '  <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>\n' +
                        '  <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="modal fade bd-example-modal-full" tabIndex="-1" role="dialog" aria-labelledby="myFullModalLabel" aria-hidden="true">\n' +
                        '  <div className="modal-dialog modal-full" role="document">\n' +
                        '    <div className="modal-content">\n' +
                        '      <div className="modal-header">\n' +
                        '        <h5 className="modal-title" id="myFullModalLabel">Full modal</h5>\n' +
                        '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                        '          <span aria-hidden="true">×</span>\n' +
                        '        </button>\n' +
                        '      </div>\n' +
                        '      <div className="modal-body">\n' +
                        '        ...\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">\n' +
                        '  <div className="modal-dialog modal-xl" role="document">\n' +
                        '    <div className="modal-content">\n' +
                        '\n' +
                        '      <div className="modal-header">\n' +
                        '        <h5 className="modal-title" id="myExtraLargeModalLabel">Extra large modal</h5>\n' +
                        '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                        '          <span aria-hidden="true">×</span>\n' +
                        '        </button>\n' +
                        '      </div>\n' +
                        '      <div className="modal-body">\n' +
                        '        ...\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">\n' +
                        '  <div className="modal-dialog modal-lg" role="document">\n' +
                        '    <div className="modal-content">\n' +
                        '\n' +
                        '      <div className="modal-header">\n' +
                        '        <h5 className="modal-title" id="myLargeModalLabel">Large modal</h5>\n' +
                        '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                        '          <span aria-hidden="true">×</span>\n' +
                        '        </button>\n' +
                        '      </div>\n' +
                        '      <div className="modal-body">\n' +
                        '        ...\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>\n' +
                        '\n' +
                        '<div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">\n' +
                        '  <div className="modal-dialog modal-sm" role="document">\n' +
                        '    <div className="modal-content">\n' +
                        '      <div className="modal-header">\n' +
                        '        <h5 className="modal-title" id="mySmallModalLabel">Small modal</h5>\n' +
                        '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                        '          <span aria-hidden="true">×</span>\n' +
                        '        </button>\n' +
                        '      </div>\n' +
                        '      <div className="modal-body">\n' +
                        '        ...\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={ ['line-numbers'] }
                />
            </div>
        );
    };
};

export default OptionalSize;
