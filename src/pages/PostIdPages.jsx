import React from 'react';
import Loader from '../components/UI/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

function PostIdPages(props) {
    const params = useParams()
    const [post, setPost] = useState({})
    const[fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response  = await PostService.getById(params.id)
        setPost(response.data); 
    })  

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            <h1>Страница Поста c id = {params.id}</h1>
            {isLoading 
            ? <Loader/>
            :   <div>{post.id}{post.title}</div>
            }
            
        </div>
    );
}

export default PostIdPages;