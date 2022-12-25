import React from 'react';

const NewsTags = () => {
    return (
        <div className="tags">
            <p>
                <span className="tags-title">Tags:</span>
                <a title="Art" href={  '/news' }>Logistic</a>
                <a title="Culture" href={  '/news' }>Transportation</a>
                <a title="Capital" href={  '/news' }>Storage</a>
            </p>
        </div>
    );
};

export default NewsTags;
