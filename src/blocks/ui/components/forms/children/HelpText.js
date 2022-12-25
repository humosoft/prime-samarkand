import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const HelpText = () => {
    return (
        <div id="help-text">
            <h4>Help text</h4>
            <p>Block-level help text in forms can be created using <code>.form-text</code> (previously known as <code>.help-block</code> in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like <code>.text-muted</code>.</p>

            <div className="bd-callout bd-callout-warning">
                <h5>Associating help text with form controls</h5>

                <p>Help text should be explicitly associated with the form control it relates to using the <code>aria-describedby</code> attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.</p>
            </div>

            <p>Help text below inputs can be styled with <code>.form-text</code>. This class includes <code>display: block</code> and adds some top margin for easy spacing from the inputs above.</p>

            <div className="bd-example">
                <label htmlFor="inputPassword5">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                <small id="passwordHelpBlock" className="form-text text-muted">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
            </div>

            <PrismCode
                code={
                '<label htmlFor="inputPassword5">Password</label>\n' +
                '<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock">\n' +
                '  <small id="passwordHelpBlock" className="form-text text-muted">\n' +
                '    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.\n' +
                '  </small>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Inline text can use any typical inline HTML element (be it a <code>&lt;small&gt;</code>, <code>&lt;span&gt;</code>, or something else) with nothing more than a utility class.</p>

            <div className="bd-example">
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="inputPassword6">Password</label>
                        <input type="password" id="inputPassword6" className="form-control mx-sm-3" aria-describedby="passwordHelpInline" />
                        <small id="passwordHelpInline" className="text-muted">Must be 8-20 characters long.</small>
                    </div>
                </form>
            </div>

            <PrismCode
                code={
                '<form className="form-inline">\n' +
                '  <div className="form-group">\n' +
                '    <label htmlFor="inputPassword6">Password</label>\n' +
                '    <input type="password" id="inputPassword6" className="form-control mx-sm-3" aria-describedby="passwordHelpInline">\n' +
                '    <small id="passwordHelpInline" className="text-muted">\n' +
                '      Must be 8-20 characters long.\n' +
                '    </small>\n' +
                '  </div>\n' +
                '</form>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default HelpText;
