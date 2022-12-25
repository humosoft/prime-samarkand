import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const WithAlignItems = () => {
    return (
        <div id="with-align-items" className="spacer m-top-lg">
            <h4>With align-items</h4>
            <p>Vertically move one flex item to the top or bottom of a container by mixing <code>align-items</code>, <code>flex-direction: column</code>, and <code>margin-top: auto</code> or <code>margin-bottom: auto</code>.</p>

            <div className="bd-example">
                <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={ { "height": "200px" } }>
                    <div className="mb-auto p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex align-items-end flex-column bd-highlight mb-3" style={ { "height": "200px" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="mt-auto p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">\n' +
                '  <div className="mb-auto p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="d-flex align-items-end flex-column bd-highlight mb-3" style="height: 200px;">\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="mt-auto p-2 bd-highlight">Flex item</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default WithAlignItems;
