import React, { Component } from 'react';

import FooterMenuSecondary from './FooterMenuSecondary';
import Copyright from './Copyright';
import LanguageSelector from '../../components/button/LanguageSelector';

class FooterSecondary extends Component {
    constructor() {
        super();
        this.state         = {
            lang: 'En'
        };

        this.onChangeValue = this.onChangeValue.bind( this );
    };

    onChangeValue( event ) {
        this.setState( {
            lang: event.target.title,
        } );
    };

    render() {
        return (
            <footer id="footer" className="site-footer">
                <div className="wrapper">
                    <div className="footer">
                        <div className="d-flex flex-column flex-lg-row flex-xl-row justify-content-between">
                            <div className="align-self-center">
                                <FooterMenuSecondary />
                            </div>

                            <div className="align-self-center">
                                <Copyright />
                            </div>

                            <div className="align-self-center">
                                <nav className="languages">
                                    <ul className="nav" onClick={ this.onChangeValue }>
                                        <LanguageSelector title="En" className={ this.state.lang === 'En' ? 'current-lang' : '' } />
                                        <LanguageSelector title="Ru" className={ this.state.lang === 'Ru' ? 'current-lang' : '' } />
                                        <LanguageSelector title="Lt" className={ this.state.lang === 'Lt' ? 'current-lang' : '' } />
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
};

export default FooterSecondary;
