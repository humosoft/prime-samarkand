import React from 'react';

const NewsMeta = () => {
    return (
        <div className="meta">
            <p>
                <span className="date s-small bold">January 5, 2020</span>

                <span><a className="a-small bold" href={  '/news-single-page' }>By admin</a></span>

                <span className="s-small bold"> - </span>

                <span className="s-small bold">Comments (4)</span>

                <span className="s-small bold"> - </span>

                <span className="category"><a title="Uncategorized" className="a-small bold" href={  '/news' }>Uncategorized</a></span>
            </p>
        </div>
    );
};

export default NewsMeta;
