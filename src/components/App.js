import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/post/:id" component={PostList} />
          <Route path="/" exact component={PostForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;