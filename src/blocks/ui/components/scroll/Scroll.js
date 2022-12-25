import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const Scroll = () => {
    return (
        <div id="scroll" className="spacer m-top-xl">
            <h3>Scroll</h3>
            <p>Visitors can access a specific section of the page by clicking a link. You need to add an ID attribute to your target element. Then, use that ID in value of href attribute of your <code>&lt;a&gt;</code> tag and add a <code>.scroll-to-id</code> class.</p>

            <div className="bd-example">
                <Link title="Scroll to content" className="btn btn-primary scroll-to-id" to="content" spy={ true } smooth={ true } duration={ 0 } href="#content">Scroll to content</Link>
            </div>

            <PrismCode
                code={ ' <a className="btn btn-primary scroll-to-id" href="#content">Scroll to content</a>' }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default Scroll;
