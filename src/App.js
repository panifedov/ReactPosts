import React, { useState, useMemo, useEffect } from 'react'
import PostList from './components/PostList';
import PostForm from './components/UI/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';

function App() {

  const [posts, setPosts] = useState([]); 
  const [filter, setFilter] = useState({sort: '', query: ''});
  const[modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  const [fetchPosts, isPostsLoading, postError] = useFetching ( async() => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  
  useEffect(() => {
    fetchPosts()
  }, [page]);



  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    
  }

  return (
    <div className="App">
      <MyButton
        style={{marginTop: '15px', width: '200px'}}
        onClick={() => setModal(true)}>
        Создать Пост
      </MyButton>
      <hr style={{margin: '10px'}}></hr>
      <MyModal visible={modal} setVisible={setModal} >
      <PostForm create={createPost}/>
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
      {postError && 
        <h1> Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center' , marginTop: 200}}><Loader/></div>
        :<PostList remove={removePost} posts = {sortedAndSearchedPosts} title={' Посты JS '}/>
      }

    
    </div>
  )
}

export default App
