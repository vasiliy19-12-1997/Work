import React, { useEffect, useState } from "react";
import PostService from "../components/API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader,";
import MyModale from "../components/UI/MyModal/MyModale";
import Paginations from "../components/UI/paginations/Paginations";
import { getPageCount } from '../components/utilis/pages.jsx';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from "../hooks/usePosts";
import s from '../styles/App.css';


function Posts() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);


  
    
  

  const [fetchPosts, isPostsLoading, postError ] = useFetching(async(limit, page) => {
    const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
  })

 
//используем useEffect чтобы при загрузке подрузились псоты
  useEffect(() =>{
    fetchPosts(limit, page);
  }, [page])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  //получаем post из дочернегно элемента
  const removePost = (post) => {
    setPosts(posts.filter(a => a.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
    
  }
// //сортируем массив с помощью функции
//   const sortPosts = (sort) =>{
//     setSelectedSort(sort)
    
//   }


    return (
      <div className="App">
        <MyButton onClick={fetchPosts}>Get</MyButton>
      <MyButton style={{marginTop: '30px'}} onClick = {() => setModal(true)}>
      Создать пользователя
      </MyButton>
      <MyModale visile={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModale>
      
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter filter={filter} setFilter = {setFilter}/>
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
      ? <div style = {{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader>Loading</Loader></div>
      :<PostList remove = {removePost} posts={sortedAndSearchPosts} title='Список постов 1'/>
      }
      <Paginations page={page} changePage={changePage} totalPages={totalPages}></Paginations>
      </div>
    );
  }

  export default Posts;
