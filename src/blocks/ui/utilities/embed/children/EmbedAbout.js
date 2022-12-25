import React from 'react';

const EmbedAbout = () => {
    return (
        <div id="embed-about">
            <h4>About</h4>
            <p>Rules are directly applied to <code>&lt;iframe&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;video&gt;</code>, and <code>&lt;object&gt;</code> elements; optionally use an explicit descendant class <code>.embed-responsive-item</code> when you want to match the styling for other attributes.</p>
            <p><strong>Pro-Tip!</strong> You don’t need to include <code>frameborder="0"</code> in your <code>&lt;iframe&gt;</code>s as we override that for you.</p>
        </div>
    );
};

export default EmbedAbout;
