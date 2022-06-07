import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
      });
      const addNewPost=(e)=>{
          e.preventDefault();
        const newPost = {
            ...post, id: Date.now(), title: '' 
        }
        create(newPost);
        setPost(
          {
            title: '',
            body: '',
          })

      }
    return (

        <div>
             <form>
        {/* Управляемый компонент */}
        <MyInput
        value={post.title} 
        action="" 
        placeholder="Название поста"
        //мы изменяем нужное для нас поле а все остальное 
        onChange={(e)=>setPost({...post, title:e.target.value })}

        />
        {/* Неуправляемый компонент */}
        <MyInput
        value={post.body}
        action="" 
        placeholder="Описание поста" 
        onChange = {(e)=>setPost({...post, body:e.target.value })}
        /> 
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
        </div>
    );
};

export default PostForm;