import React from 'react';
import MyButton from './UI/button/MyButton';
import {useHistory} from 'react-router-dom';

function PostItem(props) {
    const router = useHistory()
    console.log(router);
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post_btn'>
                <MyButton onClick={() => props.push(`/posts/${props.post.id}`)} className='btn'>
                    Open
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)} className='btn'>
                    Delete
                </MyButton>
            </div>
        </div>
    );
}

export default PostItem;