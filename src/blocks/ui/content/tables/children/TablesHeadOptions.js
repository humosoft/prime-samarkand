import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const TablesHeadOptions = () => {
    return (
        <div id="table-head-options">
            <h3>Table head options</h3>
            <p>Similar to tables and dark tables, use the modifier classes <code>.thead-light</code> or <code>.thead-dark</code> to make <code>&lt;thead&gt;</code>s appear light or dark gray.</p>

            <div className="bd-example">
                <table className="table">
                    <thead className="thead-dark">
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
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

                <table className="table">
                    <thead className="thead-light">
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
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PrismCode
                code={ '<table className="table">\n' +
                '  <thead className="thead-dark">\n' +
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
                '</table>\n\n' +
                '<table className="table">\n' +
                '  <thead className="thead-light">\n' +
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

export default TablesHeadOptions;
