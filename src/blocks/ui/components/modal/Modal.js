import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import ModalCustom from './children/ModalCustom';
import ModalComponents from './children/ModalComponents';
import LiveDemo from './children/LiveDemo';
import StaticBackdrop from './children/StaticBackdrop';
import ScrollingLongContent from './children/ScrollingLongContent';
import VerticallyCentered from './children/VerticallyCentered';
import OptionalSize from './children/OptionalSize';

const MenuModal = () => {
    return (
        <div id="modal" className="spacer m-top-xl">
            <h3>Modal</h3>
            <p>Use JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>

            <div id="modal-examples">
                <h4>Examples</h4>

                <ModalComponents />

                <LiveDemo />

                <StaticBackdrop />

                <ScrollingLongContent />

                <VerticallyCentered />

                <OptionalSize />
            </div>

            <ModalCustom />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/modal/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
}

export default MenuModal;
