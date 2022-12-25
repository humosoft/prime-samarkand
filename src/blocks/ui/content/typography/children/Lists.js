import React from 'react'
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Lists = () => {
    return (
        <div id="lists">
            <h4>Lists</h4>
            <p>Display a list of items inside your content, rendered with a number, a bullet, or none.</p>

            <div id="unordered-list">
                <h5>Unordered list</h5>

                <div className="bd-example">
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ul>
                </div>

                <PrismCode
                    code={
                    '<ul>\n' +
                    '  <li>Lorem ipsum</li>\n' +
                    '  <li>Phasellus iaculis</li>\n' +
                    '  <li>Nulla volutpat</li>\n' +
                    '</ul>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="ordered-lists">
                <h5>Ordered list</h5>

                <div className="bd-example">
                    <ol>
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ol>
                </div>

                <PrismCode
                    code={
                    '<ol>\n' +
                    '  <li>Lorem ipsum</li>\n' +
                    '  <li>Phasellus iaculis</li>\n' +
                    '  <li>Nulla volutpat</li>\n' +
                    '</ol>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="unstyled-lists">
                <h5>Unstyled list</h5>

                <div className="bd-example">
                    <ul className="list-unstyled">
                        <li>Lorem ipsum</li>
                        <li>Phasellus iaculis</li>
                        <li>Nulla volutpat</li>
                    </ul>
                </div>

                <PrismCode
                    code={
                    '<ul className="list-unstyled">\n' +
                    '  <li>Lorem ipsum</li>\n' +
                    '  <li>Phasellus iaculis</li>\n' +
                    '  <li>Nulla volutpat</li>\n' +
                    '</ul>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="inline-lists">
                <h5>Inline list</h5>
                <p>Remove a list’s bullets and apply some light <code>margin</code> with a combination of two classes, <code>.list-inline</code> and <code>.list-inline-item</code>.</p>

                <div className="bd-example">
                    <ul className="list-inline">
                        <li className="list-inline-item">Lorem ipsum</li>
                        <li className="list-inline-item">Phasellus iaculis</li>
                        <li className="list-inline-item">Nulla volutpat</li>
                    </ul>
                </div>

                <PrismCode
                    code={
                    '<ul className="list-inline">\n' +
                    '  <li className="list-inline-item">Lorem ipsum</li>\n' +
                    '  <li className="list-inline-item">Phasellus iaculis</li>\n' +
                    '  <li className="list-inline-item">Nulla volutpat</li>\n' +
                    '</ul>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="description-list-alignment">
                <h5>Description list alignment</h5>
                <p>Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a <code>.text-truncate</code> class to truncate the text with an ellipsis.</p>

                <div className="bd-example">
                    <dl className="row">
                        <dt className="col-sm-3">Description lists</dt>
                        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                        <dt className="col-sm-3">Euismod</dt>
                        <dd className="col-sm-9">
                            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                            <p>Donec id elit non mi porta gravida at eget metus.</p>
                        </dd>

                        <dt className="col-sm-3">Malesuada porta</dt>
                        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                        <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

                        <dt className="col-sm-3">Nesting</dt>
                        <dd className="col-sm-9">
                            <dl className="row">
                                <dt className="col-sm-4">Nested definition list</dt>
                                <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                            </dl>
                        </dd>
                    </dl>
                </div>

                <PrismCode
                    code={
                    '<dl className="row">\n' +
                    '  <dt className="col-sm-3">Description lists</dt>\n' +
                    '  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>\n' +
                    '\n' +
                    '  <dt className="col-sm-3">Euismod</dt>\n' +
                    '  <dd className="col-sm-9">\n' +
                    '    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>\n' +
                    '    <p>Donec id elit non mi porta gravida at eget metus.</p>\n' +
                    '  </dd>\n' +
                    '\n' +
                    '  <dt className="col-sm-3">Malesuada porta</dt>\n' +
                    '  <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>\n' +
                    '\n' +
                    '  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>\n' +
                    '  <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>\n' +
                    '\n' +
                    '  <dt className="col-sm-3">Nesting</dt>\n' +
                    '  <dd className="col-sm-9">\n' +
                    '    <dl className="row">\n' +
                    '      <dt className="col-sm-4">Nested definition list</dt>\n' +
                    '      <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>\n' +
                    '    </dl>\n' +
                    '  </dd>\n' +
                    '</dl>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default Lists;
