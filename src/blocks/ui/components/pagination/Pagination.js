import React from 'react';
import MoreExamples from '../../blocks/MoreExamples';
import PaginationOverview from './children/PaginationOverview';
import WorkingWithIcons from './children/WorkingWithIcons';
import DisabledAndActiveStates from './children/DisabledAndActiveStates';
import PaginationSizing from './children/PaginationSizing';
import PaginationAlignment from './children/PaginationAlignment';

const Pagination = () => {
    return (
        <div id="pagination" className="spacer m-top-xl">
            <h3>Pagination</h3>
            <p>Examples for showing pagination to indicate a series of related content exists across multiple pages.</p>

            <PaginationOverview />

            <WorkingWithIcons />

            <DisabledAndActiveStates />

            <PaginationSizing />

            <PaginationAlignment />

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/components/pagination/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Pagination;
