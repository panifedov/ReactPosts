import React from 'react';
import PostItem from './PostItem';

function PostList({posts, title}) {
    return (
        <div>
            <h1> {title}</h1>
            {posts.map(post =>
                <div>
                    <PostItem post={post} key={post.id} />
                </div>
            )}
        </div>
    );
}

export default PostList;