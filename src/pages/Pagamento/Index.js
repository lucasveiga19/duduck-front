import React from 'react';
import "./styleP.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import credit_cards from "../../assets/iconsPagamento/credit-cards.svg";
import frames_2 from "../../assets/iconsPagamento/frame-2.svg";
import vector from "../../assets/iconsPagamento/vector-4.svg";
import spotify from "../../assets/iconsPagamento/LogoSpotify.svg";
import addCredit from "../../assets/iconsPagamento/icons-add.svg";
import netflix from "../../assets/iconsPagamento/netflix.png";

function Index() {
    return (
    <div className="indexP">
      <div className="div">
        <div className="text-wrapper">Pagamento</div>
        <Link to="/dashboard">
        <img
          className="icons-back"
          alt="Icons back"
          src={icons_back}
        />
        </Link>
        <img
          className="credit-cards"
          alt="Credit cards"
          src={credit_cards}
        />
        <div className="platform">
          <div className="frame">
            <img
              className="img"
              alt="Frame"
              src={frames_2}
            />
          </div>
          <div className="frame-wrapper">
            <div className="group-wrapper">
              <div className="group">
                <div className="overlap-group">
                  <img
                    className="vector"
                    alt="Vector"
                    src={vector}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              className="frame-2"
              alt="Frame"
              src={spotify}
            />
          </div>
          <div className="div-wrapper">
                  <img
                    className="image"
                    alt="Image"
                    src={netflix}
                  />
          </div>
        </div>
        <div className="text-wrapper-2">Inscrições</div>
        <div className="add-new-card">
          <div className="auto-layout">
            <div className="text-wrapper-3">Adicionar novo cartão</div>
            <img
              className="icons-add"
              alt="Icons add"
              src={addCredit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;