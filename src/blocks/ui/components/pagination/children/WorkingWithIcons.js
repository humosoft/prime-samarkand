import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const WorkingWithIcons = () => {
    return (
        <div id="working-with-icons">
            <h4>Working with icons</h4>
            <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>

            <div className="bd-example">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#working-with-icons/action" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#working-with-icons/action">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#working-with-icons/action">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#working-with-icons/action">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#working-with-icons/action" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <PrismCode
                code={ '<nav aria-label="Page navigation example">\n' +
                '  <ul className="pagination">\n' +
                '    <li className="page-item">\n' +
                '      <a className="page-link" href="#" aria-label="Previous">\n' +
                '        <span aria-hidden="true">«</span>\n' +
                '      </a>\n' +
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
                '      <a className="page-link" href="#" aria-label="Next">\n' +
                '        <span aria-hidden="true">»</span>\n' +
                '      </a>\n' +
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

export default WorkingWithIcons;
