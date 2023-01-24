import React from 'react';

function PostItem(props) {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post_btn'>
                <button className='btn'> Delete</button>
            </div>
        </div>
    );
}

export default PostItem;