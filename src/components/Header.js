import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link

function Header() {
  return (
    <div className="App-header">
      <header>
        <h1>HOME</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link> {/* Usa Link para la navegación */}
            </li>
            <li>
              <Link to="/add">Agregar Publicación</Link> {/* Usa Link para la navegación */}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;