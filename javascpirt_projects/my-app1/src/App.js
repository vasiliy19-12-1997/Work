import React, { useState, useRef, useId, useMemo } from "react";
import PostItem from "./components/postItem/PostItem";
import PostList from "./components/postList/PostList";
import MyButton from "./components/ui/button/MyButton";
import MyInput from "./components/ui/input/MyInput";

import PostForm from "./components/postForm/PostForm";
import MySelect from "./components/ui/select/MySelect";
import PostFilter from "./components/postFilter/PostFilter";
import ClassCounter from "./components/counter/ClassCounter";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Js", body: "Description" },
    { id: 2, title: "Ts", body: "Description" },
    { id: 3, title: "Python", body: "Description" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("play functipn");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
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
