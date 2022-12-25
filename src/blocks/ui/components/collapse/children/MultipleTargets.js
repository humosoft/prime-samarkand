import React, { useState } from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Button, Collapse } from 'react-bootstrap';

const MultipleTargets = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <div id="multiple-targets">
            <h4>Multiple targets</h4>
            <p>
                A <code>&lt;button&gt;</code> can show and hide multiple elements by referencing them with a query selector in its{' '}
                <code>data-target</code> attribute. Multiple <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show and hide an element if
                they each reference it with their or <code>data-target</code> attribute.
            </p>

            <div className="bd-example">
                <Button onClick={ () => setOpen( !open ) } aria-controls="multiCollapseExample1" aria-expanded={ open } className="btn btn-primary mr-1">
                    Toggle first element
                </Button>
                <Button
                    onClick={ () => setOpen1( !open1 ) }
                    aria-controls="multiCollapseExample2"
                    aria-expanded={open1}
                    className="btn btn-primary mr-1"
                >
                    Toggle second element
                </Button>
                <Button
                    onClick={ () => { setOpen1( !open1 ); setOpen( !open ) } } aria-controls="multiCollapseExample2" className="btn btn-primary">
                    Toggle both elements
                </Button>
                <div className="row">
                    <div className="col">
                        <Collapse in={open}>
                            <div className="multi-collapse collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div className="col">
                        <Collapse in={open1}>
                            <div className="multi-collapse collapse" id="multiCollapseExample2">
                                <div className="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh
                                    helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

            <PrismCode
                code={
                    '<a className="btn btn-primary collapsed" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>\n' +
                    '<button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="true" aria-controls="multiCollapseExample2">Toggle second element</button>\n' +
                    '<button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="true" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>\n' +
                    '\n' +
                    '<div className="row">\n' +
                    '  <div className="col">\n' +
                    '    <div className="multi-collapse collapse" id="multiCollapseExample1" >\n' +
                    '      <div className="card card-body">\n' +
                    '        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div className="col">\n' +
                    '    <div className="multi-collapse collapse show" id="multiCollapseExample2" >\n' +
                    '      <div className="card card-body">\n' +
                    '        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.\n' +
                    '      </div>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</div>'
                }
                language="html"
                plugins={['line-numbers']}
            />
        </div>
    );
};

export default MultipleTargets;
