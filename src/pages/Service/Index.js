import React, { useState, useEffect } from "react";
import "./styleS.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import line from "../../assets/iconsDashboard/line.svg";
import icons_home from "../../assets/iconsDashboard/icons-home.svg";
import line_1 from "../../assets/iconsDashboard/line-1.svg";
import icons_credit_cards from "../../assets/iconsDashboard/icons-credit-cards.svg";
import icons_play from "../../assets/iconsDashboard/icon-play-orange.svg";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function Index() {
  const { userId } = useParams();
  const history = useHistory();
  const [streamingServices, setStreamingServices] = useState([]);

  useEffect(() => {
    axios
      .get("https://duduck-api-latest.onrender.com/subscriptions")
      .then((response) => {
        setStreamingServices(response.data);
      })
      .catch((error) => {
        console.error(
          "Erro ao obter informações dos serviços de streaming:",
          error
        );
      });
    console.log("User ID:", userId);
  }, [userId]);

  const [currentIndexStreaming, setCurrentIndexStreaming] = useState(0);

  const handleAddStreaming = () => {
    if (streamingServices.length > 0) {
      const newIndex = (currentIndexStreaming + 1) % streamingServices.length;
      setCurrentIndexStreaming(newIndex);
    }
  };

  const handleSubtractStreaming = () => {
    if (streamingServices.length > 0) {
      const newIndex =
        (currentIndexStreaming - 1 + streamingServices.length) %
        streamingServices.length;
      setCurrentIndexStreaming(newIndex);
    }
  };

  const AddService = () => {
    axios
      .post(
        `https://duduck-api-latest.onrender.com/subscriptions/${userId}/` +
          streamingServices[
            (currentIndexStreaming + 0) % streamingServices.length
          ]?.id
      )
      .then((response) => {
        // Lógica após a conclusão bem-sucedida
        console.log("Serviço adicionado com sucesso!", response.data);

        // Redirecionar para a página desejada, se necessário
        history.push(`/dashboard/${userId}`);
      })
      .catch((error) => {
        console.error("Erro ao adicionar serviço:", error);
      });
  };

  return (
    <div className="indexS">
      <div className="new-subscription-wrapper">
        <div className="new-subscription">
          <div className="frameNav">
            <Link to={`/dashboard/${userId}`}>
              <div className="active-subs-2">
                <div className="overlap-groupNav">
                  <div className="text-wrapper-5">Dashboard</div>
                  <div className="home">
                    <img
                      className="icons-home"
                      alt="Icons home"
                      src={icons_home}
                    />
                  </div>
                </div>
                <img className="line-2" alt="Line" src={line_1} />
              </div>
            </Link>
          </div>
          <div className="active-subs-wrapper">
            <Link to={`/pagamento/${userId}`}>
              <div className="active-subs-2">
                <div className="text-wrapper-6">Pagamento</div>
                <img
                  className="icons-credit-cards"
                  alt="Icons credit cards"
                  src={icons_credit_cards}
                />
                <svg
                  xmlns={icons_credit_cards}
                  className="icons-credit-cards"
                  alt="Icons credit cards"
                />
                <img className="line-2" alt="Line" src={line_1} />
              </div>
            </Link>
          </div>
          <div className="frameNav-2">
            <Link to={`/service/${userId}`}>
              <div className="active-subs-2 shadownBox">
                <div className="text-wrapper-7 color-orange">Serviços</div>
                <img className="line-2" alt="Line" src={line_1} />
              </div>
              <img
                className="icons-settings"
                alt="icons_play"
                src={icons_play}
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

          <div className="overlap">
            <div className="light-BG"></div>
            <div className="quadrado-logo-1">
              <img
                className="imageLogoStreaming"
                alt={`Logo1-${currentIndexStreaming}`}
                src={
                  streamingServices[
                    (currentIndexStreaming + 5) % streamingServices.length
                  ]?.image
                }
              />
            </div>
            <div className="quadrado-logo-2">
              <img
                className="imageLogoStreaming"
                alt={`Logo2-${currentIndexStreaming}`}
                src={
                  streamingServices[
                    (currentIndexStreaming + 4) % streamingServices.length
                  ]?.image
                }
              />
            </div>
            <div className="quadrado-logo-3">
              <img
                className="imageLogoStreamingPrincipal"
                alt={`Logo3-${currentIndexStreaming}`}
                src={
                  streamingServices[
                    (currentIndexStreaming + 0) % streamingServices.length
                  ]?.image
                }
              />
            </div>
            <div className="quadrado-logo-4">
              <img
                className="imageLogoStreaming"
                alt={`Logo5-${currentIndexStreaming}`}
                src={
                  streamingServices[
                    (currentIndexStreaming + 2) % streamingServices.length
                  ]?.image
                }
              />
            </div>
            <div className="quadrado-logo-5">
              <img
                className="imageLogoStreaming"
                alt={`Logo4-${currentIndexStreaming}`}
                src={
                  streamingServices[
                    (currentIndexStreaming + 1) % streamingServices.length
                  ]?.image
                }
              />
            </div>
            <div className="input-description">
              <div className="auto-layout-vertical">
                <div className="text-wrapper">Streaming</div>
                <div className="input" />
              </div>
            </div>
            <div className="input-plano">
              <div className="text-plano">
                {streamingServices[currentIndexStreaming]?.name}
              </div>
            </div>
            <div className="adicionar-novo-servi">Serviços Disponíveis</div>
            <img
              className="icons-back"
              alt="Icons back"
              src={icons_back}
              onClick={handleSubtractStreaming}
            />
            <img
              className="icons-back-2"
              alt="Icons back"
              src={icons_back}
              onClick={handleAddStreaming}
            />
          </div>
          <div className="price">
            <img className="line" alt="Line" src={line} />
            <div className="text-wrapper-2">
              R${streamingServices[currentIndexStreaming]?.price.toFixed(2)}
            </div>
            <div className="text-wrapper-3">Preço mensal </div>
            <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <div className="botoes">
              <Link
                to={`/dashboard/${userId}`}
                onClick={AddService}
                className="botaoquatro link"
              >
                Adicionar este serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
