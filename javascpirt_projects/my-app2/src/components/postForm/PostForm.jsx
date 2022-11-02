import React, { useState } from "react";
import MyButton from "../ui/myButton/MyButton";
import MyInput from "../ui/myInput/MyInput";
import s from "./PostForm.module.scss";
const PostForm = ({ create }) => {
  const [post, setPost] = useState({ body: "", title: "" });
  const addNewPost = (e) => {
    const newPost = {
      ...post,
      id: Math.random(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };
  return (
    <div className={s.PostForm}>
      <MyInput
        className={s.PostFormInput}
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        className={s.PostFormInput}
        type="text"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />

      <MyButton onClick={addNewPost}>Create</MyButton>
    </div>
  );
};

export default PostForm;
