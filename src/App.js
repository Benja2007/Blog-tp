import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail'; // Componente para mostrar el contenido completo

function App() {
  // ...

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