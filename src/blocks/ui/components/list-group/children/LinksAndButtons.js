import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const LinksAndButtons = () => {
    return (
        <div id="links-and-buttons">
            <h4>Links and buttons</h4>
            <p>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.</p>
            <p>Be sure to <strong> not use the standard <code>.btn</code> classes here </strong>.</p>

            <div className="bd-example">
                <div className="list-group">
                    <a href="#links-and-buttons/action" className="list-group-item list-group-item-action active">
                        Cras justo odio
                    </a>
                    <a href="#links-and-buttons/action" className="list-group-item list-group-item-action">
                        Dapibus ac facilisis in
                    </a>
                    <a href="#links-and-buttons/action" className="list-group-item list-group-item-action">
                        Morbi leo risus
                    </a>
                    <a href="#links-and-buttons/action" className="list-group-item list-group-item-action">
                        Porta ac consectetur ac
                    </a>
                    <a
                        href="#links-and-buttons/action"
                        className="list-group-item list-group-item-action disabled"
                        tabIndex="-1"
                        aria-disabled="true"
                    >
                      Vestibulum at eros
                    </a>
                </div>
            </div>

            <PrismCode
                code={
                    '<div className="list-group">\n' +
                    '  <a href="#links-and-buttons" className="list-group-item list-group-item-action active">\n' +
                    '    Cras justo odio\n' +
                    '  </a>\n' +
                    '  <a href="#links-and-buttons" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>\n' +
                    '  <a href="#links-and-buttons" className="list-group-item list-group-item-action">Morbi leo risus</a>\n' +
                    '  <a href="#links-and-buttons" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>\n' +
                    '  <a href="#links-and-buttons" className="list-group-item list-group-item-action disabled" tabIndex="-1" aria-disabled="true">Vestibulum at eros</a>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />

            <p>With <code>&lt;button&gt;</code>s, you can also make use of the <code>disabled</code> attribute instead of the{' '}<code>.disabled</code> class. Sadly, <code>&lt;a&gt;</code>s don’t support the disabled attribute.</p>

            <div className="bd-example">
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action active">
                        Cras justo odio
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                        Dapibus ac facilisis in
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                        Morbi leo risus
                    </button>
                    <button type="button" className="list-group-item list-group-item-action">
                        Porta ac consectetur ac
                    </button>
                    <button type="button" className="list-group-item list-group-item-action" disabled={true}>
                        Vestibulum at eros
                    </button>
                </div>
            </div>

            <PrismCode
                code={
                    '<div className="list-group">\n' +
                    '  <button type="button" className="list-group-item list-group-item-action active">\n' +
                    '    Cras justo odio\n' +
                    '  </button>\n' +
                    '  <button type="button" className="list-group-item list-group-item-action">Dapibus ac facilisis in</button>\n' +
                    '  <button type="button" className="list-group-item list-group-item-action">Morbi leo risus</button>\n' +
                    '  <button type="button" className="list-group-item list-group-item-action">Porta ac consectetur ac</button>\n' +
                    '  <button type="button" className="list-group-item list-group-item-action" disabled="">Vestibulum at eros</button>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default LinksAndButtons;
