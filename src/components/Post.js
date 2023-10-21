import React from 'react';
import { useParams } from 'react-router-dom';

function Post({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <div>Post no encontrado.</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;