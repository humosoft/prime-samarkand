import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ListGroupContextualClasses = () => {
    return (
        <div id="list-group-contextual-classes">
            <h4>Contextual classes</h4>
            <p>Use contextual classes to style list items with a stateful background and color.</p>

            <div className="bd-example">
                <ul className="list-group">
                    <li className="list-group-item">Dapibus ac facilisis in</li>

                    <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
                    <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                    <li className="list-group-item list-group-item-success">A simple success list group item</li>
                    <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
                    <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
                    <li className="list-group-item list-group-item-info">A simple info list group item</li>
                    <li className="list-group-item list-group-item-light">A simple light list group item</li>
                    <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
                </ul>
            </div>

            <PrismCode
                code={
                '<ul className="list-group">\n' +
                '  <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                '\n' +
                '  <li className="list-group-item list-group-item-primary">A simple primary list group item</li>\n' +
                '  <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>\n' +
                '  <li className="list-group-item list-group-item-success">A simple success list group item</li>\n' +
                '  <li className="list-group-item list-group-item-danger">A simple danger list group item</li>\n' +
                '  <li className="list-group-item list-group-item-warning">A simple warning list group item</li>\n' +
                '  <li className="list-group-item list-group-item-info">A simple info list group item</li>\n' +
                '  <li className="list-group-item list-group-item-light">A simple light list group item</li>\n' +
                '  <li className="list-group-item list-group-item-dark">A simple dark list group item</li>\n' +
                '</ul>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <p>Contextual classes also work with <code>.list-group-item-action</code>. Note the addition of the hover styles here not present in the previous example. Also supported is the <code>.active</code> state; apply it to indicate an active selection on a contextual list group item.</p>

            <div className="bd-example">
                <div className="list-group">
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>

                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
                    <a href="#list-group-contextual-classes/action" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
                </div>
            </div>

            <PrismCode
                code={
                '<div className="list-group">\n' +
                '  <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>\n' +
                '\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>\n' +
                '  <a href="#" className="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>\n' +
                '</div>'
                }
                language="html"
                plugins={ ["line-numbers"] }
            />

            <div className="bd-callout bd-callout-warning">
                <h5>Conveying meaning to assistive technologies</h5>

                <p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.sr-only</code> class.</p>
            </div>
        </div>
    );
};

export default ListGroupContextualClasses;
