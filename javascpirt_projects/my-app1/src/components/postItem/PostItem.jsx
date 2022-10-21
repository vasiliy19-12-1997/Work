import s from "./PostItem.module.scss";
import React from "react";
import MyButton from "./../ui/button/MyButton";

const PostItem = (props) => {
  return (
    <div className={s.post}>
      <div className={s.postContent}>
        <strong>
          {props.number}.{props.post.title}
        </strong>
        <div className={s.postBody}>{props.post.body}</div>
      </div>
      <div className={s.postBtns}>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
