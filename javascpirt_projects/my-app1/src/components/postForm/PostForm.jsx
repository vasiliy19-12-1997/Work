import React, { useState } from "react";
import MyInput from "./../ui/input/MyInput";
import s from "./PostForm.module.scss";
import MyButton from "./../ui/button/MyButton";
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
      <form className={s.rootForm}>
        <MyInput
          placeholder="Name of post"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />

        <MyInput
          placeholder="decription of post"
          type="text"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
