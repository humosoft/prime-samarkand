import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import HorizontalCentering from './children/HorizontalCentering';
import NegativeMargin from './children/NegativeMargin';
import ContentExamples from './children/ContentExamples';

const Spacing = () => {
    return (
        <div id="spacing" className="spacer m-top-xl">
            <h3>Spacing</h3>
            <p>Wide range of shorthand responsive margin and padding utility classes to modify an element’s appearance.</p>

            <h4>How it works</h4>
            <p>Assign responsive-friendly <code>margin</code> or <code>padding</code> values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from <code>.25rem</code> to <code>3rem</code>.</p>

            <h4>Notation</h4>
            <p>Spacing utilities that apply to all breakpoints, from <code>xs</code> to <code>xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
            <p>The classes are named using the format <code>{`{property}`}{`{sides}`}-{`{size}`}</code> for <code>xs</code> and <code>{`{property}`}{`{sides}`}-{`{breakpoint}`}-{`{size}`}</code> for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.</p>
            <p>Where <em>property</em> is one of:</p>

            <ul>
                <li><code>m</code> - for classes that set <code>margin</code></li>
                <li><code>p</code> - for classes that set <code>padding</code></li>
            </ul>

            <p>Where <em>sides</em> is one of:</p>

            <ul>
                <li><code>t</code> - for classes that set <code>margin-top</code> or <code>padding-top</code></li>
                <li><code>b</code> - for classes that set <code>margin-bottom</code> or <code>padding-bottom</code></li>
                <li><code>l</code> - for classes that set <code>margin-left</code> or <code>padding-left</code></li>
                <li><code>r</code> - for classes that set <code>margin-right</code> or <code>padding-right</code></li>
                <li><code>x</code> - for classes that set both <code>*-left</code> and <code>*-right</code></li>
                <li><code>y</code> - for classes that set both <code>*-top</code> and <code>*-bottom</code></li>
                <li>blank - for classes that set a <code>margin</code> or <code>padding</code> on all 4 sides of the element</li>
            </ul>

            <HorizontalCentering />

            <NegativeMargin />

            <ContentExamples />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/spacing/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Spacing;
