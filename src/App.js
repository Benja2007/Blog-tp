import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'; // Importa BrowserRouter, Link y Route
import Header from './components/Header';
import PostList from './components/PostList';
import AddPostForm from './components/AddPostForm';

function App() {
  // Definimos un estado para las publicaciones
  const [posts, setPosts] = useState([]);

  // Función para agregar una nueva publicación al estado
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route path="/" exact component={PostList} />
          <Route path="/add" render={() => <AddPostForm onAddPost={addPost} />} />
        </main>
      </div>
    </Router>
  );
}

export default App;