import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";

import HeaderLogo from "../../blocks/logo/HeaderLogo";
import ModalMenuHome from "../../blocks/menu/ModalMenuHome";
import { Link } from "react-router-dom";
import { TranslationContext } from "../../context/TranslationContext";

class MenuModal extends Component {
  static contextType = TranslationContext;
  constructor(context) {
    super(context);

    this.state = {
      showModal: false,
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
  }

  render() {
    function Menu(props) {
      return <ModalMenuHome onClick={props.onClick} />
    }

    return (
      <Fragment>
        <div className="menu-toggle align-self-center">
          <button
            onClick={this.open}
            type="button"
            className="btn btn-link border-0 p-0 min-w-auto transform-scale-h"
            data-toggle="modal"
            data-target="#menu-modal">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <Modal
          className="menu-modal fade"
          id="menu-modal"
          tabIndex="-1"
          show={this.state.showModal}
          onHide={this.close}
          backdrop={false}
          aria-labelledby="menu-modal"
          aria-hidden="true"
          dialogClassName="modal-full"
          ref={(node) => (this.chart = node)}>
          <div className="modal-dialog modal-full" role="document">
            <div className="wrapper">
              <div className="modal-content">
                <div className="modal-header modal-header-top">
                  <HeaderLogo logoColor="dark" />

                  <button
                    id="close-modal"
                    onClick={this.close}
                    type="button"
                    className="close btn btn-link border-0 min-w-auto transform-scale-h"
                    data-dismiss="modal"
                    aria-label="Close">
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                <div className="modal-body modal-body-centered">
                  <div className="animated fadeinleft">
                    <nav className="actions">
                      <ul className="list-unstyled">
                        <li>
                          <Link
                            onClick={this.close}
                            to="send-resume"
                            className="d-flex btn btn-link border-0 p-0 min-w-auto transform-scale-h icon-active">
                            <i className="fas fas-space-r fa-file-alt"></i>
                            {this.context?.translations?.sendResume}
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    <Menu onClick={this.close} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default MenuModal;
