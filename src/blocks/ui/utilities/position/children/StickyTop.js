import React from 'react';

const StickyTop = () => {
    return (
        <div id="sticky-top">
            <h4>Sticky top</h4>
            <p>Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The <code>.sticky-top</code> utility uses CSS’s <code>position: sticky</code>, which isn’t fully supported in all browsers.</p>
            <p><strong>IE11 and IE10 will render <code>position: sticky</code> as <code>position: relative</code>.</strong> As such, we wrap the styles in a <code>@supports</code> query, limiting the stickiness to only browsers that can render it properly.</p>

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;sticky-top&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>
        </div>
    );
};

export default StickyTop;
