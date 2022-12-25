import React from 'react';

const BackToHome = () => {
    return (
        <div className="button">
            <a title="Back to homepage" className="btn btn-secondary transform-scale-h" href={  '/' }>
                Back to home
            </a>
        </div>
    );
};

export default BackToHome;
