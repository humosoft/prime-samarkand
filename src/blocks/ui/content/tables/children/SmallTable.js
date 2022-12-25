import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const SmallTable = () => {
    return (
        <div id="small-table">
            <h3>Small table</h3>
            <p>Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.</p>

            <div className="bd-example">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PrismCode
                code={ '' +
                '<table className="table table-sm">\n' +
                '  <thead>\n' +
                '    <tr>\n' +
                '      <th scope="col">#</th>\n' +
                '      <th scope="col">First</th>\n' +
                '      <th scope="col">Last</th>\n' +
                '      <th scope="col">Handle</th>\n' +
                '    </tr>\n' +
                '  </thead>\n' +
                '  <tbody>\n' +
                '    <tr>\n' +
                '      <th scope="row">1</th>\n' +
                '      <td>Mark</td>\n' +
                '      <td>Otto</td>\n' +
                '      <td>@mdo</td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                '      <th scope="row">2</th>\n' +
                '      <td>Jacob</td>\n' +
                '      <td>Thornton</td>\n' +
                '      <td>@fat</td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                '      <th scope="row">3</th>\n' +
                '      <td>Larry</td>\n' +
                '      <td>the Bird</td>\n' +
                '      <td>@twitter</td>\n' +
                '    </tr>\n' +
                '  </tbody>\n' +
                '</table>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <table className="table table-sm table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PrismCode
                code={ '' +
                '<table className="table table-sm table-dark">\n' +
                '  <thead>\n' +
                '    <tr>\n' +
                '      <th scope="col">#</th>\n' +
                '      <th scope="col">First</th>\n' +
                '      <th scope="col">Last</th>\n' +
                '      <th scope="col">Handle</th>\n' +
                '    </tr>\n' +
                '  </thead>\n' +
                '  <tbody>\n' +
                '    <tr>\n' +
                '      <th scope="row">1</th>\n' +
                '      <td>Mark</td>\n' +
                '      <td>Otto</td>\n' +
                '      <td>@mdo</td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                '      <th scope="row">2</th>\n' +
                '      <td>Jacob</td>\n' +
                '      <td>Thornton</td>\n' +
                '      <td>@fat</td>\n' +
                '    </tr>\n' +
                '    <tr>\n' +
                '      <th scope="row">3</th>\n' +
                '      <td>Larry</td>\n' +
                '      <td>the Bird</td>\n' +
                '      <td>@twitter</td>\n' +
                '    </tr>\n' +
                '  </tbody>\n' +
                '</table>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default SmallTable;
