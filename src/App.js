import React, { useState, useMemo } from 'react'
import PostList from './components/PostList';
import PostForm from './components/UI/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css'
import PostFilter from './components/PostFilter';

function App() {

  const [posts, setPosts] = useState([
    { id:1,
      title: 'JavaScript',
      body: 'Descriptions',
    },
    { id:2,
      title: 'JavaScript 2 ',
      body: 'Descriptions',
    },
    { id:3,
      title: 'JavaScript 3 ',
      body: 'Descriptions',
    }
  ]); 
  const [filter, setFilter] = useState({sort: '', query: ''});


  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort( (a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts]);

  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
 

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px'}} />
      <PostFilter 
        filter={filter}
        setFilter={setFilter}
      />
        <PostList remove={removePost} posts = {sortedAndSearchedPosts} title={' Посты JS '}/>
    
    </div>
  )
}

export default App
