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
function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'fdfdfd'},
    {id: 2, title: 'TS', body: 'fsassz'},
    {id: 3, title: 'C#', body: '1545'},

  ])
  const [filter, setFilter] = useState({sort: '', query: ''});
  
  const sortedPosts = useMemo( () =>{
   console.log('Отработала')
   if(filter.sort){
     return ([...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])))
   }
   return posts;
} , [filter.sort,  posts])

const sortedAndSearchPosts = useMemo(() =>{
  return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
}, [filter.query, sortedPosts])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
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
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0px'}}/>
      <PostFilter filter={filter} setFilter = {setFilter}/>
      <PostList remove = {removePost} posts={sortedAndSearchPosts} title='Список постов 1'/>
      </div>
    );
  }

  export default App;
