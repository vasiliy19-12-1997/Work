import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from "react-router-dom";
const PostItem = (props) => {
    const router = useNavigate()
    console.log(router)
    return (
        <div>
            <div className='post'>
                <div className="post__content">
                <b>{props.post.id}{props.post.title}</b>
                <div>
                    {props.post.body}
                </div>
                <div className="post__btns">
                    <MyButton onClick = {() => props.remove(props.post)}>Open</MyButton>
                    <MyButton onClick = {() => props.remove(props.post)}>Delete</MyButton>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;