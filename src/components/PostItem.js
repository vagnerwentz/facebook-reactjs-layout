import React from 'react';

import PostHeader from './PostHeader';
import PostComment from './PostComments';

export default function PostItem({ author, date, content, comments}) {
    return(
        <div className="post">
            <PostHeader author={author} date={date} />
            <p className="post-content">{content}</p>
            <PostComment comments={comments} />
        </div>
    )
}