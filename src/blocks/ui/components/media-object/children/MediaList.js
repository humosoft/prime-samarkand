import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const MediaList = () => {
    return (
        <div id="media-list">
            <h4>Media list</h4>
            <p>Because the media object has so few structural requirements, you can also use these classes on list HTML elements. On your <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code>, add the <code>.list-unstyled</code> to remove any browser default list styles, and then apply <code>.media</code> to your <code>&lt;li&gt;</code>s. As always, use spacing utilities wherever needed to fine tune.</p>

            <div className="bd-example">
                <ul className="list-unstyled">
                    <li className="media">
                        <svg className="bd-placeholder-img mr-3" width="64" height="64"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <title>64x64</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">64x64</text>
                        </svg>
                        <div className="media-body">
                            <h5>List-based media object</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </li>
                    <li className="media">
                        <svg className="bd-placeholder-img mr-3" width="64" height="64"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <title>64x64</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">64x64</text>
                        </svg>
                        <div className="media-body">
                            <h5>List-based media object</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </li>
                    <li className="media">
                        <svg className="bd-placeholder-img mr-3" width="64" height="64"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <title>64x64</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">64x64</text>
                        </svg>
                        <div className="media-body">
                            <h5>List-based media object</h5>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        </div>
                    </li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-unstyled">\n' +
                '  <li className="media">\n' +
                '    <img src="..." className="mr-3" alt="..."/>\n' +
                '    <div className="media-body">\n' +
                '      <h5>List-based media object</h5>\n' +
                '      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    </div>\n' +
                '  </li>\n' +
                '  <li className="media">\n' +
                '    <img src="..." className="mr-3" alt="..."/>\n' +
                '    <div className="media-body">\n' +
                '      <h5>List-based media object</h5>\n' +
                '      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    </div>\n' +
                '  </li>\n' +
                '  <li className="media">\n' +
                '    <img src="..." className="mr-3" alt="..."/>\n' +
                '    <div className="media-body">\n' +
                '      <h5>List-based media object</h5>\n' +
                '      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    </div>\n' +
                '  </li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default MediaList;
