import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const AutoMargins = () => {
    return (
        <div id="auto-margins" className="spacer m-top-lg">
            <h4>Auto margins</h4>
            <p>Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (<code>.mr-auto</code>), and pushing two items to the left (<code>.ml-auto</code>).</p>
            <p><strong>Unfortunately, IE10 and IE11 do not properly support auto margins on flex items whose parent has a non-default <code>justify-content</code> value.</strong><a href="https://stackoverflow.com/a/37535548" target="_blank" rel="noopener noreferrer">See this StackOverflow answer</a> for more details.</p>

            <div className="bd-example">
                <div className="d-flex bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex bd-highlight mb-3">
                    <div className="mr-auto p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                </div>

                <div className="d-flex bd-highlight mb-3">
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="p-2 bd-highlight">Flex item</div>
                    <div className="ml-auto p-2 bd-highlight">Flex item</div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="d-flex bd-highlight mb-3">\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="d-flex bd-highlight mb-3">\n' +
                '  <div className="mr-auto p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '</div>\n' +
                '\n' +
                '<div className="d-flex bd-highlight mb-3">\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="p-2 bd-highlight">Flex item</div>\n' +
                '  <div className="ml-auto p-2 bd-highlight">Flex item</div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default AutoMargins;
