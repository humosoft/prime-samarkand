import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const AlignContent = () => {
    return (
        <div id="align-content" className="spacer m-top-lg">
            <h4>Align content</h4>
            <p>Use <code>align-content</code> utilities on flexbox containers to align flex items <em>together</em> on the cross axis. Choose from <code>start</code> (browser default), <code>end</code>, <code>center</code>, <code>between</code>, <code>around</code>, or <code>stretch</code>. To demonstrate these utilities, we’ve enforced <code>flex-wrap: wrap</code> and increased the number of flex items.</p>

            <p><strong>Heads up!</strong> This property has no effect on single rows of flex items.</p>

            <div className="bd-example">
                <div className="d-flex align-content-start flex-wrap bd-highlight mb-3" style={ { "height": "200px" } }>
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
                code={ '<div className="d-flex align-content-start flex-wrap">\n' +
                '  ...\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <div className="d-flex align-content-end flex-wrap bd-highlight mb-3" style={ { "height": "200px" } }>
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

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;d-flex align-content-end flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div className="bd-example">
                <div className="d-flex align-content-center flex-wrap bd-highlight mb-3"
                     style={ { "height": "200px" } }>
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

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;d-flex align-content-center flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div className="bd-example">
                <div className="d-flex align-content-between flex-wrap bd-highlight mb-3"
                     style={ { "height": "200px" } }>
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

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;d-flex align-content-between flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div className="bd-example">
                <div className="d-flex align-content-around flex-wrap bd-highlight mb-3"
                     style={ { "height": "200px" } }>
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

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;d-flex align-content-around flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <div className="bd-example">
                <div className="d-flex align-content-stretch flex-wrap bd-highlight mb-3"
                     style={ { "height": "200px" } }>
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

            <figure className="highlight">
                <pre><code className="language-html">&lt;div className=&quot;d-flex align-content-stretch flex-wrap&quot;&gt;...&lt;/div&gt;</code></pre>
            </figure>

            <p>Responsive variations also exist for <code>align-content</code>.</p>

            <ul>
                <li><code>.align-content-start</code></li>
                <li><code>.align-content-end</code></li>
                <li><code>.align-content-center</code></li>
                <li><code>.align-content-around</code></li>
                <li><code>.align-content-stretch</code></li>
                <li><code>.align-content-sm-start</code></li>
                <li><code>.align-content-sm-end</code></li>
                <li><code>.align-content-sm-center</code></li>
                <li><code>.align-content-sm-around</code></li>
                <li><code>.align-content-sm-stretch</code></li>
                <li><code>.align-content-md-start</code></li>
                <li><code>.align-content-md-end</code></li>
                <li><code>.align-content-md-center</code></li>
                <li><code>.align-content-md-around</code></li>
                <li><code>.align-content-md-stretch</code></li>
                <li><code>.align-content-lg-start</code></li>
                <li><code>.align-content-lg-end</code></li>
                <li><code>.align-content-lg-center</code></li>
                <li><code>.align-content-lg-around</code></li>
                <li><code>.align-content-lg-stretch</code></li>
                <li><code>.align-content-xl-start</code></li>
                <li><code>.align-content-xl-end</code></li>
                <li><code>.align-content-xl-center</code></li>
                <li><code>.align-content-xl-around</code></li>
                <li><code>.align-content-xl-stretch</code></li>
            </ul>
        </div>
    );
};

export default AlignContent;
