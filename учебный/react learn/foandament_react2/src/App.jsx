import React, {useState, useRef, useMemo} from "react";
import Counter from './components/Counter';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import s from './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
function App() {
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'fdfdfd'},
    {id: 2, title: 'TS', body: 'fsassz'},
    {id: 3, title: 'C#', body: '1545'},

  ])
  

    
    

    
    
  
  
  
 const sortedPosts = useMemo( () =>{
   console.log('Отработала')
   if(selectedSort){
     return ([...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])))
   }
   return posts;
} , [selectedSort,  posts])

const sortedAndSearchPosts = useMemo(() =>{
  return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
}, [searchQuery, sortedPosts])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }
  //получаем post из дочернегно элемента
  const removePost = (post) => {
    setPosts(posts.filter(a => a.id !== post.id))
  }
//сортируем массив с помощью функции
  const sortPosts = (sort) =>{
    setSelectedSort(sort)
    
  }


    return (
      <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0px'}}/>
      <div>
        <MyInput 
        type="text"
        placeholder= 'Поиск'
        value = {searchQuery}
        onChange = {e => setSearchQuery(e.target.value)}

        />
        <MySelect
        value={selectedSort}
        onChange = {sortPosts}
        defaultValue='Сортировка по'
        options={[
          {value : 'title', name: 'По заголовку' },
          {value : 'body', name: 'По описанию' }
        ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove = {removePost} posts={sortedAndSearchPosts} title='Список постов 1'/>
        : <h1 style={{ textAlign: 'center'}}>Посты не были найдены</h1>
      }
      
      </div>
    );
  }

  export default App;
