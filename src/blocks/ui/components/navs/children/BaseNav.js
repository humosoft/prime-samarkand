import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const BaseNav = () => {
    return (
        <div id="base-nav">
            <h4>Base nav</h4>
            <p>Navigation available in share general markup and styles, from the base <code>.nav</code> class to the active and disabled states. Swap modifier classes to switch between each style.</p>
            <p>The base <code>.nav</code> component is built with flexbox and provide a strong foundation for building all types of navigation components. It includes some style overrides (for working with lists), some link padding for larger hit areas, and basic disabled styling.</p>

            <div className="bd-callout bd-callout-info">
                <p>The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
            </div>

            <div className="bd-example">
                <ul className="nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#base-nav/action">Active</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#base-nav/action">Link</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#base-nav/action">Link</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link disabled" href="#base-nav/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>

            <PrismCode
                code={ '<ul className="nav">\n' +
                '  <li className="nav-item active">\n' +
                '    <a className="nav-link" href="#">Active</a>\n' +
                '  </li>\n' +
                '\n' +
                '  <li className="nav-item">\n' +
                '    <a className="nav-link" href="#">Link</a>\n' +
                '  </li>\n' +
                '\n' +
                '  <li className="nav-item">\n' +
                '    <a className="nav-link" href="#">Link</a>\n' +
                '  </li>\n' +
                '\n' +
                '  <li className="nav-item">\n' +
                '    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                '  </li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Classes are used throughout, so your markup can be super flexible. Use <code>&lt;ul&gt;</code>s like above, <code>&lt;ol&gt;</code> if the order of your items is important, or roll your own with a <code>&lt;nav&gt;</code> element. Because the <code>.nav</code> uses <code>display: flex</code>, the nav links behave the same as nav items would, but without the extra markup.</p>

            <div className="bd-example">
                <nav className="nav">
                    <a className="nav-link active" href="#base-nav/action">Active</a>
                    <a className="nav-link" href="#base-nav/action">Link</a>
                    <a className="nav-link" href="#base-nav/action">Link</a>
                    <a className="nav-link disabled" href="#base-nav/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                </nav>
            </div>

            <PrismCode
                code={ '<nav className="nav">\n' +
                '  <a className="nav-link active" href="#">Active</a>\n' +
                '  <a className="nav-link" href="#">Link</a>\n' +
                '  <a className="nav-link" href="#">Link</a>\n' +
                '  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                '</nav>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default BaseNav;
