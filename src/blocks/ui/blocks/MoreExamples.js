import React from 'react';

const MoreExamples = ( { actionLink, actionLinkContent, contentAfter, contentBefore } ) => {
    return (
        <div className="bd-callout bd-callout-warning">
            <h5>More examples</h5>

            <p>{ contentBefore }<a href={ actionLink } target="_blank" rel="noopener noreferrer">{ actionLinkContent }</a>{ contentAfter }</p>
        </div>
    );
};

export default MoreExamples;
