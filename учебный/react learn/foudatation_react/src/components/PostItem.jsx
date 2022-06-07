import React from 'react';

const PostItem = (props) => {
    // console.log(props);
    return (
        <div>
                <div className='post'>
                    <div className="post_content">
                        <strong>{props.post.id} {props.post.title}</strong>
                            <div>
                            {props.post.body}
                            </div>
                    </div>
                    <div className="post_btns">
                        <button>Delete</button>
                    </div>
                </div>
        </div>
    );
};

export default PostItem;