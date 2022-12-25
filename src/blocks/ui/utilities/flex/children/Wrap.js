import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const Wrap = () => {
    return (
        <div id="wrap" className="spacer m-top-lg">
            <h4>Wrap</h4>
            <p>Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with <code>.flex-nowrap</code>, wrapping with <code>.flex-wrap</code>, or reverse wrapping with <code>.flex-wrap-reverse</code>.</p>

            <div className="bd-example">
                <div className="d-flex flex-nowrap bd-highlight" style={ { "width": "8rem" } }>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex flex-nowrap">\n' +
                '  ...\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="d-flex flex-wrap bd-highlight">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex flex-wrap">\n' +
                '  ...\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="d-flex flex-wrap-reverse bd-highlight">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex flex-wrap-reverse">\n' +
                '  ...\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Responsive variations also exist for <code>flex-wrap</code>.</p>

            <ul>
                <li><code>.flex-nowrap</code></li>
                <li><code>.flex-wrap</code></li>
                <li><code>.flex-wrap-reverse</code></li>
                <li><code>.flex-sm-nowrap</code></li>
                <li><code>.flex-sm-wrap</code></li>
                <li><code>.flex-sm-wrap-reverse</code></li>
                <li><code>.flex-md-nowrap</code></li>
                <li><code>.flex-md-wrap</code></li>
                <li><code>.flex-md-wrap-reverse</code></li>
                <li><code>.flex-lg-nowrap</code></li>
                <li><code>.flex-lg-wrap</code></li>
                <li><code>.flex-lg-wrap-reverse</code></li>
                <li><code>.flex-xl-nowrap</code></li>
                <li><code>.flex-xl-wrap</code></li>
                <li><code>.flex-xl-wrap-reverse</code></li>
            </ul>
        </div>
    );
};

export default Wrap;
