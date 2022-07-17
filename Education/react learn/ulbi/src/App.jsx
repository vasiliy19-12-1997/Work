import React, { useState, useRef, useMemo } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
function App() {
const [posts, setPosts] = useState([
  {
    id:1,
    title: 'Js',
    body: '1' 
  },
  {
    id:2,
    title: 'Ts',
    body: '2' 
  },
  {
    id:3,
    title: 'C#',
    body: '3' 
  },
  
])
const [filter, setFilter] = useState({sort: '', query: ''})


const sortedPosts = useMemo(() => {
  console.log('ОТРАБОТАЛА ФУНКЦИЯ')
  if(filter.sort){
    return [...posts].sort((a,b)=>a[filter].localeCompare(b[filter.sort]))
  }
  else return posts;

}, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(() => {
  return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query))
}, [ filter.query, sortedPosts ])
//получаем post из дочернего элемента
const removePost = (post)=> {
  setPosts(posts.filter(e=>e.id !== post.id))
}
// const [post, setPost] = useState({title: '', body: ''});
// const [body, setBody] = useState('');

const createPost =(newPost)=>{
  setPosts([...posts, newPost])
}


  // функция сорт не возвращает новый массив а мутирует массив в котором эта функция была применена
  // мы развернем в новый массив, мутируем копию массива и отсортируем c помощью функции localeCompare
 


  return (
    <div className="App">
     <PostForm create={createPost}></PostForm>
     <hr style={{margin: '15px 0'}} />
     <PostFilter filter={filter} setFilter = {setFilter}/>
     {sortedAndSearchedPosts.length !== 0
     ? 
     <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1'></PostList>
    : 
    <h1 style = 
    {{textAlign: 'center'}}>
      Посты не были найдены!
    </h1>
     }
    
  </div>
  );
}

export default App;
