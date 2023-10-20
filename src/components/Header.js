import React from 'react';

function Header() {
  return (
    <div className="App-header">
      <header>
        <h1>HOME</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Inicio</a> {/* Enlace a la página principal */}
            </li>
            <li>
              <a href="/add">Agregar Publicación</a> {/* Enlace al formulario para agregar publicaciones */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;