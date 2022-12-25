import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const MediaObjectExample = () => {
    return (
        <div id="media-object-example">
            <h4>Example</h4>
            <p>The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.</p>
            <p>Below is an example of a single media object. Only two classes are required—the wrapping <code>.media</code> and the <code>.media-body</code> around your content. Optional padding and margin can be controlled through <Link title="Spacing" className="scroll-to-id" to="spacing" spy={ true } smooth={ true } duration={ 0 } href="#spacing">spacing utilities</Link>.</p>

            <div className="bd-example">
                <div className="media">
                    <svg className="bd-placeholder-img mr-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div className="media-body">
                        <h5>Media heading</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                </div>
            </div>
            <PrismCode
                code={
                '<div className="media">\n' +
                '  <img src="..." className="mr-3" alt="..."/>\n' +
                '  <div className="media-body">\n' +
                '    <h5>Media heading</h5>\n' +
                '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default MediaObjectExample;
