import React from 'react';
import { Link } from 'react-router-dom';

function PostList({ posts }) {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={`/post/${index}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
