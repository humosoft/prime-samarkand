import React from 'react';

const WhyUsPdf = () => {
    return (
        <a className="transform-scale-h w-100 h-100" href="https://store.adveits.com/private/html/example/pdf-example.pdf" rel="noopener noreferrer" target="_blank">
            <div className="bg-dark padding-md text-white h-100">
                <div className="d-flex justify-content-between spacer m-bottom-sm">
                    <div className="align-self-center">
                        <p className="p-large bold">Service & Solutions</p>
                    </div>

                    <div className="align-self-center">
                        <p>
                            <i className="fas fas-space-l fa-file-download"></i>
                        </p>
                    </div>
                </div>

                <p>Download PDF format of our Service & Solution terms.</p>
            </div>
        </a>
    );
}

export default WhyUsPdf;
