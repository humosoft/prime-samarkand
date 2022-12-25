import React from 'react';

const TextDecoration = () => {
    return (
        <div id="text-decoration">
            <h4>Text decoration</h4>
            <p>Remove a text decoration with a <code>.text-decoration-none</code> class.</p>

            <div className="bd-example"><a href="#text-decoration/action" className="text-decoration-none">Non-underlined link</a></div>

            <figure className="highlight">
                <pre><code className="language-html">&lt;a href=&quot;#&quot; className=&quot;text-decoration-none&quot;&gt;Non-underlined link&lt;/a&gt;</code></pre>
            </figure>
        </div>
    );
};

export default TextDecoration;
