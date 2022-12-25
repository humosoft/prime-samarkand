import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const ListGroupCustomContent = () => {
    return (
        <div id="list-group-custom-content">
            <h4>Custom content</h4>
            <p>Add nearly any HTML within, even for linked list groups like the one below, with the help of <Link title="Flex" className="scroll-to-id" to="flex" spy={ true } smooth={ true } duration={ 0 } href="#flex">flexbox utilities</Link>.</p>

            <div className="bd-example">
                <div className="list-group">
                    <a href="#list-group-custom-content/action" className="list-group-item list-group-item-action active">
                        <div className="d-flex w-100 justify-content-between">
                            <h5>List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </a>
                    <a href="#list-group-custom-content/action" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5>List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                    <a href="#list-group-custom-content/action" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5>List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </a>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="list-group">\n' +
                '  <a href="#" className="list-group-item list-group-item-action active">\n' +
                '    <div className="d-flex w-100 justify-content-between">\n' +
                '      <h5>List group item heading</h5>\n' +
                '      <small>3 days ago</small>\n' +
                '    </div>\n' +
                '    <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
                '    <small>Donec id elit non mi porta.</small>\n' +
                '  </a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action">\n' +
                '    <div className="d-flex w-100 justify-content-between">\n' +
                '      <h5>List group item heading</h5>\n' +
                '      <small className="text-muted">3 days ago</small>\n' +
                '    </div>\n' +
                '    <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
                '    <small className="text-muted">Donec id elit non mi porta.</small>\n' +
                '  </a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action">\n' +
                '    <div className="d-flex w-100 justify-content-between">\n' +
                '      <h5>List group item heading</h5>\n' +
                '      <small className="text-muted">3 days ago</small>\n' +
                '    </div>\n' +
                '    <p>Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>\n' +
                '    <small className="text-muted">Donec id elit non mi porta.</small>\n' +
                '  </a>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ListGroupCustomContent;
