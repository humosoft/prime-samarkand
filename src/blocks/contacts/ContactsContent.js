import React from 'react';
import Map from '../google-maps/Map';

import ContactsAccordion from './ContactsAccordion';

const ContactsContent = () => {
    return (
        <div id="maps" className="maps style-default">
            <Map />

            <ContactsAccordion />
        </div>
    );
};

export default ContactsContent;
