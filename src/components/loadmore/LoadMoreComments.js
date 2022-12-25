import React from 'react';
import { Link } from 'react-scroll';

const LoadMoreComments = () => {
    return (
        <div className="loadmore spacer m-top-lg">
            <Link to="header" spy={ true } smooth={ true } duration={ 0 } title="More comments" className="btn btn-secondary transform-scale-h" id="comment_loadmore">
                Loadmore
            </Link>
        </div>
    );
};

export default LoadMoreComments;
