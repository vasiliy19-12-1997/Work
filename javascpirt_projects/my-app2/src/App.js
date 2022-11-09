import React, { useState, useRef } from "react";
import ClassCounter from "./components/counter/ClassCounter";
import Counter from "./components/counter/Counter";
import PostForm from "./components/postForm/PostForm";
import PostList from "./components/postList/PostList";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import MySelect from "./components/ui/mySelect/MySelect";
import s from "./App.module.scss";
function App() {
  const [posts, setPosts] = useState([
    {
      title: "fdfd",
      body: "fdfdf",
      id: Math.random(),
    },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const getSortedPosts = () => {
    console.log("функция работает");
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  };

  const sortedPosts = getSortedPosts;

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => post.id !== p.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };
  return (
    <div className={s.AppDiv}>
      {/* <MyInput ref={bodyInputRef} />
       */}

      <PostForm create={createPost} />
      <hr></hr>
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По заголовку" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
      <PostList remove={deletePost} posts={posts} />
    </div>
  );
}

export default App;
