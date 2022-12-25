import React from 'react';

const DisplayNotation = () => {
    return (
        <div id="display-notation">
            <h4>Notation</h4>
            <p>Display utility classes that apply to all breakpoints, from <code>xs</code> to <code>xl</code>, have no breakpoint abbreviation in them. This is because those classes are applied from <code>min-width: 0;</code> and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.</p>
            <p>As such, the classes are named using the format:</p>

            <ul>
                <li>
                    <code>.d-{'{value}'}</code> for <code>xs</code>
                </li>
                <li>
                    <code>
                        .d-{'{breakpoint}'}-{'{value}'}
                    </code>{' '}
                    for <code>sm</code>, <code>md</code>, <code>lg</code>, and <code>xl</code>.
                </li>
            </ul>

            <p>Where value is one of:</p>

            <ul>
                <li>
                    <code>none</code>
                </li>
                <li>
                    <code>inline</code>
                </li>
                <li>
                    <code>inline-block</code>
                </li>
                <li>
                    <code>block</code>
                </li>
                <li>
                    <code>table</code>
                </li>
                <li>
                    <code>table-cell</code>
                </li>
                <li>
                    <code>table-row</code>
                </li>
                <li>
                    <code>flex</code>
                </li>
                <li>
                    <code>inline-flex</code>
                </li>
            </ul>

            <p>The display values can be altered by changing the <code>$displays</code> variable and recompiling the SCSS.</p>

            <p>The media queries effect screen widths with the given breakpoint <em>or larger</em>. For example, <code>.d-lg-none</code> sets <code>display: none;</code> on both <code>lg</code> and <code>xl</code> screens.</p>
        </div>
    );
};

export default DisplayNotation;
