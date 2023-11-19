import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaginaInicial from './pages/Home/Index.js';
import Login from './pages/Login/Index.js';
import CadastroUm from './pages/CadastroUm/Index.js';
import CadastroDois from './pages/CadastroDois/Index.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/home" component={PaginaInicial} />
          <Route path="/login" component={Login} />
          <Route path="/cadastroUm" component={CadastroUm} />
          <Route path="/cadastroDois" component={CadastroDois} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
