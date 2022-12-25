import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const CardStyle = () => {
    return (
        <div id="card-style">
            <h4>Card style</h4>
            <p>Cards include various options for customizing their backgrounds, borders, and color.</p>

            <div id="background-and-color">
                <h5>Background and color</h5>
                <p>Use <Link title="Colors" className="scroll-to-id" to="colors" spy={ true } smooth={ true } duration={ 0 } href="#colors">text and background utilities</Link> to change the appearance of a card.</p>

                <div className="bd-example">

                    <div className="card text-white bg-primary mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-secondary mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-success mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-danger mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Danger card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-warning mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Warning card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-info mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Info card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card bg-light mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card text-white bg-dark mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card text-white bg-primary mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Primary card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card text-white bg-secondary mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Secondary card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card text-white bg-success mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Success card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card text-white bg-danger mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Danger card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card text-white bg-warning mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Warning card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card text-white bg-info mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Info card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card bg-light mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Light card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card text-white bg-dark mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Dark card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>


            <div id="card-border">
                <h5>Border</h5>
                <p>Use <Link title="Borders" className="scroll-to-id" to="colors" spy={ true } smooth={ true } duration={ 0 } href="#colors">border utilities</Link> to change just the <code>border-color</code> of a card. Note that you can put <code>.text- color </code> classes on the parent <code>.card</code> or a subset of the card’s contents as shown below.</p>

                <div className="bd-example">

                    <div className="card border-primary mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body text-primary">
                            <h5 className="card-title">Primary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-secondary mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-success mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-danger mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body text-danger">
                            <h5 className="card-title">Danger card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-warning mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body text-warning">
                            <h5 className="card-title">Warning card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-info mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body text-info">
                            <h5 className="card-title">Info card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-light mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card border-dark mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header">Header</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Dark card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card border-primary mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body text-primary">\n' +
                    '    <h5 className="card-title">Primary card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card border-secondary mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body text-secondary">\n' +
                    '    <h5 className="card-title">Secondary card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card border-success mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body text-success">\n' +
                    '    <h5 className="card-title">Success card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card border-danger mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body text-danger">\n' +
                    '    <h5 className="card-title">Danger card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card border-warning mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body text-warning">\n' +
                    '    <h5 className="card-title">Warning card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card border-info mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body text-info">\n' +
                    '    <h5 className="card-title">Info card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card border-light mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Light card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card border-dark mb-3" style="max-width: 18rem;">\n' +
                    '  <div className="card-header">Header</div>\n' +
                    '  <div className="card-body text-dark">\n' +
                    '    <h5 className="card-title">Dark card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="card-mixins-utilities">
                <h5>Mixins utilities</h5>
                <p>You can also change the borders on the card header and footer as needed, and even remove their <code>background-color</code> with <code>.bg-transparent</code>.
                </p>

                <div className="bd-example">
                    <div className="card border-success mb-3" style={ { maxWidth: 18 + 'rem' } }>
                        <div className="card-header bg-transparent border-success">Header</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer bg-transparent border-success">Footer</div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card border-success mb-3" style="maxWidth: 18rem;">\n' +
                    '  <div className="card-header bg-transparent border-success">Header</div>\n' +
                    '  <div className="card-body text-success">\n' +
                    '    <h5 className="card-title">Success card title</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '  </div>\n' +
                    '  <div className="card-footer bg-transparent border-success">Footer</div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

        </div>
    );
};

export default CardStyle;
