import React from 'react';
import "./styleC.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import perfil from "../../assets/iconsConfig/perfil.png";
import icons_arrow from "../../assets/iconsConfig/icons-arrow-medium-1.svg";
import icons_sorting from "../../assets/iconsConfig/icons-sorting.svg";
import icons_money from "../../assets/iconsConfig/icons-money.svg";
import icons_chart from "../../assets/iconsConfig/icons-chart.svg";

function Index() {
    return (
        <div className="indexC">
          <div className="div">
            <div className="text-wrapper">Configurações</div>
            <Link to="/dashboard">
            <img
              className="icons-back"
              alt="Icons back"
              src={icons_back}
            />
            </Link>
            <div className="button-small">
              <div className="text-wrapper-2">Editar perfil</div>
            </div>
            <div className="text-wrapper-3">wenyodagalera@gmail.com</div>
            <div className="text-wrapper-4">Wenyo Costa</div>
            <img
              className="imagem"
              alt="Foto de Perfil"
              src={perfil}
            />
            <div className="my-subscriptions">
              <div className="text-wrapper-5">Minhas assinaturas</div>
              <div className="auto-layout-vertical">
                <div className="auto-layout-vertical-2">
                  <div className="div-2">
                    <div className="text-wrapper-6">Ordenação</div>
                    <div className="auto-layout-2">
                      <div className="text-wrapper-7">Data</div>
                      <img
                        className="icons-arrow-medium"
                        alt="Icons arrow medium"
                        src={icons_arrow}
                      />
                    </div>
                    <img
                      className="img"
                      alt="Icons sorting"
                      src={icons_sorting}
                    />
                  </div>
                  <div className="div-2">
                    <div className="text-wrapper-6">Resumo</div>
                    <div className="auto-layout-3">
                      <div className="text-wrapper-7">Média</div>
                      <img
                        className="icons-arrow-medium"
                        alt="Icons arrow medium"
                        src={icons_arrow}
                      />
                    </div>
                    <img
                      className="img"
                      alt="Icons chart"
                      src={icons_chart}
                    />
                  </div>
                  <div className="div-2">
                    <div className="text-wrapper-6">Moeda padrão</div>
                    <div className="auto-layout-4">
                      <div className="text-wrapper-7">BRL (R$)</div>
                      <img
                        className="icons-arrow-medium"
                        alt="Icons arrow medium"
                        src={icons_arrow}
                      />
                    </div>
                    <img
                      className="img"
                      alt="Icons money"
                      src={icons_money}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Index;