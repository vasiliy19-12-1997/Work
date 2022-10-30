import React, { useState } from "react";
import MyButton from "../ui/myButton/MyButton";
import MyInput from "../ui/myInput/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ body: "", title: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Math.random(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <div>
      <MyInput
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost} />
    </div>
  );
};

export default PostForm;
