import React, { useState } from 'react';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // No se utiliza la variable post, así que la eliminamos
    // const post = { title, content };
    // Guardar el post en el local storage aquí
    // Limpia los campos de entrada después de guardar
    setTitle('');
    setContent('');
  }

  return (
    <div>
      <h2>Blog Post Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default PostForm;