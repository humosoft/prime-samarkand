import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const Icons = () => {
    return (
        <div id="icons" className="spacer m-top-xl">
            <h3>Icons</h3>
            <p>More than 1,550 beautifully crafted icons with some helper classes.</p>

            <div id="fontawesome">
                <h4>FontAwesome</h4>
                <p>Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.</p>

                <div className="bd-example">
                    <i className="fa fa-home"></i>
                </div>

                <PrismCode
                    code={ '<i className="fa fa-home"></i>' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <MoreExamples actionLink="https://fontawesome.com/cheatsheet?from=io"
                          actionLinkContent="available icons"
                          contentBefore="You can see the list of"
                          contentAfter="online."
            />
        </div>
    );
};

export default Icons;
