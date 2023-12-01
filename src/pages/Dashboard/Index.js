import React from 'react';
import "./styleD.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import line from "../../assets/iconsDashboard/line.svg";
import icons_home from "../../assets/iconsDashboard/icons-home.svg";
import frame from "../../assets/iconsDashboard/frame.svg";
import line_1 from "../../assets/iconsDashboard/line-1.svg";
import icons_credit_cards from "../../assets/iconsDashboard/icons-credit-cards.svg";
import icons_settings from "../../assets/iconsDashboard/icons-settings.svg";
import spotify from "../../assets/iconsDashboard/spotify-logo.svg";
import microsoft from "../../assets/iconsDashboard/microsoft.svg";
import netflix from "../../assets/iconsDashboard/netflix.png";
import vector1 from "../../assets/iconsDashboard/vector-1.svg";

function Index() {
  const streamingServices = [
    { name: 'Spotify', cost: 5.99 },
    { name: 'YouTube Premium', cost: 18.99 },
    { name: 'Microsoft OneDrive', cost: 29.99 },
    { name: 'Netflix', cost: 37.99 },
  ];

  const totalCost = streamingServices.reduce((sum, service) => sum + service.cost, 0);

  const fillPercentage = (totalCost / 1000) * 100;

  return (
    <div className="indexD">
      <div className="div">
        <div className="main-ReactSpeedometer">
        </div>
        <div className="main-circle">
          <div className="text-wrapper">R${totalCost.toFixed(2)}</div>
          <div className="text-wrapper-2">Gastos Mensais</div>
        </div>
        <div className="active-subs">
          <img
            className="line"
            alt="Line"
            src={line}
          />
          <div className="text-wrapper-3">Assinaturas ativas</div>
          <div className="text-wrapper-4">12</div>
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
          <div className="text-wrapper-4">R$59.99</div>
        </div>
        <div className="highest-subs-2">
          <img
            className="line"
            alt="Line"
            src={line_1}
          />
          <div className="text-wrapper-3">Assinatura mais barata</div>
          <div className="text-wrapper-4">R$11.99</div>
        </div>
        <div className="items">
          <div className="div-2">
            <div className="text-wrapper-9">R${streamingServices[0].cost}</div>
            <div className="text-wrapper-10">{streamingServices[0].name}</div>
            <img
              className="spotify-logo"
              alt="Spotify logo"
              src={spotify}
            />
          </div>
          <div className="div-2">
            <div className="text-wrapper-11">R${streamingServices[1].cost}</div>
            <div className="text-wrapper-12">{streamingServices[1].name}</div>
            <div className="YT-premium-lgoo">
              <div className="group-wrapper">
                <div className="group">
                  <div className="vector-wrapper">
                    <img
                      className="vector"
                      alt="Vector"
                      src={vector1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div-2">
            <div className="text-wrapper-13">R${streamingServices[2].cost}</div>
            <div className="text-wrapper-14">{streamingServices[2].name}</div>
            <div className="onedrive-logo">
              <img
                className="frame-3"
                alt="Frame"
                src={microsoft}
              />
            </div>
          </div>
          <div className="div-2">
            <div className="text-wrapper-15">R${streamingServices[3].cost}</div>
            <div className="text-wrapper-16">{streamingServices[3].name}</div>
            <div className="netflix-logo">
              <div className="frame-4">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <img
                      className="image"
                      alt="Image"
                      src={netflix}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CTA">
        <Link to="/service">
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
