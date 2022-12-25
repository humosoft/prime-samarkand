import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const ContextualClasses = () => {
    return (
        <div id="contextual-classes">
            <h3>Contextual classes</h3>
            <p>Use contextual classes to color table rows or individual cells.</p>

            <div className="bd-example">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Class</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="table-active">
                            <th scope="row">Active</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">Default</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-primary">
                            <th scope="row">Primary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-secondary">
                            <th scope="row">Secondary</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-success">
                            <th scope="row">Success</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-danger">
                            <th scope="row">Danger</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-warning">
                            <th scope="row">Warning</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-info">
                            <th scope="row">Info</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-light">
                            <th scope="row">Light</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="table-dark">
                            <th scope="row">Dark</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PrismCode
                code={ '<!-- On rows -->\n' +
                '<tr className="table-active">...</tr>\n' +
                '\n' +
                '<tr className="table-primary">...</tr>\n' +
                '<tr className="table-secondary">...</tr>\n' +
                '<tr className="table-success">...</tr>\n' +
                '<tr className="table-danger">...</tr>\n' +
                '<tr className="table-warning">...</tr>\n' +
                '<tr className="table-info">...</tr>\n' +
                '<tr className="table-light">...</tr>\n' +
                '<tr className="table-dark">...</tr>\n' +
                '\n' +
                '<!-- On cells (`td` or `th`) -->\n' +
                '<tr>\n' +
                '  <td className="table-active">...</td>\n' +
                '\n' +
                '  <td className="table-primary">...</td>\n' +
                '  <td className="table-secondary">...</td>\n' +
                '  <td className="table-success">...</td>\n' +
                '  <td className="table-danger">...</td>\n' +
                '  <td className="table-warning">...</td>\n' +
                '  <td className="table-info">...</td>\n' +
                '  <td className="table-light">...</td>\n' +
                '  <td className="table-dark">...</td>\n' +
                '</tr>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Regular table background variants are not available with the dark table, however, you may use <Link title="Text-color" className="scroll-to-id" to="text-color" spy={ true } smooth={ true } duration={ 0 } href="#text-color">text and background utilities</Link>to achieve similar styles.</p>

            <div className="bd-example">
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Heading</th>
                            <th scope="col">Heading</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-primary">
                            <th scope="row">1</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="bg-success">
                            <th scope="row">3</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="bg-info">
                            <th scope="row">5</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">6</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="bg-warning">
                            <th scope="row">7</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr>
                            <th scope="row">8</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>

                        <tr className="bg-danger">
                            <th scope="row">9</th>
                            <td>Cell</td>
                            <td>Cell</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <PrismCode
                code={ '<!-- On rows -->\n' +
                '<tr className="bg-primary">...</tr>\n' +
                '<tr className="bg-success">...</tr>\n' +
                '<tr className="bg-warning">...</tr>\n' +
                '<tr className="bg-danger">...</tr>\n' +
                '<tr className="bg-info">...</tr>\n' +
                '\n' +
                '<!-- On cells (`td` or `th`) -->\n' +
                '<tr>\n' +
                '  <td className="bg-primary">...</td>\n' +
                '  <td className="bg-success">...</td>\n' +
                '  <td className="bg-warning">...</td>\n' +
                '  <td className="bg-danger">...</td>\n' +
                '  <td className="bg-info">...</td>\n' +
                '</tr>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Create responsive tables by wrapping any <code>.table</code> with <code>.table-responsive{`{-sm|-md|-lg|-xl}`}</code>, making the table scroll horizontally at each <code>max-width</code> breakpoint of up to (but not including) 576px, 768px, 992px, and 1120px, respectively.</p>
        </div>
    );
};

export default ContextualClasses;
