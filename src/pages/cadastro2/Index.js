import React from 'react';
import './Index.css'; // Importing the CSS file
import logo from '../../assets/duduck.png'; 
import logoNome from '../../assets/nomeduduck.png'; 

const Index = () => {
  return (
    <div className="cadastro-container">
         <div className="header">
        <img src={logo} alt="Duduck Logo" className="logo" />
        <img src={logoNome} alt="Duduck" className="logonome" />
      </div>
      <form className="cadastro-form">
        <label className='label'>E-mail address</label>
        <input className="input" type="email" />
        <label className='label'>Password</label>
        <input className="input" type="password"  />
        <p className='labelintro'>Use 8 ou mais caracteres com uma mistura de letras, números e símbolos.</p>
        <button className='botaocadastrar' type="submit">Comece, é grátis!</button>
        <div className="loginlink">
          <span id='labelentrar' className='labelintro 2'>Você já possui conta?</span>
          <button className='botaoentrar' type="button">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Index;
