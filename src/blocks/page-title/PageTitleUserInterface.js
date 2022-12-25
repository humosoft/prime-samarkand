import React from 'react';

const PageTitleUserInterface = () => {
    return (
        <section id="page-title" className="block" style={ { backgroundImage: `url( ${ require( '../../assets/img/placeholder/1920x433.jpg' ) } )` } }>
            <div className="wrapper h-100">
                <div className="d-flex justify-content-between position-relative h-100">
                    <div className="align-self-center">
                        <div className="title">
                            <h1>Erso user interface (UI)</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-title-bg-color"></div>
        </section>
    );
};

export default PageTitleUserInterface;
