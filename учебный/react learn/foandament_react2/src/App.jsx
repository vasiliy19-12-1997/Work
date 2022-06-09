import React, {useState, useRef} from "react";
import Counter from './components/Counter';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import s from './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JS', body: 'fdfdfd'},
  {id: 2, title: 'TS', body: 'fsassz'},
  {id: 3, title: 'C#', body: '1545'},

])
const createPost = (newPost)=>{
  setPosts([...posts, newPost])
}
//получаем post из дочернегно элемента
const removePost = (post) => {
  setPosts(posts.filter(a => a.id !== post.id))
}




  return (
    <div className="App">
     <PostForm create={createPost}/>
     <PostList remove = {removePost} posts={posts} title='Список постов 1'/>
    </div>
  );
}

export default App;
