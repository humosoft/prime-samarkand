import React from 'react';

import dataFooterMenuSecondary from '../../data/footer/footerMenuSecondary.json';

const FooterMenuSecondary = () => {
    return (
        <nav className="menu-secondary">
            <ul className="nav list-unstyled">
                { dataFooterMenuSecondary.map( ( item, key ) => {
                    return (
                        <li key={ key } className="nav-item">
                            <a title={ item.title } href={ item.link }><i className={ item.icon }></i></a>
                        </li>
                    );
                } ) }
            </ul>
        </nav>
    );
};

export default FooterMenuSecondary;
