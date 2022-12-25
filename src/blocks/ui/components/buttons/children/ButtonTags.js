import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ButtonTags = () => {
    return (
        <div id="button-tags">
            <h4>Button tags</h4>
            <p>The <code>.btn</code> classes are designed to be used with the <code>&lt;button&gt;</code> element. However, you can also use these classes on <code>&lt;a&gt;</code> or <code>&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
            <p>When using button classes on <code>&lt;a&gt;</code> elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a{ ' ' }<code>role="button"</code> to appropriately convey their purpose to assistive technologies such as screen readers.</p>

            <div className="bd-example">
                <a className="btn btn-primary mr-1" href="#button-tags/action" role="button">
                    Link
                </a>
                <button className="btn btn-primary mr-1" type="submit">
                    Button
                </button>
                <input className="btn btn-primary mr-1" type="button" value="Input"/>
                <input className="btn btn-primary mr-1" type="submit" value="Submit"/>
                <input className="btn btn-primary" type="reset" value="Reset"/>
            </div>

            <PrismCode
                code={
                    '<a className="btn btn-primary" href="#button-tags" role="button">Link</a>\n' +
                    '<button className="btn btn-primary" type="submit">Button</button>\n' +
                    '<input className="btn btn-primary" type="button" value="Input"/>\n' +
                    '<input className="btn btn-primary" type="submit" value="Submit"/>\n' +
                    '<input className="btn btn-primary" type="reset" value="Reset"/>'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />
        </div>
    );
};

export default ButtonTags;
