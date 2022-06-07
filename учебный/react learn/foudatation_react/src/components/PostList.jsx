import React from 'react';
import PostItem from './PostItem';
//мы знаем что наши пропсы это объект поэтмоу сделаем деструктуризацию
const PostList = ({props, posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
                {posts.map((post, index)=>
                <PostItem remove={remove} number={index + 1} post={post} key = {post.id}/>
                )}
        </div>
    );
};

export default PostList;