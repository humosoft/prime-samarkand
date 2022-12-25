import React from 'react';

const WidgetCategories = () => {
    return (
        <div id="categories-2" className="widget widget_categories">
            <h6 className="widget-title">Categories</h6>

            <ul>
                <li className="cat-item">
                    <a title="Truck logistics" href={  '/news' }>Truck logistics</a>
                </li>

                <li className="cat-item">
                    <a title="Ship logistics" href={  '/news' }>Ship logistics</a>
                </li>

                <li className="cat-item">
                    <a title="Plane logistics" href={  '/news' }>Plane logistics</a>
                </li>

                <li className="cat-item">
                    <a title="Storage" href={  '/news' }>Storage</a>
                </li>
            </ul>
        </div>
    );
};

export default WidgetCategories;
