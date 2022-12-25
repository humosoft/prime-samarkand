import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const DisabledAndActiveStates = () => {
    return (
        <div id="disabled-and-active-states">
            <h4>Disabled and active states</h4>
            <p>Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.</p>
            <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.</p>

            <div className="bd-example">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#disabled-and-active-states/action" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#disabled-and-active-states/action">1</a>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#disabled-and-active-states/action">2 <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#disabled-and-active-states/action">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#disabled-and-active-states/action">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="...">\n' +
                '  <ul className="pagination">\n' +
                '    <li className="page-item disabled">\n' +
                '      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">1</a>\n' +
                '    </li>\n' +
                '    <li className="page-item active" aria-current="page">\n' +
                '      <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">3</a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">Next</a>\n' +
                '    </li>\n' +
                '  </ul>\n' +
                '</nav>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>

            <div className="bd-example">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#disabled-and-active-states/action">1</a>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">
                                2
                                <span className="sr-only">(current)</span>
                            </span>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#disabled-and-active-states/action">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#disabled-and-active-states/action">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="...">\n' +
                '  <ul className="pagination">\n' +
                '    <li className="page-item disabled">\n' +
                '      <span className="page-link">Previous</span>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">1</a>\n' +
                '    </li>\n' +
                '    <li className="page-item active" aria-current="page">\n' +
                '      <span className="page-link">\n' +
                '         2\n' +
                '         <span className="sr-only">(current)</span>\n' +
                '      </span>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">3</a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">Next</a>\n' +
                '    </li>\n' +
                '  </ul>\n' +
                '</nav>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default DisabledAndActiveStates;
