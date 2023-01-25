import React, { useState, useMemo } from 'react'
import PostList from './components/PostList';
import PostForm from './components/UI/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePost';

function App() {

  const [posts, setPosts] = useState([]); 
  const [filter, setFilter] = useState({sort: '', query: ''});
  const[modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  
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
        style={{marginTop: '15px'}}
        onClick={() => setModal(true)}>
        Создать Пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal} >
      <PostForm create={createPost}/>
      </MyModal>
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
        <PostList remove={removePost} posts = {sortedAndSearchedPosts} title={' Посты JS '}/>
    
    </div>
  )
}

export default App
