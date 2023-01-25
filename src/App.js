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

function App() {

  const [posts, setPosts] = useState([]); 
  const [filter, setFilter] = useState({sort: '', query: ''});
  const[modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPost()
  }, []);

  async function fetchPost() {
    setIsPostsLoading(true)
    setTimeout( async() => {
      const posts = await PostService.getAll();
      setPosts(posts)
      setIsPostsLoading(false)
    }, 1000)

  }

  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
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
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center' , marginTop: 200}}><Loader/></div>
        :<PostList remove={removePost} posts = {sortedAndSearchedPosts} title={' Посты JS '}/>
      }
    
    </div>
  )
}

export default App
