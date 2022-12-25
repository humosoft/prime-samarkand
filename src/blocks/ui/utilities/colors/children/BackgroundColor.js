import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const BackgroundColor = () => {
    return (
        <div id="background-color">
            <h4>Background color</h4>
            <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>

            <div className="bd-example">
                <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
                <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
                <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
                <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
                <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
                <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
                <div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
            </div>

            <PrismCode
                code={ '<div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>\n' +
                '<div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>\n' +
                '<div className="p-3 mb-2 bg-success text-white">.bg-success</div>\n' +
                '<div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>\n' +
                '<div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>\n' +
                '<div className="p-3 mb-2 bg-info text-white">.bg-info</div>\n' +
                '<div className="p-3 mb-2 bg-light text-dark">.bg-light</div>\n' +
                '<div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>\n' +
                '<div className="p-3 mb-2 bg-white text-dark">.bg-white</div>\n' +
                '<div className="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default BackgroundColor;
