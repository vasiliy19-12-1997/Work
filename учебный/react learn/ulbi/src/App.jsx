import React, { useState, useRef } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
function App() {
const [posts, setPosts] = useState([
  {
    id:1,
    title: 'Js',
    body: 'Decription' 
  },
  {
    id:2,
    title: 'Ts',
    body: 'Decription' 
  },
  {
    id:3,
    title: 'C#',
    body: 'Decription' 
  },
  
])
const [post, setPost] = useState({title: '', body: ''});
// const [body, setBody] = useState('');

const createPost =(newPost)=>{
  setPosts([...posts, newPost])
}
  return (
    <div className="App">
     <PostForm create={createPost}></PostForm>
     <PostList posts={posts} title='Список постов 1'></PostList>
  </div>
  );
}

export default App;
