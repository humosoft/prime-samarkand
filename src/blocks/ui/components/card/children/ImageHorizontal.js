import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ImageHorizontal = () => {
    return (
        <div id="image-horizontal">
            <h5>Horizontal</h5>
            <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with <code>.no-gutters</code> and use <code>.col-md-*</code> classes to make the card horizontal at the <code>md</code> breakpoint. Further adjustments may be needed depending on your card content.</p>

            <div className="bd-example">
                <div className="card mb-3" style={ { "maxWidth": "540px" } }>
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <svg className="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%"></rect>
                                <text x="50%" y="50%" dy=".3em">Image</text>
                            </svg>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '' +
                '<div className="card mb-3" style="max-width: 540px;">\n' +
                '  <div className="row no-gutters">\n' +
                '    <div className="col-md-4">\n' +
                '      <img src="..." className="card-img" alt="...">\n' +
                '    </div>\n' +
                '    <div className="col-md-8">\n' +
                '      <div className="card-body">\n' +
                '        <h5 className="card-title">Card title</h5>\n' +
                '        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                '        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>\n' +
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

export default ImageHorizontal;
