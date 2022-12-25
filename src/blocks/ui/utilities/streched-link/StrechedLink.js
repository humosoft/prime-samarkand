import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const StrechedLink = () => {
    return (
        <div id="stretched-link" className="spacer m-top-xl">
            <h3>Stretched link</h3>
            <p>Make any HTML element or Bootstrap component clickable by “stretching” a nested link via CSS.</p>

            <p>Add <code>.stretched-link</code> to a link to make its <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block" target="_blank" rel="noopener noreferrer">containing block</a> clickable via a <code>::after</code> pseudo element. In most cases, this means that an element with <code>position: relative;</code> that contains a link with the <code>.stretched-link</code> class is clickable.</p>
            <p>Cards have <code>position: relative</code> by default in Bootstrap, so in this case you can safely add the <code>.stretched-link</code> class to a link in the card without any other HTML changes.</p>
            <p>Multiple links and tap targets are not recommended with stretched links. However, some <code>position</code> and <code>z-index</code> styles can help should this be required.</p>

            <div className="bd-example">
                <div className="card" style={ { "width": "18rem" } }>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180"
                         xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                         role="img">
                        <title>Card image cap</title>
                        <rect width="100%" height="100%"></rect>
                    </svg>
                    <div className="card-body">
                        <h5 className="card-title">Card with stretched link</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#stretched-link/action" className="btn btn-primary stretched-link">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="card">\n' +
                '  <img src="..." className="card-img-top" alt="...">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Card with stretched link</h5>\n' +
                '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                '    <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Media objects do not have <code>position: relative</code> by default, so we need to add the <code>.position-relative</code> here to prevent the link from stretching outside the media object.</p>

            <div className="bd-example">
                <div className="media position-relative">
                    <svg className="bd-placeholder-img mr-3" width="144" height="144" xmlns="http://www.w3.org/2000/svg"
                         preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Generic placeholder image</title>
                        <rect width="100%" height="100%"></rect>
                    </svg>
                    <div className="media-body">
                        <h5 className="mt-0">Media with stretched link</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p><a href="#stretched-link/action" className="stretched-link">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="media position-relative">\n' +
                '  <img src="..." className="card-img-top" alt="...">\n' +
                '  <div className="media-body">\n' +
                '    <h5 className="mt-0">Media with stretched link</h5>\n' +
                '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    <a href="#" className="stretched-link">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Columns are <code>position: relative</code> by default, so clickable columns only require the <code>.stretched-link</code> class on a link. However, stretching a link over an entire <code>.row</code> requires <code>.position-static</code> on the column and <code>.position-relative</code> on the row.</p>

            <div className="bd-example">
                <div className="row no-gutters bg-light position-relative">
                    <div className="col-md-6 mb-md-0 p-md-4">
                        <svg className="bd-placeholder-img w-100" width="100%" height="200"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <title>Generic placeholder image</title>
                            <rect width="100%" height="100%"></rect>
                        </svg>
                    </div>
                    <div className="col-md-6 position-static p-4 pl-md-0">
                        <h5 className="mt-0">Columns with stretched link</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <a href="#stretched-link/action" className="stretched-link">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="row no-gutters bg-light position-relative">\n' +
                '  <div className="col-md-6 mb-md-0 p-md-4">\n' +
                '    <img src="..." className="card-img-top" alt="...">\n' +
                '  </div>\n' +
                '  <div className="col-md-6 position-static p-4 pl-md-0">\n' +
                '    <h5 className="mt-0">Columns with stretched link</h5>\n' +
                '    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n' +
                '    <a href="#" className="stretched-link">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div id="identifying-the-containing-block">
                <h4>Identifying the containing block</h4>
                <p>If the stretched link doesn’t seem to work, the<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block" target="_blank" rel="noopener noreferrer">containing block</a> will probably be the cause. The following CSS properties will make an element the containing block:</p>

                <ul>
                    <li>A <code>position</code> value other than <code>static</code></li>
                    <li>A <code>transform</code> or <code>perspective</code> value other than <code>none</code></li>
                    <li>A <code>will-change</code> value of <code>transform</code> or <code>perspective</code></li>
                    <li>A <code>filter</code> value other than <code>none</code> or a <code>will-change</code> value of <code>filter</code> (only works on Firefox)</li>
                </ul>

                <div className="bd-example">
                    <div className="card" style={ { "width": "18rem" } }>
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="180"
                             xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                             role="img">
                            <title>Card image cap</title>
                            <rect width="100%" height="100%"></rect>
                        </svg>
                        <div className="card-body">
                            <h5 className="card-title">Card with stretched links</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="card-text">
                                <a href="#identifying-the-containing-block/action" className="stretched-link text-danger" style={ { "position": "relative" } }>Stretched link will not work here, because <code>position: relative</code> is added to the link</a>
                            </p>
                            <p className="card-text bg-light" style={ { "transform": "rotate(0)" } }>
                                This <a href="#identifying-the-containing-block/action" className="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
                            </p>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={ '<div className="card" style="width: 18rem;">\n' +
                    '  <img src="..." className="card-img-top" alt="...">\n' +
                    '  <div className="card-body">\n' +
                    '    <h5 className="card-title">Card with stretched links</h5>\n' +
                    '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                    '    <p className="card-text">\n' +
                    '      <a href="#" className="stretched-link text-danger" style="position: relative;">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>\n' +
                    '    </p>\n' +
                    '    <p className="card-text bg-light" style="transform: rotate(0);">\n' +
                    '      This <a href="#" className="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.\n' +
                    '    </p>\n' +
                    '  </div>\n' +
                    '</div>'
                    }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/stretched-link/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default StrechedLink;
