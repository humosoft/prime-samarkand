import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const HiddingElements = () => {
    return (
        <div id="hidding-elements">
            <h4>Hiding elements</h4>
            <p>For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide elements responsively for each screen size.</p>
            <p>To hide elements simply use the <code>.d-none</code> class or one of the <code>.d-{`{-sm,-md,-lg,-xl}`}-none</code> classes for any responsive screen variation.</p>
            <p>To show an element only on a given interval of screen sizes you can combine one <code>.d-*-none</code> class with a <code>.d-*-*</code> class, for example <code>.d-none .d-md-block .d-xl-none</code> will hide the element for all screen sizes except on medium and large devices.</p>

            <table>
                <thead>
                <tr>
                    <th>Screen Size</th>
                    <th>Class</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Hidden on all</td>
                    <td><code>.d-none</code></td>
                </tr>

                <tr>
                    <td>Hidden only on xs</td>
                    <td><code>.d-none .d-sm-block</code></td>
                </tr>

                <tr>
                    <td>Hidden only on sm</td>
                    <td><code>.d-sm-none .d-md-block</code></td>
                </tr>

                <tr>
                    <td>Hidden only on md</td>
                    <td><code>.d-md-none .d-lg-block</code></td>
                </tr>

                <tr>
                    <td>Hidden only on lg</td>
                    <td><code>.d-lg-none .d-xl-block</code></td>
                </tr>

                <tr>
                    <td>Hidden only on xl</td>
                    <td><code>.d-xl-none</code></td>
                </tr>

                <tr>
                    <td>Visible on all</td>
                    <td><code>.d-block</code></td>
                </tr>

                <tr>
                    <td>Visible only on xs</td>
                    <td><code>.d-block .d-sm-none</code></td>
                </tr>

                <tr>
                    <td>Visible only on sm</td>
                    <td><code>.d-none .d-sm-block .d-md-none</code></td>
                </tr>

                <tr>
                    <td>Visible only on md</td>
                    <td><code>.d-none .d-md-block .d-lg-none</code></td>
                </tr>

                <tr>
                    <td>Visible only on lg</td>
                    <td><code>.d-none .d-lg-block .d-xl-none</code></td>
                </tr>

                <tr>
                    <td>Visible only on xl</td>
                    <td><code>.d-none .d-xl-block</code></td>
                </tr>
                </tbody>
            </table>

            <div className="bd-example">
                <div className="d-lg-none">hide on lg and wider screens</div>
                <div className="d-none d-lg-block">hide on screens smaller than lg</div>
            </div>

            <PrismCode
                code={ '<div className="d-lg-none">hide on lg and wider screens</div>\n' +
                '<div className="d-none d-lg-block">hide on screens smaller than lg</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default HiddingElements;
