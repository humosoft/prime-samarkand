import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import AlertExamples from './children/AlertExamples';
import LinkColor from './children/LinkColor';
import AdditionalContent from './children/AdditionalContent';

const Alerts = () => {
    return (
        <div id="alerts" className="spacer m-top-xl">
            <h3>Alerts</h3>
            <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

            <AlertExamples />

            <LinkColor />

            <AdditionalContent />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/alerts/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Alerts;
