import React from 'react';

const InputGroupAccessibility = () => {
    return (
        <div id="input-group-accessibility">
            <h4>Accessibility</h4>
            <p>Screen readers will have trouble with your forms if you don’t include a label for every input. For these input groups, ensure that any additional label or functionality is conveyed to assistive technologies.</p>
            <p>The exact technique to be used (<code>&lt;label&gt;</code> elements hidden using the <code>.sr-only</code> class, or use of the <code>aria-label</code> and <code>aria-labelledby</code> attributes, possibly in combination with <code>aria-describedby</code>) and what additional information will need to be conveyed will vary depending on the exact type of interface widget you’re implementing. The examples in this section provide a few suggested, case-specific approaches.</p>
        </div>
    );
};

export default InputGroupAccessibility;
