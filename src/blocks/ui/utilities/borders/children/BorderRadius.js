import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const BorderRadius = () => {
    return (
        <div id="border-radius">
            <h4>Border-radius</h4>
            <p>Add classes to an element to easily round its corners.</p>

            <div className="bd-example">
                <svg
                    className="bd-placeholder-img rounded mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example rounded image: 75x75"
                >
                    <title>Example rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-top mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example top rounded image: 75x75"
                >
                    <title>Example top rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-right mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example right rounded image: 75x75"
                >
                    <title>Example right rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-bottom mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example bottom rounded image: 75x75"
                >
                    <title>Example bottom rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-left mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example left rounded image: 75x75"
                >
                    <title>Example left rounded image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-circle mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Completely round image: 75x75"
                >
                    <title>Completely round image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-pill mr-1"
                    width="150"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Rounded pill image: 150x75"
                >
                    <title>Rounded pill image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        150x75
                    </text>
                </svg>
                <svg
                    className="bd-placeholder-img rounded-0 mr-1"
                    width="75"
                    height="75"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                    role="img"
                    aria-label="Example non-rounded image (overrides rounding applied elsewhere): 75x75"
                >
                    <title>Example non-rounded image (overrides rounding applied elsewhere)</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" fill="#ffffff" dy=".3em">
                        75x75
                    </text>
                </svg>
            </div>

            <PrismCode
                code={
                    '<img src="..." alt="..." className="rounded">\n' +
                    '<img src="..." alt="..." className="rounded-top">\n' +
                    '<img src="..." alt="..." className="rounded-right">\n' +
                    '<img src="..." alt="..." className="rounded-bottom">\n' +
                    '<img src="..." alt="..." className="rounded-left">\n' +
                    '<img src="..." alt="..." className="rounded-circle">\n' +
                    '<img src="..." alt="..." className="rounded-pill">\n' +
                    '<img src="..." alt="..." className="rounded-0">'
                }
                language="html"
                plugins={ ['line-numbers'] }
            />
        </div>
    );
};

export default BorderRadius;
