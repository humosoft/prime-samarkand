import React from 'react';

const FixedTop = () => {
    return (
        <div id="fixed-top">
            <h4>Fixed top</h4>
            <p>Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.</p>

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;fixed-top&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>
        </div>
    );
};

export default FixedTop;
