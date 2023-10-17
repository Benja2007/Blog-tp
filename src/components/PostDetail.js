import React from 'react';

function PostDetail({ match, posts }) {
  const postId = match.params.id;
  const post = posts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <div>Publicación no encontrada.</div>;
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;