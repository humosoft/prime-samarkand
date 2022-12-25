import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const MediaObjectOrder = () => {
    return (
        <div id="media-object-order">
            <h4>Order</h4>
            <p>Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</p>

            <div className="bd-example">
                <div className="media">
                    <div className="media-body">
                        <h5>Media object</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                    </div>
                    <svg className="bd-placeholder-img ml-3" width="64" height="64" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="media">\n' +
                '  <div className="media-body">\n' +
                '    <h5>Media object</h5>\n' +
                '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '  </div>\n' +
                '  <img src="..." className="mr-3" alt="..."/>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default MediaObjectOrder;
