import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonDisabled = () => {
    return (
        <div id="button-disabled">
            <h4>Button disabled</h4>
            <p>
                Make buttons look inactive by adding the <code>disabled</code> boolean attribute to any <code>&lt;button&gt;</code> element.
            </p>

            <div className="bd-example">
                <button type="button" className="btn btn-primary mr-1" disabled={true}>
                    Primary button
                </button>
                <button type="button" className="btn btn-secondary" disabled={true}>
                    Button
                </button>
            </div>

            <PrismCode 
                code={
                    '<button type="button" className="btn btn-primary" disabled="">Primary button</button>\n' + 
                    '<button type="button" className="btn btn-secondary" disabled="">Button</button>'
                } 
                language="html" 
                plugins={['line-numbers']} 
            />

            <p>
                Disabled buttons using the <code>&lt;a&gt;</code> element behave a bit different:
            </p>

            <ul>
                <li>
                    <code>&lt;a&gt;</code>s don’t support the <code>disabled</code> attribute, so you must add the <code>.disabled</code> class to make it visually appear disabled.
                </li>
                <li>
                    Some future-friendly styles are included to disable all <code>pointer-events</code> on anchor buttons. In browsers which support that property, you won’t see the disabled cursor at all.
                </li>
                <li>
                    Disabled buttons should include the <code>aria-disabled="true"</code> attribute to indicate the state of the element to assistive technologies.
                </li>
            </ul>

            <div className="bd-example">
                <a href="#button-disabled/action" className="btn btn-primary disabled mr-1" tabIndex="-1" role="button" aria-disabled="true">
                    Primary link
                </a>
                <a href="#button-disabled/action" className="btn btn-secondary disabled" tabIndex="-1" role="button" aria-disabled="true">
                    Link
                </a>
            </div>

            <PrismCode 
                code={
                    '<a href="#" className="btn btn-primary disabled" tabIndex="-1" role="button" aria-disabled="true">Primary link</a>\n' + 
                    '<a href="#" className="btn btn-secondary disabled" tabIndex="-1" role="button" aria-disabled="true">Link</a>'
                } 
                language="html" 
                plugins={['line-numbers']} 
            />

            <div className="bd-callout bd-callout-warning">
                <h5>Link functionality caveat</h5>

                <p>
                    The <code>.disabled</code> class uses <code>pointer-events: none</code> to try to disable the link functionality of <code>&lt;a&gt;</code>s, but that CSS property is not yet standardized. In addition, even in browsers that do support <code>pointer-events: none</code>, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a <code>tabindex="-1"</code> attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
                </p>
            </div>
        </div>
    );
};

export default ButtonDisabled;
