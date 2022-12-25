import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const PaginationSizing = () => {
    return (
        <div id="pagination-sizing">
            <h4>Sizing</h4>
            <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>

            <div className="bd-example">
                <nav aria-label="...">
                    <ul className="pagination pagination-lg">
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">1<span className="sr-only">(current)</span></span>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-sizing/action">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-sizing/action">3</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="...">\n' +
                '  <ul className="pagination pagination-lg">\n' +
                '    <li className="page-item active" aria-current="page">\n' +
                '      <span className="page-link">1<span className="sr-only">(current)</span></span>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">2</a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">3</a>\n' +
                '    </li>\n' +
                '  </ul>\n' +
                '</nav>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <nav aria-label="...">
                    <ul className="pagination pagination-sm">
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">1<span className="sr-only">(current)</span></span>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-sizing/action">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-sizing/action">3</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="...">\n' +
                '  <ul className="pagination pagination-sm">\n' +
                '    <li className="page-item active" aria-current="page">\n' +
                '      <span className="page-link">1<span className="sr-only">(current)</span></span>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">2</a>\n' +
                '    </li>\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#">3</a>\n' +
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

export default PaginationSizing;
