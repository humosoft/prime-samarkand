import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const CardExample = () => {
    return (
        <div id="card-example">
            <h4>Example</h4>
            <p>Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no <code>margin</code> by default, so use <Link title="Spacing" className="scroll-to-id" to="spacing" spy={ true } smooth={ true } duration={ 0 } href="#spacing">spacing utilities</Link> as needed.</p>
            <p>Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element. This is easily customized with our various <Link title="Card-sizing" className="scroll-to-id" to="card-sizing" spy={ true } smooth={ true } duration={ 0 } href="#card-sizing">spacing utilities</Link>.</p>

            <div className="bd-example">
                <div className="card" style={ { maxWidth: 18 + 'rem' } }>
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>Image cap</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">Image cap</text>
                    </svg>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#card-example/action" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

            <PrismCode
                code={ '<div className="card" style="width: 18rem;">\n' +
                '  <img src="..." className="card-img-top" alt="...">\n' +
                '  <div className="card-body">\n' +
                '    <h5 className="card-title">Card title</h5>\n' +
                '    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n' +
                '    <a href="#" className="btn btn-primary">Go somewhere</a>\n' +
                '  </div>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default CardExample;
