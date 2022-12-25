import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ModalComponents = () => {
    return (
        <div id="modal-components">
            <h5>Modal components</h5>
            <p>Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>

            <div className="bd-example bd-example-modal">
                <div className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="modal" tabIndex="-1" role="dialog">\n' +
                '  <div className="modal-dialog" role="document">\n' +
                '    <div className="modal-content">\n' +
                '      <div className="modal-header">\n' +
                '        <h5 className="modal-title">Modal title</h5>\n' +
                '        <button type="button" className="close" data-dismiss="modal" aria-label="Close">\n' +
                '          <span aria-hidden="true">×</span>\n' +
                '        </button>\n' +
                '      </div>\n' +
                '      <div className="modal-body">\n' +
                '        <p>Modal body text goes here.</p>\n' +
                '      </div>\n' +
                '      <div className="modal-footer">\n' +
                '        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
                '        <button type="button" className="btn btn-primary">Save changes</button>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ModalComponents;
