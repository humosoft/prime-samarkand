import React from 'react';

import ButtonSearch from '../../components/button/ButtonSearch';

const WidgetSearch = () => {
    return (
        <div id="search-2" className="widget widget_search">
            <form className="search-form" role="search" method="get" action={  '/search-results' }>
                <div className="search input-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Type something to search" name="s" title="Type something to search" />

                    <div className="input-group-append">
                        <ButtonSearch />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WidgetSearch;
