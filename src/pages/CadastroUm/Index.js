import React from 'react';
import './Index.css'; // Importing the CSS file

import logo from '../../assets/duduck.png'; // Importando o logo
import appleIcon from '../../assets/Apple.png'; // Importando o ícone da Apple
import googleIcon from '../../assets/Google.png'; // Importando o ícone do Google
import facebookIcon from '../../assets/Facebook.png'; // Importando o ícone do Facebook
import logoNome from '../../assets/nomeduduck.png'; 
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Index() {
  return (
<div className="tudo">
<div className="cabeca">
        <img src={logo} alt="Duduck Logo" className="logo" />
        <img src={logoNome} alt="Duduck " className="logonome" />
        
      </div>
      <div className="buttonGroup">
        <button className="button apple">
          <img src={appleIcon} alt="Apple" className="icon" />Registre-se com Apple
        </button>
        <button className="button google">
          <img src={googleIcon} alt="Google" className="icon" />Registre-se com Google
        </button>
        <button className="button facebook">
          <img src={facebookIcon} alt="Facebook" className="icon" />Registre-se com Facebook
        </button>
        <div className="separator">ou</div>
        <Link to="/cadastroDois" className="button email"> Registre-se com E-mail</Link>
        
      </div>
    </div>
  );
}



export default Index;

