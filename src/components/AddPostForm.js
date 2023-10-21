import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddPostForm({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content };
    onAddPost(newPost);
    setTitle('');
    setContent('');
    history.push('/');
  };

  return (
    <div className="add-post-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            placeholder="Escribe el título aquí"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Contenido:</label>
          <textarea
            id="content"
            placeholder="Escribe el contenido aquí"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Agregar Publicación</button>
      </form>
    </div>
  );
}

export default AddPostForm;