import React from 'react';
import { Link } from 'react-scroll';

const LoadMoreNews = () => {
    return (
        <div className="loadmore spacer m-top-lg">
            <Link to="header" spy={ true } smooth={ true } duration={ 0 } title="Loadmore" className="btn btn-secondary transform-scale-h">
                Loadmore
            </Link>
        </div>
    );
};

export default LoadMoreNews;
