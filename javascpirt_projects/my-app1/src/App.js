import React, { useState } from "react";

import PostList from "./components/postList/PostList";

import { usePosts } from "./components/hooks/usePosts";

import PostForm from "./components/postForm/PostForm";

import PostFilter from "./components/postFilter/PostFilter";

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
