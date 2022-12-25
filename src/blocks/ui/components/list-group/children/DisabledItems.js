import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const DisabledItems = () => {
    return (
        <div id="disabled-items">
            <h4>Disabled items</h4>
            <p>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</p>

            <div className="bd-example">
                <ul className="list-group">
                    <li className="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group">\n' +
                '  <li className="list-group-item disabled">Cras justo odio</li>\n' +
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

export default DisabledItems;
