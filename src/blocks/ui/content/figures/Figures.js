import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';
import { Link } from 'react-scroll';

const Figures = () => {
    return (
        <div id="figures" className="spacer m-top-xl">
            <h3>Figures</h3>
            <p>Examples for displaying related images and text with the figure component.</p>
            <p>Anytime you need to display a piece of content—like an image with an optional caption, consider using a <code>&lt;figure&gt;</code>.</p>
            <p>Use the included <code>.figure</code> , <code>.figure-img</code> and <code>.figure-caption</code> classes to provide some baseline styles for the HTML5 <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements. Images in figures have no explicit size, so be sure to add the <code>.img-fluid</code> class to your <code>&lt;img&gt;</code> to make it responsive.</p>

            <div className="bd-example">
                <figure className="figure">
                    <svg className="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>400x300</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">400x300</text>
                    </svg>
                    <figcaption className="figure-caption">A caption for the above image.</figcaption>
                </figure>
            </div>

            <p className="spacer m-top-lg">Aligning the figure’s caption is easy with <Link title="Text-alignment" className="scroll-to-id" to="text-alignment" spy={ true } smooth={ true } duration={ 0 } href="#text-alignment">text utilities</Link>.</p>

            <PrismCode
                code={ '' +
                '<figure className="figure">\n' +
                '  <img src="..." className="figure-img img-fluid rounded" alt="...">\n' +
                '  <figcaption className="figure-caption">A caption for the above image.</figcaption>\n' +
                '</figure>\n'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-example">
                <figure className="figure">
                    <svg className="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
                        <title>400x300</title>
                        <rect width="100%" height="100%"></rect>
                        <text x="50%" y="50%" dy=".3em">400x300</text>
                    </svg>
                    <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>
                </figure>
            </div>

            <PrismCode
                code={ '' +
                '<figure className="figure">\n' +
                '  <img src="..." className="figure-img img-fluid rounded" alt="...">\n' +
                '  <figcaption className="figure-caption text-right">A caption for the above image.</figcaption>\n' +
                '</figure>\n'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/content/figures/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Figures;
