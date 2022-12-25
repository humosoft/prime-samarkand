import React from 'react';

const EnableFlexBehaviors = () => {
    return (
        <div id="enable-flex-behaviors">
            <h4>Enable flex behaviors</h4>
            <p>Apply <code>display</code> utilities to create a flexbox container and transform <strong>direct children elements</strong> into flex items. Flex containers and items are able to be modified further with additional flex properties.</p>

            <div className="bd-example">
                <div className="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
            </div>

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;d-flex p-2 bd-highlight&quot;&gt;I'm a flexbox container!&lt;/div&gt;</code></pre>
            </figure>

            <div className="bd-example">
                <div className="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
            </div>

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;d-inline-flex p-2 bd-highlight&quot;&gt;I'm an inline flexbox container!&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for <code>.d-flex</code> and <code>.d-inline-flex</code>.</p>

            <ul>
                <li><code>.d-flex</code></li>
                <li><code>.d-inline-flex</code></li>
                <li><code>.d-sm-flex</code></li>
                <li><code>.d-sm-inline-flex</code></li>
                <li><code>.d-md-flex</code></li>
                <li><code>.d-md-inline-flex</code></li>
                <li><code>.d-lg-flex</code></li>
                <li><code>.d-lg-inline-flex</code></li>
                <li><code>.d-xl-flex</code></li>
                <li><code>.d-xl-inline-flex</code></li>
            </ul>
        </div>
    );
};

export default EnableFlexBehaviors;
