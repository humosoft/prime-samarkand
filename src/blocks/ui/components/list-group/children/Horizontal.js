import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Horizontal = () => {
    return (
        <div id="horizontal">
            <h4>Horizontal</h4>
            <p>Add <code>.list-group-horizontal</code> to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant <code>.list-group-horizontal-{`{-sm|-md|-lg|-xl}`}</code> to make a list group horizontal starting at that breakpoint’s <code>min-width</code>. Currently <strong>horizontal list groups cannot be combined with flush list groups.</strong></p>
            <p><strong>ProTip:</strong> Want equal-width list group items when horizontal? Add <code>.flex-fill</code> to each list group item.</p>

            <div className="bd-example">
                <ul className="list-group list-group-horizontal">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group list-group-horizontal">\n' +
                '  <li className="list-group-item">Cras justo odio</li>\n' +
                '  <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '  <li className="list-group-item">Morbi leo risus</li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group list-group-horizontal-sm">\n' +
                '  <li className="list-group-item">Cras justo odio</li>\n' +
                '  <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '  <li className="list-group-item">Morbi leo risus</li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <ul className="list-group list-group-horizontal-md">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group list-group-horizontal-md">\n' +
                '  <li className="list-group-item">Cras justo odio</li>\n' +
                '  <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '  <li className="list-group-item">Morbi leo risus</li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <ul className="list-group list-group-horizontal-lg">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group list-group-horizontal-lg">\n' +
                '  <li className="list-group-item">Cras justo odio</li>\n' +
                '  <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '  <li className="list-group-item">Morbi leo risus</li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <ul className="list-group list-group-horizontal-xl">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group list-group-horizontal-xl">\n' +
                '  <li className="list-group-item">Cras justo odio</li>\n' +
                '  <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '  <li className="list-group-item">Morbi leo risus</li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Horizontal;
