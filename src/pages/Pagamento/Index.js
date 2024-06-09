import React, { useState, useEffect } from "react";
import "./styleP.css";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import credit_cards from "../../assets/iconsPagamento/credit-cards.svg";
import addCredit from "../../assets/iconsPagamento/icons-add.svg";
import icons_home from "../../assets/iconsDashboard/icons-home.svg";
import line_1 from "../../assets/iconsDashboard/line-1.svg";
import icons_credit_cards from "../../assets/iconsDashboard/icons-credit-cards.svg";
import icons_settings from "../../assets/iconsDashboard/icons-settings.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

function Index() {
  const { userId } = useParams();
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const [userCards, setCards] = useState([]);
  const [showAddCardForm, setShowAddCardForm] = useState(false);
  const [userCard, setUserCard] = useState({
    nameUser: "",
    number: "",
    expirationDate: "",
    cardIssuer: "",
  });

  useEffect(() => {
    axios
      .get(`https://duduck-api-latest.onrender.com/user/${userId}`)
      .then((response) => {
        setUserSubscriptions(response.data.subscriptions);
        setCards(response.data.cards);
      })
      .catch((error) => {
        console.error("Erro ao obter informações do usuário:", error);
      });
    console.log("User ID:", userId);
  }, [userId]);

  const handleAddCardClick = () => {
    setShowAddCardForm(true);
  };

  const handleRemoveCardClick = () => {
    setShowAddCardForm(false);
  };

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    setUserCard((prevUserCard) => ({
      ...prevUserCard,
      [field]: value,
    }));
  };

  const handleAddCardSubmit = (event) => {
    event.preventDefault();
    // Realizar a requisição POST com o Axios
    axios
      .post(`https://duduck-api-latest.onrender.com/cards/${userId}`, userCard)
      .then((response) => {
        console.log("Cartão adicionado com sucesso:", response.data);
        setCards((prevCards) => [...prevCards, response.data]);
        setShowAddCardForm(false);
      })
      .catch((error) => {
        console.error("Erro ao adicionar o cartão:", error);
      });
  };

  const handleDeleteCard = (cardId) => {
    // Função para deletar o cartão com base no ID
    axios
      .delete(
        `https://duduck-api-latest.onrender.com/cards/${userId}/${cardId}`
      )
      .then((response) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
        console.log(`Cartão com ID ${cardId} deletado com sucesso.`);
      })
      .catch((error) => {
        console.error("Erro ao deletar o cartão:", error);
      });
  };

  return (
    <div className="indexP">
      <div className="div">
        <div className="frameNav">
        <Link to={`/dashboard/${userId}`}>
          <div className="active-subs-2">
            <div className="overlap-groupNav">
              <div className="text-wrapper-5">Dashboard</div>
              <div className="home">
                <img className="icons-home" alt="Icons home" src={icons_home} />
              </div>
            </div>
            <img className="line-2" alt="Line" src={line_1} />
          </div>
          </Link>
        </div>
        <div className="active-subs-wrapper">
            <div className="active-subs-2 shadownBox">
              <div className="text-wrapper-6 color-orange">Pagamento</div>
              <img
                className="icons-credit-cards"
                alt="Icons credit cards"
                src={icons_credit_cards}
              />
              <img className="line-2" alt="Line" src={line_1} />
            </div>
        </div>
        <div className="frameNav-2">
          <Link to="/config">
            <div className="active-subs-2">
              <div className="text-wrapper-7">Configurações</div>
              <img className="line-2" alt="Line" src={line_1} />
            </div>
            <img
              className="icons-settings"
              alt="Icons settings"
              src={icons_settings}
            />
          </Link>
        </div>
        <Link to="/login">
          <div className="div-wrapperNav">
            <div className="active-subs-2">
              <div className="text-wrapper-8">Sair</div>
              <img className="line-2" alt="Line" src={line_1} />
            </div>
          </div>
        </Link>

        {userCards?.map((cards, index) => (
          <div className="div-2Card" key={index}>
            <div className="ellipse"></div>
            <div className="ellipse2"></div>
            <img
              className="imgCard"
              alt={`logo`}
              src={credit_cards}
              onClick={() => handleDeleteCard(cards.id)}
            />
            <div className="text-wrapper-9Card">{cards.nameUser}</div>
            <div className="text-wrapper-10Card">
              ****-****-****-
              {typeof cards.number === "string" ? cards.number.slice(-4) : ""}
            </div>
            <div className="text-wrapper-11Card">{cards.expirationDate}</div>
          </div>
        ))}

        <div className="platform">
          {userSubscriptions?.map((subscription, index) => (
            <div className="div-wrapper" key={index}>
              <img
                className="img"
                alt={`${subscription.name} logo`}
                src={subscription.image}
              />
            </div>
          ))}
        </div>
        <div className="text-wrapper-2">Inscrições</div>
        <div className="add-new-card">
          {showAddCardForm ? (
            <form onSubmit={handleAddCardSubmit}>
              <div className="box">
                <div className="groupBox">
                  <div className="active-subsBox">
                    <div className="overlap-groupBox">
                      <div className="input-passwordBox">
                        <div className="text-wrapperBox">Numero do cartão</div>
                        <input
                          className="inputBox"
                          value={userCard.number}
                          onChange={(e) => handleInputChange(e, "number")}
                          alt="NumberCard"
                        />
                      </div>
                      <div
                        className="text-wrapper-2Box"
                        onClick={handleRemoveCardClick}
                      >
                        x
                      </div>
                    </div>
                    <div className="input-password-2Box">
                      <div className="text-wrapperBox">CVV</div>
                      <input className="inputBox" alt="Cvv" />
                    </div>
                    <div className="input-password-3Box">
                      <div className="text-wrapperBox">Nome</div>
                      <input
                        className="inputBox"
                        value={userCard.nameUser}
                        onChange={(e) => handleInputChange(e, "nameUser")}
                        alt="Nome"
                      />
                    </div>
                    <div className="input-password-4Box">
                      <div className="text-wrapperBox">Validade</div>
                      <input
                        className="inputBox"
                        value={userCard.expirationDate}
                        onChange={(e) => handleInputChange(e, "expirationDate")}
                        alt="Validade"
                      />
                    </div>
                    <div className="button-googleBox">
                      <div onclick={handleRemoveCardClick}>
                        <button type="submit" className="confirmarBox">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Confirmar
                        </button>
                      </div>
                      <div className="icon-googleBox" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <div className="auto-layout" onClick={handleAddCardClick}>
              <div className="text-wrapper-3">Adicionar novo cartão</div>
              <img className="icons-add" alt="Icons add" src={addCredit} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
