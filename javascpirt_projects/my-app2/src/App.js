import React, { useState, useRef } from "react";
import ClassCounter from "./components/counter/ClassCounter";
import Counter from "./components/counter/Counter";
import PostForm from "./components/postForm/PostForm";
import PostList from "./components/postList/PostList";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
function App() {
  const [posts, setPosts] = useState([]);
  const bodyInputRef = useRef();

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    console.log(bodyInputRef.current.value);
  };
  return (
    <div className="App">
      {/* <MyInput ref={bodyInputRef} />
       */}
      <input ref={bodyInputRef}></input>
      <PostForm create={createPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
