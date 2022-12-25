import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const CardLayout = () => {
    return (
        <div id="card-layout">
            <h4>Card layout</h4>
            <p>In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, <strong>these layout options are not yet responsive</strong>.</p>

            <div id="card-groups">
                <h5>Card groups</h5>
                <p>Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use <code>display: flex;</code> to achieve their uniform sizing.</p>

                <div className="bd-example">
                    <div className="card-group">
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card-group">\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '      <p className="card-text">\n' +
                    '        <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '      </p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
                    '      <p className="card-text">\n' +
                    '        <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '      </p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>When using card groups with footers, their content will automatically line up.</p>

                <div className="bd-example">
                    <div className="card-group">
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card-group">\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '    </div>\n' +
                    '    <div className="card-footer">\n' +
                    '      <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
                    '    </div>\n' +
                    '    <div className="card-footer">\n' +
                    '      <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

            </div>

            <div id="card-decks">
                <h5>Card decks</h5>
                <p>Need a set of equal width and height cards that aren’t attached to one another? Use card decks.</p>

                <div className="bd-example">
                    <div className="card-deck">
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card-deck">\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
                    '      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>Just like with card groups, card footers in decks will automatically line up.</p>

                <div className="bd-example">
                    <div className="card-deck">
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card-deck">\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '    </div>\n' +
                    '    <div className="card-footer">\n' +
                    '      <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
                    '    </div>\n' +
                    '    <div className="card-footer">\n' +
                    '      <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="grid-cards">
                <h5>Grid cards</h5>
                <p>Use the Bootstrap grid system and its <code>.row-cols</code> classes to control how many grid columns (wrapped around your cards) you show per row. For example, here’s <code>.row-cols-1</code> laying out the cards on one column, and <code>.row-cols-md-2</code> splitting four cards to equal width across multiple rows, from the medium breakpoint up.</p>

                <div className="bd-example">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mb-4">
                            <div className="card">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="row row-cols-1 row-cols-md-2">\n' +
                    '  <div className="col mb-4">\n' +
                    '    <div className="card">\n' +
                    '      <img src="..." className="card-img-top" alt="...">\n' +
                    '      <div className="card-body">\n' +
                    '        <h5 className="card-title">Card title</h5>\n' +
                    '        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="col mb-4">\n' +
                    '    <div className="card">\n' +
                    '      <img src="..." className="card-img-top" alt="...">\n' +
                    '      <div className="card-body">\n' +
                    '        <h5 className="card-title">Card title</h5>\n' +
                    '        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>Change it to <code>.row-cols-3</code> and you’ll see the fourth card wrap.</p>

                <div className="bd-example">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PrismCode
                    code={ '<div className="row row-cols-1 row-cols-md-3">\n' +
                    '  <div className="col mb-4">\n' +
                    '    <div className="card">\n' +
                    '      <img src="..." className="card-img-top" alt="...">\n' +
                    '      <div className="card-body">\n' +
                    '        <h5 className="card-title">Card title</h5>\n' +
                    '        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="col mb-4">\n' +
                    '    <div className="card">\n' +
                    '      <img src="..." className="card-img-top" alt="...">\n' +
                    '      <div className="card-body">\n' +
                    '        <h5 className="card-title">Card title</h5>\n' +
                    '        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>When you need equal height, add <code>.h-100</code> to the cards. If you want equal heights by default, you can set <code>$card-height: 100%</code> in Sass.</p>

                <div className="bd-example">
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card h-100">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Image cap</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card h-100">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                </svg>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a short card.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="row row-cols-1 row-cols-md-3">\n' +
                    '  <div className="col mb-4">\n' +
                    '    <div className="card h-100">\n' +
                    '      <img src="..." className="card-img-top" alt="...">\n' +
                    '      <div className="card-body">\n' +
                    '        <h5 className="card-title">Card title</h5>\n' +
                    '        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="col mb-4">\n' +
                    '    <div className="card h-100">\n' +
                    '      <img src="..." className="card-img-top" alt="...">\n' +
                    '      <div className="card-body">\n' +
                    '        <h5 className="card-title">Card title</h5>\n' +
                    '        <p className="card-text">This is a short card.</p>\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="card-columns">
                <h5>Card columns</h5>
                <p>Cards can be organized into Masonry-like columns with just CSS by wrapping them in <code>.card-columns</code>. Cards are built with CSS <code>column</code> properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.</p>

                <p><strong>Heads up!</strong> Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to <code>display: inline-block</code> as <code>column-break-inside: avoid</code> isn’t a bulletproof solution yet.</p>

                <div className="bd-example">
                    <div className="card-columns">
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title that wraps to a new line</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="card p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Image cap</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image cap</text>
                            </svg>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card bg-primary text-white text-center p-3">
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                                <footer className="blockquote-footer text-white">
                                    <small>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <svg className="bd-placeholder-img card-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Card image</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Card image</text>
                            </svg>
                        </div>
                        <div className="card p-3 text-right">
                            <blockquote className="blockquote mb-0">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card-columns">\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title that wraps to a new line</h5>\n' +
                    '      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="card p-3">\n' +
                    '    <blockquote className="blockquote mb-0 card-body">\n' +
                    '      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                    '      <footer className="blockquote-footer">\n' +
                    '        <small className="text-muted">\n' +
                    '          Someone famous in <cite title="Source Title">Source Title</cite>\n' +
                    '        </small>\n' +
                    '      </footer>\n' +
                    '    </blockquote>\n' +
                    '  </div>\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>\n' +
                    '      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="card bg-primary text-white text-center p-3">\n' +
                    '    <blockquote className="blockquote mb-0">\n' +
                    '      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>\n' +
                    '      <footer className="blockquote-footer text-white">\n' +
                    '        <small>\n' +
                    '          Someone famous in <cite title="Source Title">Source Title</cite>\n' +
                    '        </small>\n' +
                    '      </footer>\n' +
                    '    </blockquote>\n' +
                    '  </div>\n' +
                    '  <div className="card text-center">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>\n' +
                    '      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="card">\n' +
                    '    <img src="..." className="card-img-top" alt="...">\n' +
                    '  </div>\n' +
                    '  <div className="card p-3 text-right">\n' +
                    '    <blockquote className="blockquote mb-0">\n' +
                    '      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
                    '      <footer className="blockquote-footer">\n' +
                    '        <small className="text-muted">\n' +
                    '          Someone famous in <cite title="Source Title">Source Title</cite>\n' +
                    '        </small>\n' +
                    '      </footer>\n' +
                    '    </blockquote>\n' +
                    '  </div>\n' +
                    '  <div className="card">\n' +
                    '    <div className="card-body">\n' +
                    '      <h5 className="card-title">Card title</h5>\n' +
                    '      <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>\n' +
                    '      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

            </div>
        </div>
    );
};

export default CardLayout;
