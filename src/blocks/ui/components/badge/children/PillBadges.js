import React from 'react';
import { PrismCode } from '../../../../../components/prsimjs/Prismjs';

const PillBadges = () => {
  return (
    <div id="pill-badges">
      <h4>Pill badges</h4>
      <p>
        Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional
        horizontal <code>padding</code>).
      </p>

      <div className="bd-example">
        <span className="badge badge-pill badge-primary mr-1">Primary</span>
        <span className="badge badge-pill badge-secondary mr-1">Secondary</span>
        <span className="badge badge-pill badge-success mr-1">Success</span>
        <span className="badge badge-pill badge-danger mr-1">Danger</span>
        <span className="badge badge-pill badge-warning mr-1">Warning</span>
        <span className="badge badge-pill badge-info mr-1">Info</span>
        <span className="badge badge-pill badge-light mr-1">Light</span>
        <span className="badge badge-pill badge-dark">Dark</span>
      </div>

      <PrismCode
        code={
          '<span className="badge badge-pill badge-primary">Primary</span>\n' +
          '<span className="badge badge-pill badge-secondary">Secondary</span>\n' +
          '<span className="badge badge-pill badge-success">Success</span>\n' +
          '<span className="badge badge-pill badge-danger">Danger</span>\n' +
          '<span className="badge badge-pill badge-warning">Warning</span>\n' +
          '<span className="badge badge-pill badge-info">Info</span>\n' +
          '<span className="badge badge-pill badge-light">Light</span>\n' +
          '<span className="badge badge-pill badge-dark">Dark</span>'
        }
        language="html"
        plugins={['line-numbers']}
      />
    </div>
  );
};

export default PillBadges;
