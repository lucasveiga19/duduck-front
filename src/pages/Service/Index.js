import React, { useState } from 'react';
import "./styleS.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import frames_2 from "../../assets/iconsPagamento/frame-2.svg";
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import line from "../../assets/iconsDashboard/line.svg";
import frame from "../../assets/iconsService/frame-5.svg";
import hbo from "../../assets/iconsConfig/logoHbo.png";
import netflix from "../../assets/iconsDashboard/netflix.png";
import vector from "../../assets/iconsService/vector-8.svg";
import youtube from "../../assets/iconsService/youtube.png";
import microsoft from "../../assets/iconsService/onedrive.png";
import spotify from "../../assets/iconsService/spotify.png";

function Index() {

    const streamingServices = [
        { name: 'Spotify', url: spotify },
        { name: 'YouTube Premium', url: youtube },
        { name: 'Microsoft OneDrive', url: microsoft },
        { name: 'Netflix', url: netflix },
        { name: 'HBO', url: hbo },
      ];

    const prices = [
        { plano: 'Plano Estudante', valor: 5.99 },
        { plano: 'Plano Individual', valor: 10.99 },
        { plano: 'Plano Dupla', valor: 15.99 },
        { plano: 'Plano Familia', valor: 20.99 },
        { plano: 'Plano Premium', valor: 25.99 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleAdd = () => {
        if (currentIndex < prices.length - 1) {
        setCurrentIndex(currentIndex + 1);
        }
    };

    const handleSubtract = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        }
    };

    const [currentIndexStreaming, setCurrentIndexStreaming] = useState(0);
    const [usedIndexes, setUsedIndexes] = useState([]);

    const handleAddStreaming = () => {
        if (usedIndexes.length < streamingServices.length) {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * streamingServices.length);
          } while (usedIndexes.includes(newIndex));
      
          setUsedIndexes((prevIndexes) => [...prevIndexes, newIndex]);
          setCurrentIndexStreaming(newIndex);
        }
      };
      
      const handleSubtractStreaming = () => {
        if (usedIndexes.length > 0) {
          const lastUsedIndex = usedIndexes[usedIndexes.length - 1];
          setUsedIndexes((prevIndexes) => prevIndexes.slice(0, -1));
          setCurrentIndexStreaming(lastUsedIndex);
        }
      };

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
                        src={streamingServices[currentIndexStreaming].url}
                        />
                    </div>
                    <div className="group" />
                    <div className="onedrive-logo">
                        <img
                        className="img"
                        alt="Frame"
                        src={streamingServices[currentIndexStreaming].url}
                        />
                    </div>
                    <div className="input-description">
                        <div className="auto-layout-vertical">
                        <div className="text-wrapper">Tipo de Plano</div>
                        <div className="input" />
                        </div>
                    </div>
                    <div className="input-plano">
                        <div className="text-plano">{prices[currentIndex].plano}</div>
                    </div>
                    <div className="HBO-GO-logo">
                        <div className="rectangle" />
                        <img
                        className="image"
                        alt="Image"
                        src={streamingServices[currentIndexStreaming].url}
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
                        onClick={handleSubtractStreaming}
                    />
                    <img
                        className="icons-back-2"
                        alt="Icons back"
                        src={icons_back}
                        onClick={handleAddStreaming}
                    />
                    <div className="frame-wrapper">
                        <div className="group-wrapper">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                            <img
                                className="image-2"
                                alt="Image"
                                src={streamingServices[currentIndexStreaming].url}
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="YT-premium">
                        <img
                        className="frame"
                        alt="Frame"
                        src={streamingServices[currentIndexStreaming].url}
                        />
                    </div>
                    </div>
                    <div className="plus" onClick={handleAdd} />
                    <div className="minus" onClick={handleSubtract} />
                    <div className="price">
                    <img
                        className="line"
                        alt="Line"
                        src={line}
                    />
                    <div className="text-wrapper-2">R${prices[currentIndex].valor}</div>
                    <div className="text-wrapper-3">Preço mensal </div>
                    <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                    <div className="botoes">
                        <Link to="/dashboard" className="botaoquatro link">Adicionar este serviço</Link>
                    </div>
                    </div>
                    <div className="text-wrapper-4">Novo Serviço </div>
                    
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