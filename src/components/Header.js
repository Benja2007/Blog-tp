import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='App-header'>
      <header>
        <h1>HOME</h1>
        <Link to="/add">Agregar Publicación</Link>
      </header>
    </div>
  );
}

export default Header;