import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const CardPost = () => {
    return (
        <div id="card-post">
            <h4>Card post</h4>

            <div className="card-post-example">
                <h5>Example</h5>

                <div className="bd-example">
                    <div className="row">

                        <div className="col-6">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title="Post name" href="#card-post/action">
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <svg
                                                    className="bd-placeholder-img card-img-top"
                                                    width="100%"
                                                    height="180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    focusable="false"
                                                    role="img"
                                                >
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-category">
                                        <a title="Category" className="btn btn-sm btn-secondary transform-scale-h border-0" href="#card-post/action">Category</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="Neque porro quisquam est qui" href="#card-post/action">
                                            Neque porro quisquam est qui
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title="Post name" href="#card-post/action">
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <svg
                                                    className="bd-placeholder-img card-img-top"
                                                    width="100%"
                                                    height="180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    focusable="false"
                                                    role="img"
                                                >
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-category">
                                        <a title="Category" className="btn btn-sm btn-secondary transform-scale-h border-0" href="#card-post/action">Category</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="Neque porro quisquam est qui" href="#card-post/action">
                                            Neque porro quisquam est qui
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={
                        '<div className="row">\n' +
                        '  <div className="col-6">\n' +
                        '    <div className="card card-post">\n' +
                        '      <div className="card-top position-relative">\n' +
                        '        <a title="Post name" href="#">\n' +
                        '          <div className="img object-fit overflow-hidden">\n' +
                        '            <div className="object-fit-cover transform-scale-h">\n' +
                        '              <img src="..." className="card-img-top" alt="...">\n' +
                        '              <div class="img-bg-color"></div>\n' +
                        '            </div>\n' +
                        '          </div>\n' +
                        '        </a>\n' +
                        '        <div class="card-category">\n' +
                        '          <a title="Category" class="btn btn-sm btn-secondary transform-scale-h border-0" href="#">Category</a>\n' +
                        '        </div>\n' +
                        '      </div>\n' +
                        '      <div className="card-body">\n' +
                        '        <h5 className="card-title">\n' +
                        '          <a title="Neque porro quisquam est qui" href="#">Neque porro quisquam est qui</a>\n' +
                        '        </h5>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div className="col-6">\n' +
                        '    <div className="card card-post">\n' +
                        '      <div className="card-top position-relative">\n' +
                        '        <a title="Post name" href="#">\n' +
                        '          <div className="img object-fit overflow-hidden">\n' +
                        '            <div className="object-fit-cover transform-scale-h">\n' +
                        '              <img src="..." className="card-img-top" alt="...">\n' +
                        '              <div class="img-bg-color"></div>\n' +
                        '            </div>\n' +
                        '          </div>\n' +
                        '        </a>\n' +
                        '        <div class="card-category">\n' +
                        '          <a title="Category" class="btn btn-sm btn-secondary transform-scale-h border-0" href="#">Category</a>\n' +
                        '        </div>\n' +
                        '      </div>\n' +
                        '      <div className="card-body">\n' +
                        '        <h5 className="card-title">\n' +
                        '          <a title="Neque porro quisquam est qui" href="#">Neque porro quisquam est qui</a>\n' +
                        '        </h5>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>

            <div className="card-post-sticky">
                <h5>Sticky</h5>
                    <p>
                        Add class <code>.sticky</code> to .card-post.
                    </p>

                  <div className="bd-example">
                      <div className="row">

                      <div className="col-6">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title="Post name" href="#card-post/action">
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <svg
                                                    className="bd-placeholder-img card-img-top"
                                                    width="100%"
                                                    height="180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    focusable="false"
                                                    role="img"
                                                >
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-category">
                                        <a title="Category" className="btn btn-sm btn-secondary transform-scale-h border-0" href="#card-post/action">Category</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="Neque porro quisquam est qui" href="#card-post/action">
                                            Neque porro quisquam est qui
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card card-post">
                                <div className="card-top position-relative">
                                    <a title="Post name" href="#card-post/action">
                                        <div className="img object-fit overflow-hidden">
                                            <div className="object-fit-cover transform-scale-h">
                                                <svg
                                                    className="bd-placeholder-img card-img-top"
                                                    width="100%"
                                                    height="180"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    focusable="false"
                                                    role="img"
                                                >
                                                    <title>Image cap</title>
                                                    <rect width="100%" height="100%"></rect>
                                                    <text x="50%" y="50%" dy=".3em">Image cap</text>
                                                </svg>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="card-category">
                                        <a title="Category" className="btn btn-sm btn-secondary transform-scale-h border-0" href="#card-post/action">Category</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="Neque porro quisquam est qui" href="#card-post/action">
                                            Neque porro quisquam est qui
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={
                      '<div className="row">\n' +
                      '  <div className="col-6">\n' +
                      '    <div className="card card-post sticky">\n' +
                      '      <div className="card-top position-relative">\n' +
                      '        <a title="Post name" href="#">\n' +
                      '          <div className="img object-fit overflow-hidden">\n' +
                      '            <div className="object-fit-cover transform-scale-h">\n' +
                      '              <img src="..." className="card-img-top" alt="...">\n' +
                      '              <div class="img-bg-color"></div>\n' +
                      '            </div>\n' +
                      '          </div>\n' +
                      '        </a>\n' +
                      '        <div class="card-category">\n' +
                      '          <a title="Category" class="btn btn-sm btn-secondary transform-scale-h border-0" href="#">Category</a>\n' +
                      '        </div>\n' +
                      '      </div>\n' +
                      '      <div className="card-body">\n' +
                      '        <h5 className="card-title">\n' +
                      '          <a title="Neque porro quisquam est qui" href="#">Neque porro quisquam est qui</a>\n' +
                      '        </h5>\n' +
                      '      </div>\n' +
                      '    </div>\n' +
                      '  </div>\n' +
                      '  <div className="col-6">\n' +
                      '    <div className="card card-post">\n' +
                      '      <div className="card-top position-relative">\n' +
                      '        <a title="Post name" href="#">\n' +
                      '          <div className="img object-fit overflow-hidden">\n' +
                      '            <div className="object-fit-cover transform-scale-h">\n' +
                      '              <img src="..." className="card-img-top" alt="...">\n' +
                      '              <div class="img-bg-color"></div>\n' +
                      '            </div>\n' +
                      '          </div>\n' +
                      '        </a>\n' +
                      '        <div class="card-category">\n' +
                      '          <a title="Category" class="btn btn-sm btn-secondary transform-scale-h border-0" href="#">Category</a>\n' +
                      '        </div>\n' +
                      '      </div>\n' +
                      '      <div className="card-body">\n' +
                      '        <h5 className="card-title">\n' +
                      '          <a title="Neque porro quisquam est qui" href="#">Neque porro quisquam est qui</a>\n' +
                      '        </h5>\n' +
                      '      </div>\n' +
                      '    </div>\n' +
                      '  </div>\n' +
                      '</div>'
                  }
                  language="html"
                  plugins={['line-numbers']}
                />
            </div>

            <div className="card-post-no-thumbnail">
                <h5>No thumbnail</h5>
                <p>
                    Add class <code>.no-thumbnail</code> to .card-post.
                </p>

                <div className="bd-example">
                    <div className="row">

                        <div className="col-6">
                            <div className="card card-post no-thumbnail">
                                <div className="card-top position-relative">
                                    <div className="card-category">
                                        <a title="Category" className="btn btn-sm btn-secondary transform-scale-h border-0" href="#card-post-no-thumbnail/action">Category</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#card-post-no-thumbnail/action">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card card-post no-thumbnail">
                                <div className="card-top position-relative">
                                    <div className="card-category">
                                        <a title="Category" className="btn btn-sm btn-secondary transform-scale-h border-0" href="#card-post-no-thumbnail/action">Category</a>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#card-post-no-thumbnail/action">Neque porro quisquam est qui dolorem ipsum quia</a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PrismCode
                    code={
                        '<div class="row">\n' +
                        '  <div class="col-6">\n' +
                        '    <div class="card card-post no-thumbnail">\n' +
                        '      <div class="card-top position-relative">\n' +
                        '        <div class="card-category">\n' +
                        '          <a title="Category" class="btn btn-sm btn-secondary transform-scale-h border-0" href="#">Category</a>\n' +
                        '        </div>\n' +
                        '      </div>\n' +
                        '      <div class="card-body">\n' +
                        '        <h5 class="card-title">\n' +
                        '          <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>\n' +
                        '        </h5>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '  <div class="col-6">\n' +
                        '    <div class="card card-post no-thumbnail">\n' +
                        '      <div class="card-top position-relative">\n' +
                        '        <div class="card-category">\n' +
                        '          <a title="Category" class="btn btn-sm btn-secondary transform-scale-h border-0" href="#">Category</a>\n' +
                        '        </div>\n' +
                        '      </div>\n' +
                        '      <div class="card-body">\n' +
                        '        <h5 class="card-title">\n' +
                        '          <a title="Neque porro quisquam est qui dolorem ipsum quia" href="#">Neque porro quisquam est qui dolorem ipsum quia</a>\n' +
                        '        </h5>\n' +
                        '      </div>\n' +
                        '    </div>\n' +
                        '  </div>\n' +
                        '</div>'
                    }
                    language="html"
                    plugins={['line-numbers']}
                />
            </div>
        </div>
    );
};

export default CardPost;
