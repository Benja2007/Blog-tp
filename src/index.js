import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa Router para el enrutamiento
import App from './App'; // Importa el componente App

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);