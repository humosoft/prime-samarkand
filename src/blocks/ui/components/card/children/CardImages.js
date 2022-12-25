import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const CardImages = () => {
    return (
        <div id="card-images">
            <h4>Card images</h4>
            <p>Cards include a few options for working with images. Choose from appending “image caps” at either end of a card, overlaying images with card content, or simply embedding the image in a card.</p>

            <div id="image-caps">
                <h5>Image caps</h5>
                <p>Similar to headers and footers, cards can include top and bottom “image caps”—images at the top or bottom of a card.</p>

                <div className="bd-example">
                    <div className="card mb-3">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">Image cap</text>
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                        <svg className="bd-placeholder-img card-img-bottom" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">Image cap</text>
                        </svg>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card mb-3">\n' +
                    '  <img src="..." className="card-img-top" alt="...">\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Card title</h5>\n' +
                    '    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '    <p className="card-text">\n' +
                    '      <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '    </p>\n' +
                    '  </div>\n' +
                    '</div>\n' +
                    '<div className="card">\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Card title</h5>\n' +
                    '    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '    <p className="card-text">\n' +
                    '      <small className="text-muted">Last updated 3 mins ago</small>\n' +
                    '    </p>\n' +
                    '  </div>\n' +
                    '  <img src="..." className="card-img-top" alt="...">\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="image-overlays">
                <h5>Image overlays</h5>
                <p>Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need additional styles or utilities.</p>

                <div className="bd-example">
                    <div className="card bg-dark text-white">
                        <svg className="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="270" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%"></rect>
                            <text x="50%" y="50%" dy=".3em">Card image</text>
                        </svg>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card bg-dark text-white">\n' +
                    '  <img src="..." className="card-img" alt="...">\n' +
                    '  <div className="card-img-overlay">\n' +
                    '    <h5 className="card-title">Card title</h5>\n' +
                    '    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n' +
                    '    <p className="card-text">Last updated 3 mins ago</p>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default CardImages;
