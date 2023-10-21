import React from 'react';
import Post from './Post';

function PostList({ posts }) {
  return (
    <div className="post-list">
      <h2>Lista de Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post title={post.title} content={post.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;