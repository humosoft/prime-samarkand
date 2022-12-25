import React from 'react';
import TablesExamples from './children/TablesExamples';
import TablesHeadOptions from './children/TablesHeadOptions';
import StrippedRows from './children/StrippedRows';
import BorderedTable from './children/BorderedTable';
import BorderlessTable from './children/BorderlessTable';
import HoverableRows from './children/HoverableRows';
import SmallTable from './children/SmallTable';
import ContextualClasses from './children/ContextualClasses';
import Captions from './children/Captions';
import ResponsiveTables from './children/ResponsiveTables';
import MoreExamples from '../../blocks/MoreExamples';

const Tables = () => {
    return (
        <div id="tables" className="spacer m-top-xl">
            <h2>Tables</h2>
            <p>Examples for opt-in styling of tables.</p>

            <TablesExamples/>

            <TablesHeadOptions/>

            <StrippedRows/>

            <BorderedTable/>

            <BorderlessTable/>

            <HoverableRows/>

            <SmallTable/>

            <ContextualClasses/>

            <Captions/>

            <ResponsiveTables/>

            <MoreExamples actionLink="https://getbootstrap.com/docs/4.4/content/tables/"
                          actionLinkContent="Bootstrap 4 documentation"
                          contentBefore="For more examples and demo data, click "
                          contentAfter="."
            />
        </div>
    );
};

export default Tables;
