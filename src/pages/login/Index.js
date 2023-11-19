import React, { useState } from 'react';
import './Index.css'; 
import logo from '../../assets/duduck.png'; 
import logoNome from '../../assets/nomeduduck.png'; 

function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica de login aqui
    console.log(email, password);
  };

  return (
       

<div className="tudologin" style={{ backgroundColor: '#1C1C23' }}>
      <div className="header">
        <img src={logo} alt="Duduck Logo" className="logo" />
        <img src={logoNome} alt="Duduck" className="logonome" />
      </div>
      <form className='loginform' onSubmit={handleLogin}>
        <div className="input-group">
        <label htmlFor="email" className="label">E-mail</label>
          <input className='inputemail'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         
        </div>
        <div className="input-group">
        <label htmlFor="password" className="label">Senha</label>
          <input className='inputsenha'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        
        </div>
        <button className='botao' type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Index;
