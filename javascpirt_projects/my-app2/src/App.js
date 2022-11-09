import React, { useState, useRef, useMemo } from "react";
import ClassCounter from "./components/counter/ClassCounter";
import Counter from "./components/counter/Counter";
import PostForm from "./components/postForm/PostForm";
import PostList from "./components/postList/PostList";
import MyButton from "./components/ui/myButton/MyButton";
import MyInput from "./components/ui/myInput/MyInput";
import MySelect from "./components/ui/mySelect/MySelect";
import s from "./App.module.scss";
import PostFilter from "./components/postFilter/PostFilter";
import MyModal from "./components/ui/myModal/MyModal";
function App() {
  const [posts, setPosts] = useState([
    {
      title: "fdfd",
      body: "fdfdf",
      id: Math.random(),
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedPosts = useMemo(() => {
    console.log("функция работает");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => post.id !== p.id));
  };

  if (!sortedAndSearchPosts.length) {
  }
  return (
    <div className={s.AppDiv}>
      <MyButton style={{ margin: "25px" }} onClick={() => setModal(true)}>
        Создать{" "}
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      {/* <MyInput ref={bodyInputRef} />
       */}

      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList remove={deletePost} posts={sortedAndSearchPosts} />
    </div>
  );
}

export default App;
