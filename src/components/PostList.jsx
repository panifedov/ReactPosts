import React from 'react';
import PostItem from './PostItem';

function PostList({posts, title, remove}) {
    return (
        <div>
            <h1> {title}</h1>
            {posts.map(( post, index) =>
                <div>
                    <PostItem  remove={remove} number={index + 1} post={post} key={post.id} />
                </div>
            )}
        </div>
    );
}

export default PostList;