import React from 'react';
import { Link } from 'react-scroll/modules';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ImageThumbnails = () => {
    return (
        <div id="image-thumbnails">
            <h4>Image thumbnails</h4>
            <p>In addition to our <Link className="scroll-to-id" to="borders" spy={ true } smooth={ true } duration={ 0 } href="#borders">border-radius utilities</Link>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</p>

            <div className="bd-example bd-example-images">
                <svg className="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>200x200</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>
            </div>

            <PrismCode
                code={ '<img src="..." alt="..." className="img-thumbnail"/>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ImageThumbnails;
