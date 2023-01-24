import React, { useState } from 'react'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
import PostItem from './components/PostItem'
import PostList from './components/PostList';
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


  return (
    <div className="App">
      <form>
        <input type='text' placeholder='название поста'></input>
        <input type='text' placeholder='описание поста'></input>
        <button>Создать пост</button>
      </form>
      <PostList posts = {posts} title={' Посты JS '}/>
    </div>
  )
}

export default App
