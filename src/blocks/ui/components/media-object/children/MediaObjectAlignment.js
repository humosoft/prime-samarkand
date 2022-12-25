import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const MediaObjectAlignment = () => {
    return (
        <div id="media-object-alignment">
            <h4>Alignment</h4>
            <p>Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your <code>.media-body</code> content.</p>

            <div className="bd-example">
                <div className="media">
                    <svg className="bd-placeholder-img align-self-start mr-3" width="64" height="64"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div className="media-body">
                        <h5>Top-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="media">\n' +
                '  <img src="..." className="mr-3" alt="..."/>\n' +
                '  <div className="media-body">\n' +
                '    <h5>Top-aligned media</h5>\n' +
                '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="media">
                    <svg className="bd-placeholder-img align-self-center mr-3" width="64" height="64"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div className="media-body">
                        <h5>Center-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="media">\n' +
                '  <img src="..." className="mr-3" alt="..."/>\n' +
                '  <div className="media-body">\n' +
                '    <h5>Center-aligned media</h5>\n' +
                '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="media">
                    <svg className="bd-placeholder-img align-self-end mr-3" width="64" height="64"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img">
                        <title>64x64</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">64x64</text>
                    </svg>
                    <div className="media-body">
                        <h5>Bottom-aligned media</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="media">\n' +
                '  <img src="..." className="mr-3" alt="..."/>\n' +
                '  <div className="media-body">\n' +
                '    <h5>Bottom-aligned media</h5>\n' +
                '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default MediaObjectAlignment;
