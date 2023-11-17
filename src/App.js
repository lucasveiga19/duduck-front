import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaginaInicial from './pages/Home/Index.js';
import Login from './pages/login/Index.js';
import CadastroUm from './pages/cadastro1/Index.js';
import CadastroDois from './pages/cadastro2/Index.js';

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
