// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import AddPostForm from './components/AddPostForm';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Publicaciones:', content: '' },
  ]);

  const addPost = (newPost) => {
    // Agrega una nueva publicación al estado de posts
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Añadi tu Post</h1>
        <AddPostForm onAddPost={addPost} />
        <PostList posts={posts} />
      </main>
    </div>
  );
}

export default App;