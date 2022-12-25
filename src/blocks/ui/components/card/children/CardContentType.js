import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const CardContentType = () => {
    return (
        <div id="card-content-type">
            <h4>Content type</h4>
            <p>Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.</p>

            <h5>Body</h5>
            <p>The building block of a card is the <code>.card-body</code>. Use it whenever you need a padded section within a card.</p>

            <div className="bd-example">
                <div className="card">
                    <div className="card-body">
                        This is some text within a card body.
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card">\n' +
                '  <div className="card-body">\n' +
                '    This is some text within a card body.\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <h5>Titles, text, and links</h5>
            <p>Card titles are used by adding <code>.card-title</code> to a <code>&lt;h*&gt;</code> tag. In the same way, links are added and placed next to each other by adding <code>.card-link</code> to an <code>&lt;a&gt;</code> tag.</p>
            <p>Subtitles are used by adding a <code>.card-subtitle</code> to a <code>&lt;h*&gt;</code> tag. If the <code>.card-title</code> and the <code>.card-subtitle</code> items are placed in a <code>.card-body</code> item, the card title and subtitle are aligned nicely.</p>

            <div className="bd-example">
                <div className="card" style={ { "width": "18rem" } }>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#card-content-type/action" className="card-link">Card link</a>
                        <a href="#card-content-type/action" className="card-link">Another link</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card" style="width: 18rem;">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Card title</h5>\n' +
                '    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>\n' +
                '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                '    <a href="#" className="card-link">Card link</a>\n' +
                '    <a href="#" className="card-link">Another link</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <h5>Images</h5>
            <p><code>.card-img-top</code> places an image to the top of the card. With <code>.card-text</code>, text can be added to the card. Text within <code>.card-text</code> can also be styled with the standard HTML tags.</p>

            <div className="bd-example">
                <div className="card" style={ { maxWidth: 18 + 'rem' } }>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">Image cap</text>
                    </svg>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card" style="width: 18rem;">\n' +
                '  <img src="..." className="card-img-top" alt="...">\n' +
                '  <div className="card-body">\n' +
                '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <h5>List groups</h5>

            <div className="bd-example">
                <div className="card" style={ { maxWidth: 18 + 'rem' } }>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card" style="width: 18rem;">\n' +
                '  <ul className="list-group list-group-flush">\n' +
                '    <li className="list-group-item">Cras justo odio</li>\n' +
                '    <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '    <li className="list-group-item">Vestibulum at eros</li>\n' +
                '  </ul>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="card" style={ { maxWidth: 18 + 'rem' } }>
                    <div className="card-header">Featured</div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card" style="width: 18rem;">\n' +
                '  <div className="card-header">\n' +
                '    Featured\n' +
                '  </div>\n' +
                '  <ul className="list-group list-group-flush">\n' +
                '    <li className="list-group-item">Cras justo odio</li>\n' +
                '    <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '    <li className="list-group-item">Vestibulum at eros</li>\n' +
                '  </ul>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <h5>Kitchen sink</h5>
            <p>Mix and match multiple content types to create the card you need, or throw everything in there. Shown below are image styles, blocks, text styles, and a list group—all wrapped in a fixed-width card.</p>

            <div className="bd-example">
                <div className="card" style={ { maxWidth: 18 + 'rem' } }>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">Image cap</text>
                    </svg>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <a href="#card-content-type/action" className="card-link">Card link</a>
                        <a href="#card-content-type/action" className="card-link">Another link</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card" style="width: 18rem;">\n' +
                '  <img src="..." className="card-img-top" alt="...">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Card title</h5>\n' +
                '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                '  </div>\n' +
                '  <ul className="list-group list-group-flush">\n' +
                '    <li className="list-group-item">Cras justo odio</li>\n' +
                '    <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '    <li className="list-group-item">Vestibulum at eros</li>\n' +
                '  </ul>\n' +
                '  <div className="card-body">\n' +
                '    <a href="#" className="card-link">Card link</a>\n' +
                '    <a href="#" className="card-link">Another link</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <h5>Header and footer</h5>
            <p>Add an optional header and/or footer within a card.</p>

            <div className="bd-example">
                <div className="card">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-content-type/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card">\n' +
                '  <div className="card-header">\n' +
                '    Featured\n' +
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

            <p>Card headers can be styled by adding <code>.card-header</code> to elements.</p>

            <div className="bd-example">
                <div className="card">
                    <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-content-type/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card">\n' +
                '  <h5 className="card-header">Featured</h5>\n' +
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
                <div className="card">
                    <div className="card-header">
                        Quote
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card">\n' +
                '  <div className="card-header">\n' +
                '    Quote\n' +
                '  </div>\n' +
                '  <div className="card-body">\n' +
                '    <blockquote className="blockquote mb-0">\n' +
                '      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                '      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>\n' +
                '      </footer>\n' +
                '    </blockquote>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="card text-center">
                    <div className="card-header">
                        Featured
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#card-content-type/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="card text-center">\n' +
                '  <div className="card-header">\n' +
                '    Featured\n' +
                '  </div>\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Special title treatment</h5>\n' +
                '    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '  </div>\n' +
                '  <div className="card-footer text-muted">\n' +
                '    2 days ago\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default CardContentType;
