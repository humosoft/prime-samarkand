import React from 'react';

const WidgetMeta = () => {
    return (
        <div id="meta-2" className="widget widget_meta">
            <h6 className="widget-title">Meta</h6>

            <ul>
                <li>
                    <a title="Log in" href={  '/news' }>Log in</a>
                </li>

                <li>
                    <a title="Entries RSS" href={  '/news' }>Entries <abbr title="Really Simple Syndication">RSS</abbr></a>
                </li>

                <li>
                    <a title="Comments RSS" href={  '/news' }>Comments <abbr title="Really Simple Syndication">RSS</abbr></a>
                </li>
            </ul>
        </div>
    );
}

export default WidgetMeta;
