import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const ListGroupWithBadges = () => {
    return (
        <div id="list-group-with-badges">
            <h4>With badges</h4>
            <p>Add badges to any list group item to show unread counts, activity, and more with the help of some <Link title="Flex" className="scroll-to-id" to="flex" spy={ true } smooth={ true } duration={ 0 } href="#flex">utilities</Link>.</p>

            <div className="bd-example">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Cras justo odio
                        <span className="badge badge-primary badge-pill">14</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Dapibus ac facilisis in
                        <span className="badge badge-primary badge-pill">2</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group">\n' +
                '  <li className="list-group-item d-flex justify-content-between align-items-center">\n' +
                '    Cras justo odio\n' +
                '    <span className="badge badge-primary badge-pill">14</span>\n' +
                '  </li>\n' +
                '  <li className="list-group-item d-flex justify-content-between align-items-center">\n' +
                '    Dapibus ac facilisis in\n' +
                '    <span className="badge badge-primary badge-pill">2</span>\n' +
                '  </li>\n' +
                '  <li className="list-group-item d-flex justify-content-between align-items-center">\n' +
                '    Morbi leo risus\n' +
                '    <span className="badge badge-primary badge-pill">1</span>\n' +
                '  </li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ListGroupWithBadges;
