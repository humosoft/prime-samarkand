import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ActiveItems = () => {
    return (
        <div id="active-items">
            <h4>Active items</h4>
            <p>Add <code>.active</code> to a <code>.list-group-item</code> to indicate the current active selection.</p>

            <div className="bd-example">
                <ul className="list-group">
                    <li className="list-group-item active">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group">\n' +
                '  <li className="list-group-item active">Cras justo odio</li>\n' +
                '  <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '  <li className="list-group-item">Morbi leo risus</li>\n' +
                '  <li className="list-group-item">Porta ac consectetur ac</li>\n' +
                '  <li className="list-group-item">Vestibulum at eros</li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ActiveItems;
