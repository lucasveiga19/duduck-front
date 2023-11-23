import React from 'react';
import "./styleS.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import frames_2 from "../../assets/iconsPagamento/frame-2.svg";
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import line from "../../assets/iconsDashboard/line.svg";
import frame from "../../assets/iconsService/frame-5.svg";
import config from "../../assets/iconsConfig/logoHbo.png";
import netflix from "../../assets/iconsDashboard/netflix.png";
import vector from "../../assets/iconsService/vector-8.svg";

function Index() {
    return (
            <div className="indexS">
                <div className="new-subscription-wrapper">
                <div className="new-subscription">
                    <div className="overlap">
                    <div className="light-BG">
                    </div>
                    <div className="spotify-logo">
                        <img
                        className="frame"
                        alt="Frame"
                        src={frames_2}
                        />
                    </div>
                    <div className="group" />
                    <div className="onedrive-logo">
                        <img
                        className="img"
                        alt="Frame"
                        src={frame}
                        />
                    </div>
                    <div className="input-description">
                        <div className="auto-layout-vertical">
                        <div className="text-wrapper">Description</div>
                        <div className="input" />
                        </div>
                    </div>
                    <div className="HBO-GO-logo">
                        <div className="rectangle" />
                        <img
                        className="image"
                        alt="Image"
                        src={config}
                        />
                    </div>
                    <div className="adicionar-novo-servi">
                        Adicionar novo
                        <br />
                        serviço
                    </div>
                    <img
                        className="icons-back"
                        alt="Icons back"
                        src={icons_back}
                    />
                    <img
                        className="icons-back-2"
                        alt="Icons back"
                        src={icons_back}
                    />
                    <div className="frame-wrapper">
                        <div className="group-wrapper">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                            <img
                                className="image-2"
                                alt="Image"
                                src={netflix}
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="YT-premium-lgoo">
                        <div className="div-wrapper">
                        <div className="div">
                            <div className="vector-wrapper">
                            <img
                                className="vector-2"
                                alt="Vector"
                                src={vector}
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="plus" />
                    <div className="minus" />
                    <div className="price">
                    <img
                        className="line"
                        alt="Line"
                        src={line}
                    />
                    <div className="text-wrapper-2">R$5.99</div>
                    <div className="text-wrapper-3">Preço mensal</div>
                    </div>
                    <div className="text-wrapper-4">Novo Serviço</div>
                    <Link to="/dashboard">
                    <img
                    className="icons-back-3"
                    alt="Icons back"
                    src={icons_back}
                    />
                    </Link>
                </div>
                </div>
            </div>
    );
}

export default Index;