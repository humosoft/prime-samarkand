import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonActive = () => {
    return (
        <div id="button-active">
            <h4>Button active</h4>
            <p>
              Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active.{' '}
                <strong>
                    There’s no need to add a class to <code>&lt;button&gt;</code>s as they use a pseudo-class
                </strong>
                  . However, you can still force the same active appearance with <code>.active</code> (and include the{' '}
                <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.
            </p>

            <div className="bd-example">
                <a href="#button-active/action" className="btn btn-primary active mr-1" role="button" aria-pressed="true">
                    Primary link
                </a>
                <a href="#button-active/action" className="btn btn-secondary active" role="button" aria-pressed="true">
                    Link
                </a>
            </div>

            <PrismCode
                code={
                    '<a href="#" className="btn btn-primary active" role="button" aria-pressed="true">Primary link</a>\n' +
                    '<a href="#" className="btn btn-secondary active" role="button" aria-pressed="true">Link</a>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default ButtonActive;
