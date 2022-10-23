import React, { useState, useRef, useId, useMemo } from "react";
import PostItem from "./components/postItem/PostItem";
import PostList from "./components/postList/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";
import { usePosts } from "./components/hooks/UsePosts";

import PostForm from "./components/postForm/PostForm";
import MySelect from "./components/ui/select/MySelect";
import PostFilter from "./components/postFilter/PostFilter";
import ClassCounter from "./components/counter/ClassCounter";
import MyModal from "./components/ui/myModal/MyModal";
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      {/* <MyModal></MyModal> */}
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchPosts}
        title="Posts"
      />
    </div>
  );
}

export default App;
