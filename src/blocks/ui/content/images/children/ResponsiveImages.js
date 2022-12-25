import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ResponsiveImages = () => {
    return (
        <div id="responsive-images">
            <h4>Responsive images</h4>
            <p>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>

            <div className="bd-example">
                <svg className="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>Responsive image</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">Responsive image</text>
                </svg>
            </div>

            <PrismCode
                code={ '<img src="..." className="img-fluid" alt="Responsive image"/>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ResponsiveImages;
