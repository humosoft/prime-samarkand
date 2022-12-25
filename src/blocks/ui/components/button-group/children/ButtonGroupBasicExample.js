import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const ButtonGroupBasicExample = () => {
    return (
        <div id="button-group-basic-example">
            <h4>Basic example</h4>
            <p>Wrap a series of buttons with <code>.btn</code> in <code>.btn-group</code>. Add on optional JavaScript radio and checkbox style behavior with <Link title="Button-plugin" className="scroll-to-id" to="button-plugin" spy={ true } smooth={ true } duration={ 0 } href="#button-plugin">our buttons plugin</Link>.</p>

            <div className="bd-example">
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Left</button>
                    <button type="button" className="btn btn-primary">Middle</button>
                    <button type="button" className="btn btn-primary">Right</button>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="btn-group" role="group" aria-label="Basic example">\n' +
                '  <button type="button" className="btn btn-primary">Left</button>\n' +
                '  <button type="button" className="btn btn-primary">Middle</button>\n' +
                '  <button type="button" className="btn btn-primary">Right</button>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-callout bd-callout-warning">
                <h5>Ensure correct <code>role</code> and provide a label</h5>

                <p>In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate <code>role</code> attribute needs to be provided. For button groups, this would be <code>role="group"</code>, while toolbars should have a <code>role="toolbar"</code>.</p>

                <p>In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use <code>aria-label</code>, but alternatives such as <code>aria-labelledby</code> can also be used.</p>
            </div>
        </div>
    );
};

export default ButtonGroupBasicExample;
