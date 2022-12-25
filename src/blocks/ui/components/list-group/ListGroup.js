import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import BasicExamples from './children/BasicExamples';
import ActiveItems from './children/ActiveItems';
import DisabledItems from './children/DisabledItems';
import LinksAndButtons from './children/LinksAndButtons';
import Flush from './children/Flush';
import Horizontal from './children/Horizontal';
import ListGroupContextualClasses from './children/ListGroupContextualClasses';
import ListGroupWithBadges from './children/ListGroupWithBadges';
import ListGroupCustomContent from './children/ListGroupCustomContent';

const ListGroup = () => {
    return (
        <div id="list-group" className="spacer m-top-xl">
            <h3>List group</h3>
            <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>

            <BasicExamples />

            <ActiveItems />

            <DisabledItems />

            <LinksAndButtons />

            <Flush />

            <Horizontal />

            <ListGroupContextualClasses />

            <ListGroupWithBadges />

            <ListGroupCustomContent />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/list-group/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default ListGroup;
