import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const CardSizing = () => {
    return (
        <div id="card-sizing">
            <h4>Sizing</h4>
            <p>Cards assume no specific <code>width</code> to start, so they’ll be 100% wide unless otherwise stated. You can change this as needed with custom CSS, grid classes, grid Sass mixins, or utilities.</p>

            <h5>Using grid markup</h5>
            <p>Using the grid, wrap cards in columns and rows as needed.</p>

            <div className="bd-example">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#card-sizing/action" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#card-sizing/action" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="row">\n' +
                '  <div className="col-sm-6">\n' +
                '    <div className="card">\n' +
                '      <div className="card-body">\n' +
                '        <h5 className="card-title">Special title treatment</h5>\n' +
                '        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '        <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '  <div className="col-sm-6">\n' +
                '    <div className="card">\n' +
                '      <div className="card-body">\n' +
                '        <h5 className="card-title">Special title treatment</h5>\n' +
                '        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '        <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <h5>Using utilities</h5>
            <p>Use our handful of <Link title="Sizing" className="scroll-to-id" to="sizing" spy={ true } smooth={ true } duration={ 0 } href="#sizing">available sizing utilities</Link> to quickly set a card’s width.</p>

            <div className="bd-example">
                <div className="card w-75">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-sizing/action" className="btn btn-primary">Button</a>
                    </div>
                </div>

                <div className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-sizing/action" className="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="card w-75">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Card title</h5>\n' +
                '    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Button</a>\n' +
                '  </div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="card w-50">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Card title</h5>\n' +
                '    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Button</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />


            <h5>Using custom CSS</h5>
            <p>Use custom CSS in your stylesheets or as inline styles to set a width.</p>

            <div className="bd-example">
                <div className="card" style={ { maxWidth: 18 + 'rem' } }>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-sizing/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="card" style="width: 18rem;">\n' +
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

            <h5>Text alignment</h5>
            <p>You can quickly change the text alignment of any card—in its entirety or specific parts—with our <Link title="Text align" className="scroll-to-id" to="text-alignment" spy={ true } smooth={ true } duration={ 0 } href="#text-alignment">text align classes</Link>.</p>

            <div className="bd-example">
                <div className="card" style={ { maxWidth: 18 + 'rem' } }>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-sizing/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card text-center" style={ { maxWidth: 18 + 'rem' } }>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-sizing/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card text-right" style={ { maxWidth: 18 + 'rem' } }>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-sizing/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="card" style="width: 18rem;">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Special title treatment</h5>\n' +
                '    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="card text-center" style="width: 18rem;">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Special title treatment</h5>\n' +
                '    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="card text-right" style="width: 18rem;">\n' +
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

export default CardSizing;
