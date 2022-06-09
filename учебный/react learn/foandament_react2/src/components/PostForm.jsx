import React, {useState, useRef} from "react";
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    function addNewPost(e) {
        e.preventDefault()
        //в постс добавляем пост из которого берем ид, а титл и боди мы уже внизу добавили 
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

    return (
        <div>
             <form>
                {/* Управляемый компонент, мы связываем input и value, с помощью хука useState */}
                <MyInput
                value={post.title}
                onChange = {e => setPost({...post, title: e.target.value })}
                type='text' 
                placeholder="Названия поста"
                />
                
                <MyInput
                value={post.body}
                onChange = {e => setPost({...post, body: e.target.value })}
                placeholder="Описание поста"
                
                />
                <MyButton onClick = {addNewPost} >Create Post</MyButton>

      </form>
        </div>
    );
};

export default PostForm;