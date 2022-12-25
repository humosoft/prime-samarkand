import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const PaginationAlignment = () => {
    return (
        <div id="pagination-alignment">
            <h4>Alignment</h4>
            <p>Change the alignment of pagination components with<Link title="Flex" className="scroll-to-id" to="flex" spy={ true } smooth={ true } duration={ 0 } href="#flex"> flexbox utilities</Link></p>

            <div className="bd-example">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#pagination-alignment/action" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="Page navigation example">\n' +
                '  <ul className="pagination justify-content-center">\n' +
                '    <li className="page-item disabled">\n' +
                '      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>\n' +
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

            <div className="bd-example">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                            <a className="page-link" href="#pagination-alignment/action" tabIndex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#pagination-alignment/action">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="Page navigation example">\n' +
                '  <ul className="pagination justify-content-end">\n' +
                '    <li className="page-item disabled">\n' +
                '      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>\n' +
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

export default PaginationAlignment;
