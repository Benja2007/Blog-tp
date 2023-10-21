import React from 'react';

function PostDetail(props) {
  const postId = props.match.params.id;
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = posts[postId];

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Aquí puedes agregar la funcionalidad para comentarios en el post */}
    </div>
  );
}

export default PostDetail;
