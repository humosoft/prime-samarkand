import React from 'react';

const ServiceInsideWidget = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Service included</h5>

                <div className="card-text">
                    <p>Full Container Load (FCL)</p>
                    <p>Reserve Sailing time</p>
                    <p>Cargo Insurance</p>
                    <p>Worldwide Transport</p>
                    <p>Support 24/7</p>
                </div>
            </div>

            <div className="card-link">
                <a className="btn btn-secondary btn-lg w-100" href={  '/contacts' }>Order plan</a>
            </div>
        </div>
    );
};

export default ServiceInsideWidget;
