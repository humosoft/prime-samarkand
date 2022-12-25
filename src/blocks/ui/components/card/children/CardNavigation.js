import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const CardNavigation = () => {
    return (
        <div id="card-navigation">
            <h4>Navigation</h4>
            <p>Add some navigation to a card’s header (or block) with <Link title="Navs" className="scroll-to-id" to="navs" spy={ true } smooth={ true } duration={ 0 } href="#navs">nav components</Link> .</p>

            <div className="bd-example">
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#card-navigation/action">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#card-navigation/action">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#card-navigation/action" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-navigation/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="card text-center">\n' +
                '  <div className="card-header">\n' +
                '    <ul className="nav nav-tabs card-header-tabs">\n' +
                '      <li className="nav-item">\n' +
                '        <a className="nav-link active" href="#">Active</a>\n' +
                '      </li>\n' +
                '      <li className="nav-item">\n' +
                '        <a className="nav-link" href="#">Link</a>\n' +
                '      </li>\n' +
                '      <li className="nav-item">\n' +
                '        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                '      </li>\n' +
                '    </ul>\n' +
                '  </div>\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Special title treatment</h5>\n' +
                '    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="card text-center">
                    <div className="card-header">
                        <ul className="nav nav-pills card-header-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#card-navigation/action">Active</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#card-navigation/action">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#card-navigation/action" tabIndex="-1"
                                   aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-navigation/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="card text-center">\n' +
                '  <div className="card-header">\n' +
                '    <ul className="nav nav-pills card-header-pills">\n' +
                '      <li className="nav-item">\n' +
                '        <a className="nav-link active" href="#">Active</a>\n' +
                '      </li>\n' +
                '      <li className="nav-item">\n' +
                '        <a className="nav-link" href="#">Link</a>\n' +
                '      </li>\n' +
                '      <li className="nav-item">\n' +
                '        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                '      </li>\n' +
                '    </ul>\n' +
                '  </div>\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Special title treatment</h5>\n' +
                '    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default CardNavigation;
