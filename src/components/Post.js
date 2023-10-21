import React from 'react';

function Post({ title, content }) {
  return (
    <>
      <div className="post-title">
        <h2>{title}</h2>
      </div>
      <div className="post-content">
        <p>{content}</p>
      </div>
    </>
  );
}

export default Post;