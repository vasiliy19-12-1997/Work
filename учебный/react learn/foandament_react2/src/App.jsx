import React, {useState, useRef, useMemo} from "react";
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
function App() {
  
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)



  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false)
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
      <MyButton style={{marginTop: '30px'}} onClick = {() => setModal(true)}>
      Создать пользователя
      </MyButton>
      <MyModale visile={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModale>
      
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter filter={filter} setFilter = {setFilter}/>
      <PostList remove = {removePost} posts={sortedAndSearchPosts} title='Список постов 1'/>
      </div>
    );
  }

  export default App;
