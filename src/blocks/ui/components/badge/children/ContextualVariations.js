import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const ContextualVariations = () => {
  return (
    <div id="contextual-variations">
      <h4>Contextual variations</h4>
      <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

      <div className="bd-example">
        <span className="badge badge-primary mr-1">Primary</span>
        <span className="badge badge-secondary mr-1">Secondary</span>
        <span className="badge badge-success mr-1">Success</span>
        <span className="badge badge-danger mr-1">Danger</span>
        <span className="badge badge-warning mr-1">Warning</span>
        <span className="badge badge-info mr-1">Info</span>
        <span className="badge badge-light mr-1">Light</span>
        <span className="badge badge-dark">Dark</span>
      </div>

      <PrismCode
        code={
          '<span className="badge badge-primary">Primary</span>\n' +
          '<span className="badge badge-secondary">Secondary</span>\n' +
          '<span className="badge badge-success">Success</span>\n' +
          '<span className="badge badge-danger">Danger</span>\n' +
          '<span className="badge badge-warning">Warning</span>\n' +
          '<span className="badge badge-info">Info</span>\n' +
          '<span className="badge badge-light">Light</span>\n' +
          '<span className="badge badge-dark">Dark</span>'
        }
        language="html"
        plugins={['line-numbers']}
      />

      <div className="bd-callout bd-callout-warning">
        <h5 id="conveying-meaning-to-assistive-technologies">Conveying meaning to assistive technologies</h5>

        <p>
          Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such
          as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text),
          or is included through alternative means, such as additional text hidden with the <code>.sr-only</code> class.
        </p>
      </div>
    </div>
  );
};

export default ContextualVariations;
