import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Product from './Product';
import MercadoLibre from './pages/MercadoLibre';
import Carrousel from './pages/MercadoLibre/Carrousel';
import * as serviceWorker from './serviceWorker';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';


/*<React.StrictMode>
    <App />
  </React.StrictMode>*/

ReactDOM.render(  
  <Router basename={process.env.PUBLIC_URL}>
    <Route exact path="/products/:id" component={Product} />
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/desafio" component={MercadoLibre} />
    <Route exact path="/carrousel/:site" component={Carrousel} />
    <Route exact path="/carrousel/:site/search?q=:product" component={Carrousel} />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
