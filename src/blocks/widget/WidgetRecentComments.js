import React from 'react';

const WidgetRecentComments = () => {
    return (
        <div id="recent-comments-2" className="widget widget_recent_comments">
            <h6 className="widget-title">Recent Comments</h6>

            <ul id="recentcomments">
                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="Jellyfish season" href={  '/news-single-page#comments' }> Jellyfish season</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="Hacking industry" href={  '/news-single-page#comments' }> Hacking industry</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="The Voyage of the Eye" href={  '/news-single-page#comments' }> The Voyage of the Eye</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="Wind of Names" href={  '/news-single-page#comments' }> Wind of Names</a>
                </li>

                <li className="recentcomments">
                    <span className="comment-author-link">Lucas Reynolds</span> on
                    <a title="The Twinkling Year" href={  '/news-single-page#comments' }> The Twinkling Year</a>
                </li>
            </ul>
        </div>
    );
}

export default WidgetRecentComments;