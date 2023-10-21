// PostList.js
import React, { useState } from 'react';
import Post from './Post';
import AddPostForm from './AddPostForm'; // Importa el formulario para agregar un post

function PostList({ posts }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="post-list">
      <h2>Lista de Publicaciones</h2>
      {showForm ? (
        <AddPostForm /> // Mostrar el formulario para agregar un post si showForm es verdadero
      ) : (
        <button onClick={() => setShowForm(true)}>Crear Nuevo Post</button>
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Post title={post.title} content={post.content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;