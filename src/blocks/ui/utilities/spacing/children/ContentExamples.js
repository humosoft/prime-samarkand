import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ContentExamples = () => {
    return (
        <div id="content-examples">
            <h4>Content examples</h4>

            <div id="no-style-default">
                <h5>No style default</h5>

                <div className="bd-example style-none">
                    <h1>H1 heading</h1>
                    <h2>H2 heading</h2>
                    <h3>H3 heading</h3>
                    <h4>H4 heading</h4>
                    <h5>H5 heading</h5>
                    <h6>H6 heading</h6>

                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>

                    <hr />

                    <blockquote>
                        <p>Stay hungry. Stay foolish.</p>
                    </blockquote>

                    <hr />

                    <h2>Tables</h2>

                    <table>
                        <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Salary</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th><a href="#no-style-default">John Doe</a></th>
                            <td>$1</td>
                            <td>Because that’s all Steve Jobs needed for a salary.</td>
                        </tr>
                        <tr>
                            <th><a href="#no-style-default">Jane Doe</a></th>
                            <td>$100K</td>
                            <td>For all the blogging she does.</td>
                        </tr>
                        <tr>
                            <th><a href="#no-style-default">Fred Bloggs</a></th>
                            <td>$100M</td>
                            <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
                        </tr>
                        <tr>
                            <th><a href="#no-style-default">Jane Bloggs</a></th>
                            <td>$100B</td>
                            <td>With hair like that?! Enough said…</td>
                        </tr>
                        </tbody>
                    </table>

                    <hr />

                    <h2>Unordered Lists (Nested)</h2>

                    <ul>
                        <li>List item one
                            <ul>
                                <li>List item one
                                    <ul>
                                        <li>List item one</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ul>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ul>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ul>

                    <hr />

                    <h2>Ordered List (Nested)</h2>

                    <ol start="8">
                        <li>List item one - start at 8
                            <ol>
                                <li>List item one
                                    <ol reversed="reversed">
                                        <li>List item one -reversed attribute</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ol>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ol>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ol>

                    <hr />

                    <h2>Block 1</h2>

                    <div className="theme-block-text"><p>Block text</p></div>

                    <h2>Block 2</h2>

                    <div className="theme-block-text"><p>Block text</p></div>
                </div>

                <PrismCode
                    code={ '<div className="">\n' +
                    '  ...\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="style-default">
                <h5>Style default</h5>
                <p>Add to parent <code>.style-default</code> class.</p>

                <div className="bd-example style-none style-default">
                    <h1>H1 heading</h1>
                    <h2>H2 heading</h2>
                    <h3>H3 heading</h3>
                    <h4>H4 heading</h4>
                    <h5>H5 heading</h5>
                    <h6>H6 heading</h6>

                    <p>Paragraph 1</p>
                    <p>Paragraph 2</p>

                    <hr />

                    <blockquote><p>Stay hungry. Stay foolish.</p></blockquote>

                    <hr />

                    <h2>Tables</h2>

                    <table>
                        <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Salary</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th><a href="#style-default">John Doe</a></th>
                            <td>$1</td>
                            <td>Because that’s all Steve Jobs needed for a salary.</td>
                        </tr>
                        <tr>
                            <th><a href="#style-default">Jane Doe</a></th>
                            <td>$100K</td>
                            <td>For all the blogging she does.</td>
                        </tr>
                        <tr>
                            <th><a href="#style-default">Fred Bloggs</a></th>
                            <td>$100M</td>
                            <td>Pictures are worth a thousand words, right? So Jane x 1,000.</td>
                        </tr>
                        <tr>
                            <th><a href="#style-default">Jane Bloggs</a></th>
                            <td>$100B</td>
                            <td>With hair like that?! Enough said…</td>
                        </tr>
                        </tbody>
                    </table>

                    <hr />

                    <h2>Unordered Lists (Nested)</h2>

                    <ul>
                        <li>List item one
                            <ul>
                                <li>List item one
                                    <ul>
                                        <li>List item one</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ul>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ul>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ul>

                    <hr />

                    <h2>Ordered List (Nested)</h2>

                    <ol start="8">
                        <li>List item one - start at 8
                            <ol>
                                <li>List item one
                                    <ol reversed="reversed">
                                        <li>List item one -reversed attribute</li>
                                        <li>List item two</li>
                                        <li>List item three</li>
                                        <li>List item four</li>
                                    </ol>
                                </li>
                                <li>List item two</li>
                                <li>List item three</li>
                                <li>List item four</li>
                            </ol>
                        </li>
                        <li>List item two</li>
                        <li>List item three</li>
                        <li>List item four</li>
                    </ol>

                    <hr />

                    <h2>Block 1</h2>

                    <div className="theme-block-text"><p>Block text</p></div>

                    <h2>Block 2</h2>

                    <div className="theme-block-text"><p>Block text</p></div>
                </div>

                <PrismCode
                    code={ '<div className="style-default">\n' +
                    '  ...\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default ContentExamples;
