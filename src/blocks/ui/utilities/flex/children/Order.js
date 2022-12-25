import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Order = () => {
    return (
        <div id="order" className="spacer m-top-lg">
            <h4>Order</h4>
            <p>Change the <em>visual</em> order of specific flex items with a handful of <code>order</code> utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order. As <code>order</code> takes any integer value (e.g., <code>5</code>), add custom CSS for any additional values needed.</p>

            <div className="bd-example">
                <div className="d-flex flex-nowrap bd-highlight">
                    <div className="order-3 p-2 bd-highlight">First flex item</div>
                    <div className="order-2 p-2 bd-highlight">Second flex item</div>
                    <div className="order-1 p-2 bd-highlight">Third flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex flex-nowrap bd-highlight">\n' +
                '  <div className="order-3 p-2 bd-highlight">First flex item</div>\n' +
                '  <div className="order-2 p-2 bd-highlight">Second flex item</div>\n' +
                '  <div className="order-1 p-2 bd-highlight">Third flex item</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Responsive variations also exist for <code>order</code>.
            </p>

            <ul>
                <li><code>.order-0</code></li>
                <li><code>.order-1</code></li>
                <li><code>.order-2</code></li>
                <li><code>.order-3</code></li>
                <li><code>.order-4</code></li>
                <li><code>.order-5</code></li>
                <li><code>.order-6</code></li>
                <li><code>.order-7</code></li>
                <li><code>.order-8</code></li>
                <li><code>.order-9</code></li>
                <li><code>.order-10</code></li>
                <li><code>.order-11</code></li>
                <li><code>.order-12</code></li>
                <li><code>.order-sm-0</code></li>
                <li><code>.order-sm-1</code></li>
                <li><code>.order-sm-2</code></li>
                <li><code>.order-sm-3</code></li>
                <li><code>.order-sm-4</code></li>
                <li><code>.order-sm-5</code></li>
                <li><code>.order-sm-6</code></li>
                <li><code>.order-sm-7</code></li>
                <li><code>.order-sm-8</code></li>
                <li><code>.order-sm-9</code></li>
                <li><code>.order-sm-10</code></li>
                <li><code>.order-sm-11</code></li>
                <li><code>.order-sm-12</code></li>
                <li><code>.order-md-0</code></li>
                <li><code>.order-md-1</code></li>
                <li><code>.order-md-2</code></li>
                <li><code>.order-md-3</code></li>
                <li><code>.order-md-4</code></li>
                <li><code>.order-md-5</code></li>
                <li><code>.order-md-6</code></li>
                <li><code>.order-md-7</code></li>
                <li><code>.order-md-8</code></li>
                <li><code>.order-md-9</code></li>
                <li><code>.order-md-10</code></li>
                <li><code>.order-md-11</code></li>
                <li><code>.order-md-12</code></li>
                <li><code>.order-lg-0</code></li>
                <li><code>.order-lg-1</code></li>
                <li><code>.order-lg-2</code></li>
                <li><code>.order-lg-3</code></li>
                <li><code>.order-lg-4</code></li>
                <li><code>.order-lg-5</code></li>
                <li><code>.order-lg-6</code></li>
                <li><code>.order-lg-7</code></li>
                <li><code>.order-lg-8</code></li>
                <li><code>.order-lg-9</code></li>
                <li><code>.order-lg-10</code></li>
                <li><code>.order-lg-11</code></li>
                <li><code>.order-lg-12</code></li>
                <li><code>.order-xl-0</code></li>
                <li><code>.order-xl-1</code></li>
                <li><code>.order-xl-2</code></li>
                <li><code>.order-xl-3</code></li>
                <li><code>.order-xl-4</code></li>
                <li><code>.order-xl-5</code></li>
                <li><code>.order-xl-6</code></li>
                <li><code>.order-xl-7</code></li>
                <li><code>.order-xl-8</code></li>
                <li><code>.order-xl-9</code></li>
                <li><code>.order-xl-10</code></li>
                <li><code>.order-xl-11</code></li>
                <li><code>.order-xl-12</code></li>
            </ul>
        </div>
    );
};

export default Order;
