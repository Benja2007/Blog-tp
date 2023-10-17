// Post.js
import React from 'react';

function Post({ content }) {
  return (
    <><div>
      <ul>
        <p>{content}</p>
        </ul>
      </div>
    </>
  );
}

export default Post;