import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div className="post-list">
      <h2>Lista de Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;