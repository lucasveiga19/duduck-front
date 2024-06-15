import React, { useState, useEffect } from "react";
import "./Index.css"; // Importando o arquivo CSS
import logo from "../../assets/duduck.png";
import logoNome from "../../assets/nomeduduck.png";
import axios from "axios"; // Importando o Axios
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Index = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://duduck-api-latest.onrender.com/user",
        formData
      );
      console.log(response.data);
      setRedirectToLogin(true);
    } catch (error) {
      console.error("Erro ao fazer o POST:", error);
    }
  };

  useEffect(() => {}, [redirectToLogin]);

  if (redirectToLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="cadastro-container">
      <div className="header">
        <img src={logo} alt="Duduck Logo" className="logo" />
        <img src={logoNome} alt="Duduck" className="logonome" />
      </div>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">Endereço de E-mail</label>
          <input
            className="input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label className="label">Senha</label>
          <input
            className="input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className="labelintro">
            Use 8 ou mais caracteres com uma mistura de letras, números e
            símbolos.
          </p>
        </div>
        <button className="botaocadastrar" type="submit">
          Comece, é grátis!
        </button>
        <div className="loginlink">
          <span id="labelentrar" className="labelintro 2">
            Você já possui uma conta?
          </span>
          <Link to="/login" className="botaoentrar">
            Eu tenho uma conta
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Index;
