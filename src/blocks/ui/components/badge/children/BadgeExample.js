import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const BadgeExample = () => {
    return (
        <div id="badge-example">
            <h4>Example</h4>
            <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>

            <div className="bd-example">
                <h1>Heading <span className="badge badge-secondary">New</span></h1>
                <h2>Heading <span className="badge badge-secondary">New</span></h2>
                <h3>Heading <span className="badge badge-secondary">New</span></h3>
                <h4>Heading <span className="badge badge-secondary">New</span></h4>
                <h5>Heading <span className="badge badge-secondary">New</span></h5>
                <h6>Heading <span className="badge badge-secondary">New</span></h6>
            </div>

            <PrismCode
                code={
                '<h1>Heading <span className="badge badge-secondary">New</span></h1>\n' +
                '<h2>Heading <span className="badge badge-secondary">New</span></h2>\n' +
                '<h3>Heading <span className="badge badge-secondary">New</span></h3>\n' +
                '<h4>Heading <span className="badge badge-secondary">New</span></h4>\n' +
                '<h5>Heading <span className="badge badge-secondary">New</span></h5>\n' +
                '<h6>Heading <span className="badge badge-secondary">New</span></h6>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Badges can be used as part of links or buttons to provide a counter.</p>

            <div className="bd-example">
                <button type="button" className="btn btn-primary">
                    Notifications <span className="badge badge-light">4</span>
                </button>
            </div>

            <PrismCode
                code={
                '<button type="button" className="btn btn-primary">\n' +
                '  Notifications <span className="badge badge-light">4</span>\n' +
                '</button>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.</p>

            <p>Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.</p>

            <div className="bd-example">
                <button type="button" className="btn btn-primary">
                    Profile <span className="badge badge-light">9</span>
                    <span className="sr-only">unread messages</span>
                </button>
            </div>

            <PrismCode
                code={
                '<button type="button" className="btn btn-primary">\n' +
                '  Profile <span className="badge badge-light">9</span>\n' +
                '  <span className="sr-only">unread messages</span>\n' +
                '</button>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default BadgeExample;
