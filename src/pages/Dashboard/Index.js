import React, { useState, useEffect } from 'react';
import "./styleD.css";
import { Link, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import line from "../../assets/iconsDashboard/line.svg";
import icons_home from "../../assets/iconsDashboard/icons-home.svg";
import frame from "../../assets/iconsDashboard/frame.svg";
import line_1 from "../../assets/iconsDashboard/line-1.svg";
import icons_credit_cards from "../../assets/iconsDashboard/icons-credit-cards.svg";
import icons_settings from "../../assets/iconsDashboard/icons-settings.svg";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Index() {
  const [userSubscriptions, setUserSubscriptions] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    // Fazer a solicitação GET para obter as informações do usuário
    axios.get(`http://127.0.0.1:8080/user/${userId}`) 
      .then(response => {
        setUserSubscriptions(response.data.subscriptions);
      })
      .catch(error => {
        console.error('Erro ao obter informações do usuário:', error);
      });
    console.log('User ID:', userId);
  }, [userId]);

  // Função para calcular o custo total com base nas assinaturas do usuário
  const calculateTotalCost = () => {
    if (Array.isArray(userSubscriptions) && userSubscriptions?.length > 0) {
      return userSubscriptions.reduce((sum, subscription) => sum + subscription.price, 0);
    } else {
      return 0; // Retorna 0 se userSubscriptions não for um array ou estiver vazio
    }
  };

  // Função para encontrar a assinatura mais cara
  const findMostExpensiveSubscription = () => {
    if (Array.isArray(userSubscriptions) && userSubscriptions?.length > 0) {
      return userSubscriptions.reduce((maxSubscription, subscription) => {
        return subscription.price > (maxSubscription ? maxSubscription.price : 0) ? subscription : maxSubscription;
      }, userSubscriptions[0]);
    } else {
      return 0; // Retorna 0 se userSubscriptions não for um array ou estiver vazio
    }
  };

  // Função para encontrar a assinatura mais barata
  const findCheapestSubscription = () => {
    if (Array.isArray(userSubscriptions) && userSubscriptions?.length > 0) {
      return userSubscriptions.reduce((minSubscription, subscription) => {
        return subscription.price < (minSubscription ? minSubscription.price : Infinity) ? subscription : minSubscription;
      }, userSubscriptions[0]);
    } else {
      return 0; // Retorna 0 se userSubscriptions não for um array ou estiver vazio
    }
  };

  // Função para contar o número de assinaturas ativas
  const countActiveSubscriptions = () => {
    return userSubscriptions?.length;
  };

  return (
    <div className="indexD">
      <div className="div">
        <div className="main-ReactSpeedometer">
        </div>
        <div className="main-circle">
          <div className="text-wrapper">R${calculateTotalCost().toFixed(2)}</div>
          <div className="text-wrapper-2">Gastos Mensais</div>
        </div>
        <div className="active-subs">
          <img
            className="line"
            alt="Line"
            src={line}
          />
          <div className="text-wrapper-3">Assinaturas ativas</div>
          <div className="text-wrapper-4">{countActiveSubscriptions()}</div>
        </div>
        <div className="frame">
          <div className="active-subs-2">
            <div className="overlap-group">
              <div className="text-wrapper-5">Dashboard</div>
              <div className="home">
                <img
                  className="icons-home"
                  alt="Icons home"
                  src={icons_home}
                />
              </div>
            </div>
            <img
              className="line-2"
              alt="Line"
              src={line_1}
            />
          </div>
        </div>
        <div className="active-subs-wrapper">
        <Link to="/pagamento">
          <div className="active-subs-2">
            <div className="text-wrapper-6">Pagamento</div>
            <img
              className="icons-credit-cards"
              alt="Icons credit cards"
              src={icons_credit_cards}
            />
            <img
              className="line-2"
              alt="Line"
              src={line_1}
            />
          </div>
        </Link>
        </div>
        <div className="frame-2">
        <Link to="/config">
          <div className="active-subs-2">
            <div className="text-wrapper-7">Configurações</div>
            <img
              className="line-2"
              alt="Line"
              src={line_1}
            />
          </div>
          <img
            className="icons-settings"
            alt="Icons settings"
            src={icons_settings}
          />
        </Link>
        </div>
        <div className="div-wrapper">
          <div className="active-subs-2">
            <div className="text-wrapper-8">Sair</div>
            <img
              className="line-2"
              alt="Line"
              src={line_1}
            />
          </div>
        </div>
        <div className="highest-subs">
          <img
            className="line"
            alt="Line"
            src={line_1}
          />
          <div className="text-wrapper-3">Assinatura mais cara</div>
          <div className="text-wrapper-4">R${findMostExpensiveSubscription()?.price?.toFixed(2)}</div>
        </div>
        <div className="highest-subs-2">
          <img
            className="line"
            alt="Line"
            src={line_1}
          />
          <div className="text-wrapper-3">Assinatura mais barata</div>
          <div className="text-wrapper-4">R${findCheapestSubscription()?.price?.toFixed(2)}</div>
        </div>
        <div className="items">
        {userSubscriptions?.map((subscription, index) => (
          <div className="div-2" key={index}>
            <div className="text-wrapper-9">R${subscription.price}</div>
            <div className="text-wrapper-10">{subscription.name}</div>
            <div className="netflix-logo">
              <div className="frame-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img
                      className="image"
                      alt={`${subscription.name} logo`}
                      src={subscription.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="CTA">
        <Link to={`/service/${userId}`}>
          <div className="rectangle" />
          <img
            className="frame-5"
            alt="Frame"
            src={frame}
          />
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Index;