import React from 'react';//importamos React
import ReactDOM from 'react-dom';//ReactDOM es una biblioteca de React enfocada en el navegador
import { BrowserRouter } from 'react-router-dom';
import './index.css';//archivos css generales
import App from './App';//codigo que muestra la aplicacion en si
import registerServiceWorker from './registerServiceWorker';//guarda datos localmente

//renderisa la aplicacion importada(App), en la ruta que le pasamos (en este caso con el id root)
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
