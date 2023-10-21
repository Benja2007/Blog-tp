// Post.js
import React, { useState } from 'react';

function Post({ title, content, comments }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <div className="post-title" onClick={() => setShowComments(!showComments)}>
        <h2>{title}</h2>
      </div>
      {showComments && (
        <div className="post-content">
          <p>{content}</p>
          <h3>Comentarios</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Post;