import React from 'react';
import HeaderLogo from '../../blocks/logo/HeaderLogo';

const HeaderUI = ({ logoColor }) => {
    return (
        <header id="header" className="site-header">
            <div className="wrapper d-flex justify-content-between">
                <div className="header-left align-self-center">
                    <HeaderLogo logoColor={ logoColor } />
                </div>
            </div>
        </header>
    );
};

export default HeaderUI;
