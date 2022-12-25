import React from 'react';

import FooterMenu from '../footer/FooterMenu';

const FooterWidget = () => {
    return (
      <div className="footer-widgets">
          <div className="footer-widget-area d-flex flex-wrap">
              <div className="widget">
                  <h5 className="widget-title">About us</h5>

                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
              </div>

              <div className="widget">
                  <h5 className="widget-title">Menu</h5>

                  <FooterMenu />
              </div>

              <div className="widget">
                  <h5 className="widget-title">Contacts</h5>

                  <p>Texas, Houston, 136 Woodrow Way</p>

                  <p><a href="mailto:info@domain.com">info@domain.com</a></p>

                  <p>832-576-5370</p>
              </div>
          </div>
      </div>
    );
};

export default FooterWidget;
