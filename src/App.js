import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Importa BrowserRouter y Route
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Publicaciones:', content: '' },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Route path="/" exact render={() => <PostList posts={posts} />} />
          <Route path="/post/:id" component={PostDetail} />
        </Router>
      </main>
    </div>
  );
}

export default App;
