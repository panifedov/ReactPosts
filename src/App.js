import React, { useState } from 'react'
import PostList from './components/PostList';
import PostForm from './components/UI/PostForm';
import './styles/App.css'

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

  const createPost = (newPost) => {
    setPosts( [...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <div>
        <select>
          <options value='value1' ></options>
        </select>
      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts = {posts} title={' Посты JS '}/>
        :
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены!
        </h1>
      }
      
    </div>
  )
}

export default App
