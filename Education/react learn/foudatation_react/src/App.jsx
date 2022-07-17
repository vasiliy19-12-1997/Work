import React, {useState, useMemo} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'


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
  // //создадим 2-х сторонее связывание с my select 
  // const [selectedSort, setSelectedSort] = useState('');
  // // Переменные для поиска по фильтру
  // const [searchQuerry, setSearchQuerry] = useState('');
  const [filter, setFilter] = useState=({
    sort: '', query: ''})
  
  const sortedPosts = useMemo(()=>{
    console.log('Отслеживание')
    if (filter.sort){
      return [...posts].sort((a, b)=>a[filter.sort].localeCompare(b[filter.sort]))
      
    }
    return posts;
  }, [filter.sort, posts]);
//создаю отсортированный и по поиску чтобы отсавласьб только тот массив который я фильтрую
  const searchAndSortedPosts = useMemo( () => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    
  }, [filter.query, sortedPosts])

    //эта функция callback позволяет вытащить из дочернего элемента newPost в новый массив
    const createPost=(newPost)=> {
      setPosts([...posts, newPost])
    }
   
  //создадим еще callback фунцкцию для удаления postItem-компонент, получаем post из дочернего элемента
  const removePost = (post)=> {
    //из массива постов удалим тот пост который мы передали аргументам
    setPosts(posts.filter(a => a.id !== post.id))
  }


    
    // console.log(title);
    // console.log(bodyInputRef.current.value);
    // мы не изменяем состояние напрямую мы вызываем функцию setposts и передаем туда новый массив куда разварачивем старый массив и в конец добавляем новый массив 
    // const sortPosts = (sort) =>{
      
    //   setSelectedSort(sort)
    // }
  
  
  return (
    <div
     className="App">
      <PostForm create={createPost}/>
     
      
        <hr style={{margin: '15px 0'}} />
       <PostFilter 
          filter={filter} 
          setFilter={setFilter}
        />
        {/* Условная отрисовка */}
        <PostList remove={removePost}  posts={searchAndSortedPosts}  title='Список постов 1'/>
    </div>
  );
}

export default App;


