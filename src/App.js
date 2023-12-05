import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaginaInicial from './pages/Home/Index.js';
import Login from './pages/login/Index.js';
import CadastroUm from './pages/CadastroUm/Index.js';
import CadastroDois from './pages/CadastroDois/Index.js';
import Dashboard from './pages/Dashboard/Index.js';
import Service from './pages/Service/Index.js';
import Pagamento from './pages/Pagamento/Index.js';
import Config from './pages/Config/Index.js';
import "./styleguide.css";

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
          <Route path="/dashboard/:userId" component={Dashboard} />
          <Route path="/service/:userId" component={Service} />
          <Route path="/pagamento/:userId" component={Pagamento} />
          <Route path="/config" component={Config} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
