import React, { useState, useEffect } from "react";
import "./styleP.css";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import credit_cards from "../../assets/iconsPagamento/credit-cards.svg";
import frames_2 from "../../assets/iconsPagamento/frame-2.svg";
import vector from "../../assets/iconsPagamento/vector-4.svg";
import spotify from "../../assets/iconsPagamento/LogoSpotify.svg";
import addCredit from "../../assets/iconsPagamento/icons-add.svg";
import netflix from "../../assets/iconsPagamento/netflix.png";
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
        <div className="text-wrapper">Pagamento</div>
        <Link to={`/dashboard/${userId}`}>
          <img className="icons-back" alt="Icons back" src={icons_back} />
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
