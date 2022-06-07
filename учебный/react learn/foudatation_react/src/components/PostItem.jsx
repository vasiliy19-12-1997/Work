import React from 'react';
import MyButton from './UI/button/MyButton';

const PostItem = (props, post) => {
    // console.log(props);
    return (
        <div>
                <div className='post'>
                    <div className="post_content">
                        {/* передаем сюда вместо post id number id из пост листа  */}
                        <strong>{props.number} {props.post.title}</strong>
                            <div>
                            {props.post.body}
                            </div>
                    </div>
                    <div className="post_btns">
                        <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
                    </div>
                </div>
        </div>
    );
};

export default PostItem;