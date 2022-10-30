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
        <MyButton>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
