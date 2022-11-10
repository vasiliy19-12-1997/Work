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
import usePosts from "./components/hooks/usePosts";
import axios from "axios";
import Loader from "./components/ui/loader/Loader";
import PostService from "./components/api/postService/PostService";
import useFetching from "./components/hooks/useFetching";
import pages from "./utils/pages";
function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(10);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getALL(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(pages(totalCount, limit));
  });
  console.log(totalPages);
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
      <MyButton onClick={fetchPosts}>Get Posts</MyButton>
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
      {postError && <h1>Error ${postError}</h1>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <PostList remove={deletePost} posts={sortedAndSearchPosts} />
      )}
    </div>
  );
}

export default App;
