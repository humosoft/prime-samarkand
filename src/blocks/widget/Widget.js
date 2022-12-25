import React from 'react';
import WidgetSearch from '../widget/WidgetSearch';
import WidgetRecentComments from '../widget/WidgetRecentComments';
import WidgetArchives from '../widget/WidgetArchives';
import WidgetCategories from '../widget/WidgetCategories';
import WidgetMeta from '../widget/WidgetMeta';

const Widget = () => {
    return (
        <aside className="widget-area">
            <WidgetSearch />

            <WidgetRecentComments />

            <WidgetArchives />

            <WidgetCategories />
            
            <WidgetMeta />
        </aside>
    );
};

export default Widget;
