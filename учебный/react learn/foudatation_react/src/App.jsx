import React, {useState, useRef} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import Myselect from "./components/UI/select/Myselect";
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

  const [selectedSort, setSelectedSort] = useState('')
  //создадим еще callback фунцкцию для удаления postItem-компонент, получаем post из дочернего элемента
  const removePost = (post)=> {
    //из массива постов удалим тот пост который мы передали аргументам
    setPosts(posts.filter(a=>a.id!==post.id))
  }

  //эта функция callback позволяет вытащить из дочернего элемента newPost в новый массив
  const createPost=(newPost)=> {
    setPosts([...posts, newPost])
  }
 
    
    // console.log(title);
    // console.log(bodyInputRef.current.value);
    // мы не изменяем состояние напрямую мы вызываем функцию setposts и передаем туда новый массив куда разварачивем старый массив и в конец добавляем новый массив 
    const sortPosts = (sort) =>{
      
      setSelectedSort(sort)
      console.log(sort)
    }

  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <div>
        <hr style={{margin: '15px 0'}} />
        <Myselect 
        value={selectedSort}
        onChange={sort=>selectedSort(sort)}
          defaultValue='Сортировка по'
          options = {[
            {value: 'title', name: 'по Заголовку'},
            {value: 'body', name: 'по Названию'}
          ]}
        />
         
        
      </div>
      {/* Условная отрисовка */}
       {posts.length !==0
       ? <PostList
       title='Список постов 1' 
       posts={posts}
       remove={removePost}
       />
       : <div>
          <h1 style ={{textAlign: 'center'}}>
          Посты не найдены!
          </h1>
        </div> 
       }
      
      
    </div>
  );
}

export default App;
