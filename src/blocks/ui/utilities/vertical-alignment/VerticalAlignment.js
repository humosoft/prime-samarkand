import React from 'react';
import { PrismCode } from '../../../../components/prsimjs/Prismjs';
import MoreExamples from '../../blocks/MoreExamples';

const VerticalAlignment = () => {
    return (
        <div id="vertical-alignment" className="spacer m-top-xl">
            <h3>Vertical alignment</h3>
            <p>Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.</p>

            <p>Change the alignment of elements with the <code>vertical-alignment</code> utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.</p>

            <p>Choose from <code>.align-baseline</code>, <code>.align-top</code>, <code>.align-middle</code>, <code>.align-bottom</code>, <code>.align-text-bottom</code>, and <code>.align-text-top</code> as needed.</p>

            <p>With inline elements:</p>

            <div className="bd-example">
                <span className="align-baseline">baseline</span>
                <span className="align-top">top</span>
                <span className="align-middle">middle</span>
                <span className="align-bottom">bottom</span>
                <span className="align-text-top">text-top</span>
                <span className="align-text-bottom">text-bottom</span>
            </div>

            <PrismCode
                code={ '<span className="align-baseline">baseline</span>\n' +
                '<span className="align-top">top</span>\n' +
                '<span className="align-middle">middle</span>\n' +
                '<span className="align-bottom">bottom</span>\n' +
                '<span className="align-text-top">text-top</span>\n' +
                '<span className="align-text-bottom">text-bottom</span>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>With table cells:</p>

            <div className="bd-example">
                <table style={ { "height": "100px" } }>
                    <tbody>
                    <tr>
                        <td className="align-baseline">baseline</td>
                        <td className="align-top">top</td>
                        <td className="align-middle">middle</td>
                        <td className="align-bottom">bottom</td>
                        <td className="align-text-top">text-top</td>
                        <td className="align-text-bottom">text-bottom</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <PrismCode
                code={ '<table style="height: 100px;">\n' +
                '  <tbody>\n' +
                '    <tr>\n' +
                '      <td className="align-baseline">baseline</td>\n' +
                '      <td className="align-top">top</td>\n' +
                '      <td className="align-middle">middle</td>\n' +
                '      <td className="align-bottom">bottom</td>\n' +
                '      <td className="align-text-top">text-top</td>\n' +
                '      <td className="align-text-bottom">text-bottom</td>\n' +
                '    </tr>\n' +
                '  </tbody>\n' +
                '</table>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/utilities/vertical-align/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default VerticalAlignment;
