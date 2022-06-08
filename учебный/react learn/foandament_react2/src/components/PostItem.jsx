import React from 'react';

const PostItem = (props) => {
    
    return (
        <div>
            <div className='post'>
                <div className="post__content">
                <b>{props.post.id}{props.post.title}</b>
                <div>
                    {props.post.body}
                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;