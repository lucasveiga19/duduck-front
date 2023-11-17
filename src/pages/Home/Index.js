import React from 'react';
import './Index.css';
import logo from '../../assets/duduck.png'; 
import logoNome from '../../assets/nomeduduck.png'; 
import logodescricao from '../../assets/Gerencie.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Index() {
  return (
    <div className="container">
  <div className="background-image"></div>
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Duduck Logo" />
    </div>
    <div className="logoNome">
      <img src={logoNome} alt="Duduck" />
    </div>
    <div className="logodescricao">
      <img src={logodescricao} alt="Duduck" />
    </div>
  </header>
  <main className="app-main">
    <div className="botoes">
      <button className="botaoum"> <Link to="/cadastroUm">Iniciar</Link></button>
      <button className="botaodois"><Link to="/login">Eu tenho uma conta</Link></button>
    </div>
  </main>
</div>

  );
}

export default Index;