import React from 'react';

function PostList() {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  return (
    <div>
      <h2>Blog Post List</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <a href={`/post/${index}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;