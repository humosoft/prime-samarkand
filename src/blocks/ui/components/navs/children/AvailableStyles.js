import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const AvailableStyles = () => {
    return (
        <div id="available-styles">
            <h4>Available styles</h4>
            <p>Change the style of <code>.nav</code>s component with modifiers and utilities. Mix and match as needed, or build your own.</p>

            <div id="horizontal-alignment">
                <h5>Horizontal alignment</h5>
                <p>Change the horizontal alignment of your nav with <Link title="Horizontal" className="scroll-to-id" to="horizontal-alignment" spy={ true } smooth={ true } duration={ 0 } href="#horizontal-alignment">flexbox utilities</Link>. By default, navs are left-aligned, but you can easily change them to center or right aligned.</p>

                <p>Centered with <code>.justify-content-center</code>:</p>

                <div className="bd-example">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#horizontal-alignment/action">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#horizontal-alignment/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#horizontal-alignment/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#horizontal-alignment/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <PrismCode
                    code={ '<ul className="nav justify-content-center">\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link active" href="#">Active</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '  </li>\n' +
                    '</ul>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>Right-aligned with <code>.justify-content-end</code>:</p>

                <div className="bd-example">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" href="#horizontal-alignment/action">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#horizontal-alignment/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#horizontal-alignment/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#horizontal-alignment/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <PrismCode
                    code={ '<ul className="nav justify-content-end">\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link active" href="#">Active</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '  </li>\n' +
                    '</ul>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="vertical">
                <h5>Vertical</h5>
                <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility. Need to stack them on some viewports but not others? Use the responsive versions (e.g., <code>.flex-sm-column</code>).</p>

                <div className="bd-example">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#vertical/action">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#vertical/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#vertical/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#vertical/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <PrismCode
                    code={ '<ul className="nav flex-column">\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link active" href="#">Active</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '  </li>\n' +
                    '</ul>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>As always, vertical navigation is possible without <code>&lt;ul&gt;</code>s, too.</p>

                <div className="bd-example">
                    <nav className="nav flex-column">
                        <a className="nav-link active" href="#vertical/action">Active</a>
                        <a className="nav-link" href="#vertical/action">Link</a>
                        <a className="nav-link" href="#vertical/action">Link</a>
                        <a className="nav-link disabled" href="#vertical/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </nav>
                </div>

                <PrismCode
                    code={ '<nav className="nav flex-column">\n' +
                    '  <a className="nav-link active" href="#">Active</a>\n' +
                    '  <a className="nav-link" href="#">Link</a>\n' +
                    '  <a className="nav-link" href="#">Link</a>\n' +
                    '  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '</nav>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="tabs">
                <h5>Tabs</h5>
                <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
                <div className="bd-example">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#tabs/action">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tabs/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tabs/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#tabs/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <PrismCode
                    code={ '<ul className="nav nav-tabs">\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link active" href="#">Active</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '  </li>\n' +
                    '</ul>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="pills">
                <h5>Pills</h5>
                <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>

                <div className="bd-example">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#pills/action">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pills/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pills/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#pills/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <PrismCode
                    code={ '<ul className="nav nav-pills">\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link active" href="#">Active</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '  </li>\n' +
                    '</ul>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="fill-and-justify">
                <h5>Fill and justify</h5>
                <p>Force your <code>.nav</code>’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>

                <div className="bd-example">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <a className="nav-link active" href="#fill-and-justify/action">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#fill-and-justify/action">Much longer nav link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#fill-and-justify/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#fill-and-justify/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <PrismCode
                    code={ '<ul className="nav nav-pills nav-fill">\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link active" href="#">Active</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Much longer nav link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '  </li>\n' +
                    '</ul>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>When using a <code>&lt;nav&gt;</code>-based navigation, be sure to include <code>.nav-item</code> on the anchors.
                </p>

                <div className="bd-example">
                    <nav className="nav nav-pills nav-fill">
                        <a className="nav-item nav-link active" href="#fill-and-justify/action">Active</a>
                        <a className="nav-item nav-link" href="#fill-and-justify/action">Much longer nav link</a>
                        <a className="nav-item nav-link" href="#fill-and-justify/action">Link</a>
                        <a className="nav-item nav-link disabled" href="#fill-and-justify/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </nav>
                </div>

                <PrismCode
                    code={ '<nav className="nav nav-pills nav-fill">\n' +
                    '  <a className="nav-item nav-link active" href="#fill-and-justify">Active</a>\n' +
                    '  <a className="nav-item nav-link" href="#fill-and-justify">Much longer nav link</a>\n' +
                    '  <a className="nav-item nav-link" href="#fill-and-justify">Link</a>\n' +
                    '  <a className="nav-item nav-link disabled" href="#fill-and-justify" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '</nav>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>For equal-width elements, use <code>.nav-justified</code>. All horizontal space will be occupied by nav links, but unlike the <code>.nav-fill</code> above, every nav item will be the same width.</p>

                <div className="bd-example">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <a className="nav-link active" href="#fill-and-justify/action">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#fill-and-justify/action">Much longer nav link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#fill-and-justify/action">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#pills/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

                <PrismCode
                    code={ '<ul className="nav nav-pills nav-justified">\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link active" href="#">Active</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Much longer nav link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link" href="#">Link</a>\n' +
                    '  </li>\n' +
                    '  <li className="nav-item">\n' +
                    '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '  </li>\n' +
                    '</ul>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />

                <p>Similar to the <code>.nav-fill</code> example using a <code>&lt;nav&gt;</code>-based navigation, be sure to include <code>.nav-item</code> on the anchors.</p>

                <div className="bd-example">
                    <nav className="nav nav-pills nav-justified">
                        <a className="nav-item nav-link active" href="#fill-and-justify/action">Active</a>
                        <a className="nav-item nav-link" href="#fill-and-justify/action">Much longer nav link</a>
                        <a className="nav-item nav-link" href="#fill-and-justify/action">Link</a>
                        <a className="nav-item nav-link disabled" href="#fill-and-justify/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </nav>

                </div>

                <PrismCode
                    code={ '<nav className="nav nav-pills nav-justified">\n' +
                    '  <a className="nav-item nav-link active" href="#">Active</a>\n' +
                    '  <a className="nav-item nav-link" href="#">Much longer nav link</a>\n' +
                    '  <a className="nav-item nav-link" href="#">Link</a>\n' +
                    '  <a className="nav-item nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                    '</nav>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default AvailableStyles;
