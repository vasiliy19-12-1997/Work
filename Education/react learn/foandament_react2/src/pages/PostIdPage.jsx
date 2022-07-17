import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../components/API/PostService';
import Loader from '../components/UI/Loader/Loader,';
const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState ({});
    const [comments, setComments] = useState ([]);

    const [fetchPostById, isLoading, error] = useFetching( async(id)=>{
        const response = await PostService.getByID(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching( async(id)=>{
        const response = await PostService.getCommentByPostIdyID(id)
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div>
            <h1>Вы попали на страницу поста c ID = {params.id} </h1>
            {isLoading
            ? <Loader/>
            : <div>{post.id}.{post.title}</div>
            }
            <h1>
                Комментарии
            </h1>
           {isComLoading
           ?<Loader/>
            : <div>
                авава
            </div>
            }
        </div>
    );
};

export default PostIdPage;