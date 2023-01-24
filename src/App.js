import React, { useState } from 'react'
// import ClassCounter from './components/ClassCounter'
// import Counter from './components/Counter'
import PostItem from './components/PostItem'
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
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

  const  addNewPost = () => {
    
  };

  return (
    <div className="App">
      <form>
        <MyInput type='text' placeholder='название поста'/>
        <MyInput type='text' placeholder='описание поста'/>
        <MyButton onclick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title={' Посты JS '}/>
    </div>
  )
}

export default App
