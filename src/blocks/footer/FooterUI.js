import React from 'react';

const FooterUI = () => {
    return (
        <footer id="footer" className="site-footer">
            <div className="wrapper">
                <div className="footer">
                    <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
                        <div className="align-self-center">
                            <div className="logo logo-secondary">
                                <img src="assets/img/logo/logo-2-light.svg" alt="Logo" />
                            </div>
                        </div>

                        <div className="align-self-center">
                            <div className="copyright">
                                <p>© 2020 Logistics & Transportation React JS Template By <a href="https://www.adveits.com">Adveits</a></p>
                            </div>
                        </div>

                        <div className="align-self-center"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterUI;
