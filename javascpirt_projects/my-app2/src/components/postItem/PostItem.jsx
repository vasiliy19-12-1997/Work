import React from "react";
import MyButton from "./../ui/myButton/MyButton";
import s from "./PostItem.module.scss";
const PostItem = (props) => {
  return (
    <div className={s.PostItem}>
      <div className={s.PostItemText}>
        <strong>
          {props.number}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={s.PostItemButton}>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
