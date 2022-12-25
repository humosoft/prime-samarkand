import React from 'react';
import { Link } from 'react-scroll/modules';

const CommentsReply = () => {
    return (
        <div className="comment-reply no-space">
            <Link title="Reply" className="comment-reply-link btn btn-link p-0 transform-scale-h border-0 min-w-auto scroll-to-id" to="reply-title" spy={ true } smooth={ true } duration={ 0 }>
                <i className="fas fa-reply"></i>
                <span>Reply</span>
            </Link>
        </div>
    );
};

export default CommentsReply;
