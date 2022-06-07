import React, {useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import './styles/app.css'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1, title: 'JS', body :'JavaScript'
    },
    {
      id: 2, title: 'TS', body :'Typescript'
    },
    {
      id: 3, title: 'C#', body :'Csharp'
    },
  ]);
  return (
    <div className="App">
      <form>
        <input action="" placeholder="Название поста"></input>
        <input action="" placeholder="Описание поста"></input>
        <MyButton>Create post</MyButton>
      </form>
      <PostList title='Список постов 1' posts={posts}/>
  
    </div>
  );
}

export default App;
