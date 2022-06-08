import React, {useState} from "react";
import Counter from './components/Counter';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import s from './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
function App() {
const [posts, setPosts] = useState([
  {id: 1, title: 'JS', body: 'fdfdfd'},
  {id: 2, title: 'TS', body: 'fsassz'},
  {id: 3, title: 'C#', body: '1545'},

])




  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder="Названия поста"/>
        <MyInput type='text' placeholder="Описание поста"/>
        <MyButton disabled>Create Post</MyButton>

      </form>
     <PostList posts={posts} title='Список постов 1'/>
    </div>
  );
}

export default App;
