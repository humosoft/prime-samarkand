import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const AspectRatios = () => {
    return (
        <div id="aspect-ratios">
            <h4>Aspect ratios</h4>
            <p>Aspect ratios can be customized with modifier classes. By default the following ratio classes are provided:</p>

            <PrismCode
                code={ '<!-- 21:9 aspect ratio -->\n' +
                '<div className="embed-responsive embed-responsive-21by9">\n' +
                '  <iframe className="embed-responsive-item" src="..."></iframe>\n' +
                '</div>\n' +
                '\n' +
                '<!-- 16:9 aspect ratio -->\n' +
                '<div className="embed-responsive embed-responsive-16by9">\n' +
                '  <iframe className="embed-responsive-item" src="..."></iframe>\n' +
                '</div>\n' +
                '\n' +
                '<!-- 4:3 aspect ratio -->\n' +
                '<div className="embed-responsive embed-responsive-4by3">\n' +
                '  <iframe className="embed-responsive-item" src="..."></iframe>\n' +
                '</div>\n' +
                '\n' +
                '<!-- 1:1 aspect ratio -->\n' +
                '<div className="embed-responsive embed-responsive-1by1">\n' +
                '  <iframe className="embed-responsive-item" src="..."></iframe>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default AspectRatios;
