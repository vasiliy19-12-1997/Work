import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    function addNewPost(e){
        // Предотрващаем дефолтное поведение браузера, чтобы не перезагружал страницу
        e.preventDefault()
         const newPost ={
             ...post, id: Date.now()
         }
        create(newPost)
        setPost({title: '', body: ''})
      }
      ;
    return (
        <div>
             <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange = {(e)=>setPost({...post, title: e.target.value})} 
          type="text" 
          placeholder='Название'
        />
        {/* Неуправляемый компонент */}
        <MyInput
        value={post.body}
        onChange = {(e)=>setPost({...post, body: e.target.value})}
        // ref={bodyInputRef}
        type="text" 
        placeholder='Описание' 
        />
        <MyButton  onClick={addNewPost}>Create post</MyButton>

      </form>
        </div>
    );
};

export default PostForm;