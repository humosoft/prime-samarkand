import React, { useState } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Collapse, Button } from 'react-bootstrap';

const CollapseExample = () => {
    const [open, setOpen] = useState(false);

    return (
        <div id="collapse-example">
            <h4>Example</h4>
            <p>Click the buttons below to show and hide another element via className changes:</p>

            <ul>
                <li>
                    <code>.collapse</code> hides content
                </li>
                <li>
                    <code>.collapsing</code> is applied during transitions
                </li>
                <li>
                    <code>.collapse.show</code> shows content
                </li>
            </ul>

            <p>
                You can use a link with the <code>href</code> attribute, or a button with the <code>data-target</code> attribute. In both cases, the{' '}
                <code>data-toggle="collapse"</code> is required.
            </p>

            <div className="bd-example">
                <Button
                    className="btn btn-primary collapsed mr-1"
                    onClick={ () => setOpen( !open ) }
                    data-toggle="collapse"
                    role="button"
                    aria-expanded={open}
                    aria-controls="collapseExample"
                >
                    Link with href
                </Button>
                <Button onClick={ () => setOpen( !open ) } aria-controls="collapseExample" aria-expanded={ open }>
                    Button with data-target
                </Button>
                <Collapse in={ open }>
                    <div id="collapseExample">
                        <div className="card card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
                            craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </Collapse>
            </div>

            <PrismCode
                code={
                    '<a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">\n' +
                    'Link with href\n' +
                    '</a>\n' +
                    '<button className="btn btn-primary collapsed" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">\n' +
                    '  Button with data-target\n' +
                    '</button>\n' +
                    '\n' +
                    '<div className="collapse" id="collapseExample" >\n' +
                    '  <div className="card card-body">\n' +
                    '    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
                    '  </div>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default CollapseExample;
