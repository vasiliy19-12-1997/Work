import React, { useState, useRef } from "react";
import ClassCounter from "./components/counter/ClassCounter";
import Counter from "./components/counter/Counter";
import PostForm from "./components/postForm/PostForm";
import PostList from "./components/postList/PostList";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import s from "./App.module.scss";
function App() {
  const [posts, setPosts] = useState([]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const deletePosts = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className={s.AppDiv}>
      {/* <MyInput ref={bodyInputRef} />
       */}

      <PostForm create={createPost} />
      <PostList vasya={deletePosts} remove={deletePost} posts={posts} />
    </div>
  );
}

export default App;
