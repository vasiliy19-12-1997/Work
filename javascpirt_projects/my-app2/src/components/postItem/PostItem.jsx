import React from "react";
import MyButton from "./../ui/myButton/MyButton";

const PostItem = (props) => {
  return (
    <div>
      <div>
        <strong>
          {props.number}.{props.title}
        </strong>
        <div>{props.body}</div>
      </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
