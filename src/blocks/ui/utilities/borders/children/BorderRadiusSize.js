import React from 'react';

const BorderRadiusSize = () => {
    return (
        <div id="border-radius-size">
            <h4>Border-radius size</h4>
            <p>
                Use <code>.rounded-lg</code> or <code>.rounded-sm</code> for larger or smaller border-radius.
            </p>

            <div className="bd-example">
                <svg
                    className="bd-placeholder-img rounded-sm mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example small rounded image: 75x75"
                >
                    <title>Example small rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-lg mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example large rounded image: 75x75"
                >
                    <title>Example large rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default BorderRadiusSize;
