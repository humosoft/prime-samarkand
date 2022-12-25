import React from 'react';

const Monospace = () => {
    return (
        <div id="monospace">
            <h4>Monospace</h4>
            <p>Change a selection to our monospace font stack with <code>.text-monospace</code>.</p>

            <div className="bd-example"><p className="text-monospace">This is in monospace</p></div>

            <figure className="highlight">
                <pre><code className="language-html">&lt;p className=&quot;text-monospace&quot;&gt;This is in monospace&lt;/p&gt;</code></pre>
            </figure>
        </div>
    );
};

export default Monospace;
