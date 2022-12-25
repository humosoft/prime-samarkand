import React from 'react';
import { Link } from 'react-scroll/modules';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const AligningImages = () => {
    return (
        <div id="image-thumbnails">
            <h4>Aligning images</h4>
            <p>Align images with the <Link className="scroll-to-id" to="float" spy={ true } smooth={ true } duration={ 0 } href="#float">helper float classes</Link> or <Link className="scroll-to-id" to="text-alignment" spy={ true } smooth={ true } duration={ 0 } href="#text-alignment">text alignment classes</Link>. <code>block</code>-level images can be centered using <Link className="scroll-to-id" to="horizontal-centering" spy={ true } smooth={ true } duration={ 0 } href="#horizontal-centering">the <code>.mx-auto</code> margin utility class</Link>.</p>

            <div className="bd-example bd-example-images clearfix">
                <svg className="bd-placeholder-img rounded float-left" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>200x200</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>

                <svg className="bd-placeholder-img rounded float-right" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>200x200</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>
            </div>

            <PrismCode
                code={
                '<img src="..." className="rounded float-left" alt="..."> \n' +
                '<img src="..." className="rounded float-right" alt="...">' }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example bd-example-images">
                <svg className="bd-placeholder-img rounded mx-auto d-block" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%"></rect>
                    <text x="50%" y="50%" dy=".3em">200x200</text>
                </svg>
            </div>

            <PrismCode
                code={ '<img src="..." className="rounded mx-auto d-block" alt="...">' }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example bd-example-images">
                <div className="text-center">
                    <svg className="bd-placeholder-img rounded" width="200" height="200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">200x200</text>
                    </svg>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="text-center">\n' +
                '  <img src="..." className="rounded" alt="...">\n' +
                '</div>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default AligningImages;
