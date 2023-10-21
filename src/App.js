import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Post from './components/Post';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
            <Route path="/" exact component={PostList} />
            <Route path="/add" component={AddPostForm} />
            <Route path="/post/:id" component={Post} />
        </main>
      </div>
    </Router>
  );
}

export default App;