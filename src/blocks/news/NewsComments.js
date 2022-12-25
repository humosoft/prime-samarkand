import React from 'react';

import LoadMoreComments from '../../components/loadmore/LoadMoreComments';
import CommentForm from '../../components/form/CommentForm';
import CommentsReply from '../../components/button/CommentsReply';

const NewsComments = () => {
    return (
        <div id="comments" className="comments-area block spacer m-top-lg">
            <div className="comment-title">
                <h4>Comments (4)</h4>
            </div>

            <ul className="comment-list list-unstyled style-default">
                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-header clearfix">
                                <div className="float-left">
                                    <h5 className="comment-author">
                                        <a title="Tom Harrison" href={  '/news-single-page' }>Tom Harrison</a>
                                    </h5>

                                    <div className="comment-time">
                                        <p className="p-small">January 15, 2020 3:23 pm</p>
                                    </div>
                                </div>

                                <div className="float-right">
                                    <div className="comment-reply">
                                        <CommentsReply />
                                    </div>
                                </div>
                            </div>

                            <div className="comment-content">
                                <div className="d-flex">
                                    <p className="quote">
                                        <i className="fas fa-quote-left"></i>
                                    </p>

                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                                </div>
                            </div>
                        </div>

                        <ul className="children">
                            <li className="comment">
                                <div className="comment-wrapper">
                                    <div className="comment-details">
                                        <div className="comment-header clearfix">
                                            <div className="float-left">
                                                <h5 className="comment-author">
                                                    <a title="Tom Harrison" href={  "/news-single-page" }>Wilson Joe</a>
                                                </h5>

                                                <div className="comment-time">
                                                    <p className="p-small">January 15, 2020 3:23 pm</p>
                                                </div>
                                            </div>

                                            <div className="float-right">
                                                <div className="comment-reply">
                                                    <CommentsReply />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="comment-content">
                                            <div className="d-flex">
                                                <p className="quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </p>

                                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-header clearfix">
                                <div className="float-left">
                                    <h5 className="comment-author">
                                        <a title="Tom Harrison" href={  "/news-single-page" }>Arthur James</a>
                                    </h5>

                                    <div className="comment-time">
                                        <p className="p-small">January 15, 2020 3:23 pm</p>
                                    </div>
                                </div>

                                <div className="float-right">
                                    <div className="comment-reply">
                                        <CommentsReply />
                                    </div>
                                </div>
                            </div>

                            <div className="comment-content">
                                <div className="d-flex">
                                    <p className="quote">
                                        <i className="fas fa-quote-left"></i>
                                    </p>

                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="comment">
                    <div className="comment-wrapper">
                        <div className="comment-details">
                            <div className="comment-header clearfix">
                                <div className="float-left">
                                    <h5 className="comment-author">
                                        <a title="Tom Harrison" href={  "/news-single-page" }>Joe Eddison</a>
                                    </h5>

                                    <div className="comment-time">
                                        <p className="p-small">January 15, 2020 3:23 pm</p>
                                    </div>
                                </div>

                                <div className="float-right">
                                    <div className="comment-reply">
                                        <CommentsReply />
                                    </div>
                                </div>
                            </div>

                            <div className="comment-content">
                                <div className="d-flex">
                                    <p className="quote">
                                        <i className="fas fa-quote-left"></i>
                                    </p>

                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <LoadMoreComments />

            <hr className="spacer m-top-lg" />

            <div id="respond" className="comment-respond block spacer m-top-lg">
                <h4 id="reply-title" className="comment-reply-title">Leave a reply <a rel="nofollow" id="cancel-comment-reply-link" className="btn btn-link p-0 border-0 transform-scale-h" href={  "/about-us" } style={ { display: "none" } }>Cancel reply</a></h4>

                <CommentForm />
            </div>
        </div>
    );
};

export default NewsComments;
