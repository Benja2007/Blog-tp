import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostForm from './PostForm';
import PostList from './PostList';
import PostDetail from './PostDetail';

function App() {
  return (
    <Router>
      <div className="container">
          <Route path="/post/:id" component={PostDetail} />
          <Route path="/" exact component={PostForm} />
        <PostList />
      </div>
    </Router>
  );
}

export default App;