import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const RelativeToTheParent = () => {
    return (
        <div id="relative-to-the-parent">
            <h4>Relative to the parent</h4>
            <p>Includes support for <code>25%</code>, <code>50%</code>, <code>75%</code>, <code>100%</code>, and <code>auto</code> by default.</p>

            <div className="bd-example">
                <div className="w-25 p-3 bd-highlight">Width 25%</div>
                <div className="w-50 p-3 bd-highlight">Width 50%</div>
                <div className="w-75 p-3 bd-highlight">Width 75%</div>
                <div className="w-100 p-3 bd-highlight">Width 100%</div>
                <div className="w-auto p-3 bd-highlight">Width auto</div>
            </div>

            <PrismCode
                code={ '<div className="w-25 p-3 bd-highlight">Width 25%</div>\n' +
                '<div className="w-50 p-3 bd-highlight">Width 50%</div>\n' +
                '<div className="w-75 p-3 bd-highlight">Width 75%</div>\n' +
                '<div className="w-100 p-3 bd-highlight">Width 100%</div>\n' +
                '<div className="w-auto p-3 bd-highlight">Width auto</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="bd-highlight" style={ { "height": "100px" } }>
                    <div className="h-25 d-inline-block bd-highlight" style={ { "width": "120px" } }>Height 25%</div>
                    <div className="h-50 d-inline-block bd-highlight" style={ { "width": "120px" } }>Height 50%</div>
                    <div className="h-75 d-inline-block bd-highlight" style={ { "width": "120px" } }>Height 75%</div>
                    <div className="h-100 d-inline-block bd-highlight" style={ { "width": "120px" } }>Height 100%</div>
                    <div className="h-auto d-inline-block bd-highlight" style={ { "width": "120px" } }>Height auto</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="bd-highlight" style="height: 100px;">\n' +
                '  <div className="h-25 d-inline-block bd-highlight" style="width: 120px">Height 25%</div>\n' +
                '  <div className="h-50 d-inline-block bd-highlight" style="width: 120px">Height 50%</div>\n' +
                '  <div className="h-75 d-inline-block bd-highlight" style="width: 120px">Height 75%</div>\n' +
                '  <div className="h-100 d-inline-block bd-highlight" style="width: 120px">Height 100%</div>\n' +
                '  <div className="h-auto d-inline-block bd-highlight" style="width: 120px">Height auto</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>You can also use <code>min-width: 100%; max-width: 100%;</code> and <code>max-height: 100%;</code> utilities as needed.</p>

            <svg className="bd-placeholder-img mw-100" width="100%" height="100" xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                 aria-label="Placeholder: Max-width 100%">
                <title>Placeholder</title>
                <rect width="100%" height="100%"></rect>
                <text x="50%" y="50%" fill="#ffffff" dy=".3em">Max-width 100%</text>
            </svg>

            <figure className="highlight">
                <pre><code className="language-html">&lt;img src=&quot;...&quot; className=&quot;mw-100&quot; alt=&quot;...&quot;&gt;</code></pre>
            </figure>

            <div className="bd-example">
                <div className="bd-highlight" style={ { "height": "100px" } }>
                    <div className="mh-100 bd-highlight" style={ { "width": "100px", "height": "200px" } }>Max-height 100%</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="bd-highlight" style="height: 100px;">\n' +
                '  <div className="mh-100 bd-highlight" style="width: 100px; height: 200px">Max-height 100%</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default RelativeToTheParent;
