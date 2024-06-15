import React, { useState, useEffect } from "react";
import "./Index.css";
import logo from "../../assets/duduck.png";
import logoNome from "../../assets/nomeduduck.png";
import axios from "axios";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState(false);

  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {
    // Fazer a solicitação GET para obter a lista de usuários
    axios
      .get("https://duduck-api-latest.onrender.com/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter lista de usuários:", error);
      });
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    // Verificar se o email e senha correspondem a um usuário na lista
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Login bem-sucedido, redirecionar para a próxima página ou executar a lógica desejada
      console.log("Login bem-sucedido!");
      setRedirectToLogin(true);
      setLoginError(false);
    } else {
      // Login falhou, exibir mensagem de erro
      console.log("Login falhou!");
      setLoginError(true);
    }
  };

  useEffect(() => {}, [redirectToLogin]);

  if (redirectToLogin) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return <Redirect to={`/dashboard/${user.id}`} />;
  }

  return (
    <div className="tudologin" style={{ backgroundColor: "#1C1C23" }}>
      <div className="header">
        <img src={logo} alt="Duduck Logo" className="logo" />
        <img src={logoNome} alt="Duduck" className="logonome" />
      </div>
      <form className="loginform" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email" className="label">
            E-mail
          </label>
          <input
            className="inputemail"
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label">
            Senha
          </label>
          <input
            className="inputsenha"
            type="password"
            id="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginError && (
          <p className="login-error">Credenciais inválidas. Tente novamente.</p>
        )}
        <button className="botao" type="submit">
          Entrar
        </button>

        <div className="loginlink">
          <span id="labelentrar" className="labelintro 2">
            Você não possui uma conta?
          </span>
          <Link to="/cadastro" className="botaoentrar">
            Crie uma conta
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Index;
