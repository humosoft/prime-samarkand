import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const MediaObjectNesting = () => {
    return (
        <div id="media-object-nesting">
            <h4>Nesting</h4>
            <p>Media objects can be infinitely nested, though we suggest you stop at some point. Place nested <code>.media</code> within the <code>.media-body</code> of a parent media object.</p>

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

                        <div className="media">
                            <a className="mr-3" href="#media-object-nesting/action">
                                <svg className="bd-placeholder-img" width="64" height="64"
                                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                     focusable="false" role="img">
                                    <title>64x64</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">64x64</text>
                                </svg>
                            </a>
                            <div className="media-body">
                                <h5>Media heading</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            </div>
                        </div>
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
                '\n' +
                '    <div className="media">\n' +
                '      <a className="mr-3" href="#">\n' +
                '        <img src="..." className="mr-3" alt="..."/>\n' +
                '      </a>\n' +
                '      <div className="media-body">\n' +
                '        <h5>Media heading</h5>\n' +
                '        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '      </div>\n' +
                '    </div>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default MediaObjectNesting;
