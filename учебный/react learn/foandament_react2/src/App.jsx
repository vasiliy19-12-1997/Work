import React, {useState, useRef, useMemo, useEffect} from "react";
import Counter from './components/Counter';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import s from './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModale from "./components/UI/MyModal/MyModale";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./components/API/PostService";
import Loader from "./components/UI/Loader/Loader,";
function App() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
//используем useEffect чтобы при загрузке подрузились псоты
  useEffect(() =>{
    fetchPosts();
  }, [])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false)
  }
  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout( async() => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostsLoading(false)
    }, 1000);
  
    
  }
  


  //получаем post из дочернегно элемента
  const removePost = (post) => {
    setPosts(posts.filter(a => a.id !== post.id))
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
      {isPostsLoading
      ? <div style = {{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader>Loading</Loader></div>
      :<PostList remove = {removePost} posts={sortedAndSearchPosts} title='Список постов 1'/>
      }
      
      </div>
    );
  }

  export default App;
