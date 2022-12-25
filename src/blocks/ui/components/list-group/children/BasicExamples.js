import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const BasicExamples = () => {
    return (
        <div id="basic-examples">
            <h4>Basic examples</h4>
            <p>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</p>

            <div className="bd-example">
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group">\n' +
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

export default BasicExamples;
