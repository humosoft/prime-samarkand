import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ObjectFitSize = () => {
    return (
        <div id="object-fit-size">
            <h4>Object fit size</h4>

            <div className="bd-example">
                <div className="row pb-3">
                    <div className="col-4">
                        <div className="img object-fit size-5">
                            <div className="object-fit-cover">
                                <svg className="bd-placeholder-img float-right" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="img object-fit">
                            <div className="object-fit-cover">
                                <svg className="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="img object-fit size-4">
                            <div className="object-fit-cover">
                                <svg className="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-3">
                    <div className="col-4">
                        <div className="img object-fit size-3">
                            <div className="object-fit-cover">
                                <svg className="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="img object-fit size-2">
                            <div className="object-fit-cover">
                                <svg className="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="img object-fit size-1">
                            <div className="object-fit-cover">
                                <svg className="bd-placeholder-img float-right" width="100%" height="600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                                    <title>Placeholder image</title>
                                    <rect width="100%" height="100%"></rect>
                                    <text x="50%" y="50%" dy=".3em">Placeholder image</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="img object-fit size-5">\n' +
                '  <div className="object-fit-cover">\n' +
                '    <img src="..." alt="Objet fit image">\n' +
                '  </div>\n' +
                '</div>\n' +
                '<!-- Height: 112% -->\n' +
                '\n' +
                '<div className="img object-fit">\n' +
                '  <div className="object-fit-cover">\n' +
                '    <img src="..." alt="Objet fit image">\n' +
                '  </div>\n' +
                '</div>\n' +
                '<!-- Height: 100% -->\n' +
                '\n' +
                '<div className="img object-fit size-4">\n' +
                '  <div className="object-fit-cover">\n' +
                '    <img src="..." alt="Objet fit image">\n' +
                '  </div>\n' +
                '</div>\n' +
                '<!-- Height: 88% -->\n' +
                '\n' +
                '<div className="img object-fit size-3">\n' +
                '  <div className="object-fit-cover">\n' +
                '    <img src="..." alt="Objet fit image">\n' +
                '  </div>\n' +
                '</div>\n' +
                '<!-- Height: 76% -->\n' +
                '\n' +
                '<div className="img object-fit size-2">\n' +
                '  <div className="object-fit-cover">\n' +
                '    <img src="..." alt="Objet fit image">\n' +
                '  </div>\n' +
                '</div>\n' +
                '<!-- Height: 64% -->\n' +
                '\n' +
                '<div className="img object-fit size-1">\n' +
                '  <div className="object-fit-cover">\n' +
                '    <img src="..." alt="Objet fit image">\n' +
                '  </div>\n' +
                '</div>\n' +
                '<!-- Height: 52% -->\n' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default ObjectFitSize;
