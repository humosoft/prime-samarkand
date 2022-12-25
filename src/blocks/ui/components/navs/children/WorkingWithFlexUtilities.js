import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';
import { Link } from 'react-scroll';

const WorkingWithFlexUtilities = () => {
    return (
        <div id="working-with-flex-utilities">
            <h4>Working with flex utilities</h4>
            <p>If you need responsive nav variations, consider using a series of <Link title="Flex" className="scroll-to-id" to="flex" spy={ true } smooth={ true } duration={ 0 } href="#flex">flexbox utilities</Link>. While more verbose, these utilities offer greater customization across responsive breakpoints. In the example below, our nav will be stacked on the lowest breakpoint, then adapt to a horizontal layout that fills the available width starting from the small breakpoint.</p>

            <div className="bd-example">
                <nav className="nav nav-pills flex-column flex-sm-row">
                    <a className="flex-sm-fill text-sm-center nav-link active" href="#working-with-flex-utilities/action">Active</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#working-with-flex-utilities/action">Longer nav link</a>
                    <a className="flex-sm-fill text-sm-center nav-link" href="#working-with-flex-utilities/action">Link</a>
                    <a className="flex-sm-fill text-sm-center nav-link disabled" href="#working-with-flex-utilities/action" tabIndex="-1" aria-disabled="true">Disabled</a>
                </nav>
            </div>

            <PrismCode
                code={ '<nav className="nav nav-pills flex-column flex-sm-row">\n' +
                '  <a className="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>\n' +
                '  <a className="flex-sm-fill text-sm-center nav-link" href="#">Longer nav link</a>\n' +
                '  <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>\n' +
                '  <a className="flex-sm-fill text-sm-center nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>\n' +
                '</nav>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />
        </div>
    );
};

export default WorkingWithFlexUtilities;
