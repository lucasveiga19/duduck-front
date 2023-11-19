import React from 'react';
import './Index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../../assets/duduck.png'; 
import logoNome from '../../assets/nomeduduck.png'; 
import logodescricao from '../../assets/Gerencie.png';

function Index() {
  return (
    <div className="tudohome">
      <div className="backgroundimage"></div>
      <div className="cabecahome">
        <div className="logoduduck text-center">
          <img src={logo} alt="Duduck Logo" style={{ maxWidth: '450px' }} />
        </div>
        <div className="logoNome">
          <img src={logoNome} alt="Duduck" />
        </div>
        <div className="logodescricao">
          <img src={logodescricao} alt="Duduck" />
        </div>
      </div>
      <main className="appmain">
        <div className="botoes">
          <Link to="/cadastroUm" className="botaoum link">Iniciar</Link>
          <Link to="/login" className="botaodois link">Eu tenho uma conta</Link>
        </div>
      </main>
    </div>
  );
}

export default Index;
