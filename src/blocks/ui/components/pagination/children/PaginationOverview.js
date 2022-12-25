import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const PaginationOverview = () => {
    return (
        <div id="pagination-overview">
            <h4>Overview</h4>
            <p>We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping <code>&lt;nav&gt;</code> element to identify it as a navigation section to screen readers and other assistive technologies.</p>
            <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>

            <div className="bd-example">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#pagination-overview/action">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-overview/action">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-overview/action">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-overview/action">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-overview/action">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="Page navigation example">\n' +
                '  <ul className="pagination">\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">Previous</a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">1</a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">2</a>\n' +
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

export default PaginationOverview;
