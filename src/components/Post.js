// Post.js
import React from 'react';

function Post({ content }) {
  return (
    <ul>
    <><div>
        <p>{content}</p>
      </div>
    </>
    </ul>
  );
}

export default Post;