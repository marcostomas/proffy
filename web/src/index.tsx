import React from 'react';
// Permite o react trabalhar com o DOM
import ReactDOM from 'react-dom';
import App from './App';

/* Procura um elemento com id 'root' e 
  jogue o <React.StrictMode>, 
  que possui a classe 'App', no App.tsx  */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);