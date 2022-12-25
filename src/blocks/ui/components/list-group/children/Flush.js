import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Flush = () => {
    return (
        <div id="flush">
            <h4>Flush</h4>
            <p>Add <code>.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</p>

            <div className="bd-example">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group list-group-flush">\n' +
                '  <li className="list-group-item">Cras justo odio</li>\n' +
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

export default Flush;
