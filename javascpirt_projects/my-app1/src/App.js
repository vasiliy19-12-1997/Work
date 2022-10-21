import React, { useState, useRef, useId } from "react";
import PostItem from "./components/postItem/PostItem";
import PostList from "./components/postList/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";

import PostForm from "./components/postForm/PostForm";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js", body: "Description" },
    { id: 2, title: "Ts", body: "Description" },
    { id: 3, title: "Python", body: "Description" },
  ]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  console.log(posts);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div>
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0px" }} />
      <div>
        <select>
          <option value="value1">onTitle</option>
          <option value="value1">onDecr</option>
        </select>
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Posts" />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts doesnt find!!!</h1>
      )}
    </div>
  );
}

export default App;
