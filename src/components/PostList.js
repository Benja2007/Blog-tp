import React, { useState } from 'react';

function PostList({ posts }) {
  const [expandedPosts, setExpandedPosts] = useState([]);

  const toggleExpand = (postId) => {
    if (expandedPosts.includes(postId)) {
      setExpandedPosts(expandedPosts.filter((id) => id !== postId));
    } else {
      setExpandedPosts([...expandedPosts, postId]);
    }
  };

  return (
    <div className="post-list">
      <h2>Lista de Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3 onClick={() => toggleExpand(post.id)}>{post.title}</h3>
            {expandedPosts.includes(post.id) && <p>{post.content}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;