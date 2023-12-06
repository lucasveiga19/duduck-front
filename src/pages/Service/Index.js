import React, { useState, useEffect } from 'react';
import "./styleS.css";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import icons_back from "../../assets/iconsPagamento/icons-back.svg";
import line from "../../assets/iconsDashboard/line.svg";
import axios from 'axios';
import { useParams, useHistory }from 'react-router-dom';

function Index() {
    const { userId } = useParams();
    const history = useHistory();
    const [streamingServices, setStreamingServices] = useState([]);

    useEffect(() => {
    axios.get('http://127.0.0.1:8080/subscriptions')
        .then(response => {
        setStreamingServices(response.data);
        })
        .catch(error => {
        console.error('Erro ao obter informações dos serviços de streaming:', error);
        });
    console.log('User ID:', userId);
    }, [userId]);

    {streamingServices.map((service, index) => (
        <div key={index} className={`${service.name.toLowerCase()}-logo`}>
          <img
            className="frame"
            alt="Frame"
            src={service.image}
          />
        </div>
      ))}

    const [currentIndexStreaming, setCurrentIndexStreaming] = useState(0);

    const handleAddStreaming = () => {
      if (streamingServices.length > 0) {
        const newIndex = (currentIndexStreaming + 1) % streamingServices.length;
        setCurrentIndexStreaming(newIndex);
      }
    };

    const handleSubtractStreaming = () => {
      if (streamingServices.length > 0) {
        const newIndex = (currentIndexStreaming - 1 + streamingServices.length) % streamingServices.length;
        setCurrentIndexStreaming(newIndex);
      }
    };

    const AddService = () => {
      axios.post(`http://127.0.0.1:8080/subscriptions/${userId}/`+streamingServices[(currentIndexStreaming + 0) % streamingServices.length]?.id)
        .then(response => {
          // Lógica após a conclusão bem-sucedida
          console.log('Serviço adicionado com sucesso!', response.data);
    
          // Redirecionar para a página desejada, se necessário
          history.push(`/dashboard/${userId}`);
        })
        .catch(error => {
          console.error('Erro ao adicionar serviço:', error);
        });
    };

    return (
            <div className="indexS">
                <div className="new-subscription-wrapper">
                <div className="new-subscription">
                    <div className="overlap">
                    <div className="light-BG">
                    </div>
                    <div className="quadrado-logo-1">
                      <img
                        className="imageLogoStreaming"
                        alt={`Logo1-${currentIndexStreaming}`}
                        src={streamingServices[(currentIndexStreaming + 9) % streamingServices.length]?.image}
                      />
                    </div>
                    <div className="quadrado-logo-2">
                      <img
                        className="imageLogoStreaming"
                        alt={`Logo2-${currentIndexStreaming}`}
                        src={streamingServices[(currentIndexStreaming + 8) % streamingServices.length]?.image}
                      />
                    </div>
                    <div className="quadrado-logo-3">
                      <img
                        className="imageLogoStreamingPrincipal"
                        alt={`Logo3-${currentIndexStreaming}`}
                        src={streamingServices[(currentIndexStreaming + 0) % streamingServices.length]?.image}
                      />
                    </div>
                    <div className="quadrado-logo-4">
                      <img
                        className="imageLogoStreaming"
                        alt={`Logo5-${currentIndexStreaming}`}
                        src={streamingServices[(currentIndexStreaming + 2) % streamingServices.length]?.image}
                      />
                    </div>
                    <div className="quadrado-logo-5">
                      <img
                        className="imageLogoStreaming"
                        alt={`Logo4-${currentIndexStreaming}`}
                        src={streamingServices[(currentIndexStreaming + 1) % streamingServices.length]?.image}
                      />
                    </div>
                    <div className="input-description">
                        <div className="auto-layout-vertical">
                        <div className="text-wrapper">Streaming</div>
                        <div className="input" />
                        </div>
                    </div>
                    <div className="input-plano">
                      <div className="text-plano">{streamingServices[currentIndexStreaming]?.name}</div>
                    </div>
                    <div className="adicionar-novo-servi">
                        Serviços Disponíveis
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
                    </div>
                    <div className="price">
                    <img
                        className="line"
                        alt="Line"
                        src={line}
                    />
                    <div className="text-wrapper-2">R${streamingServices[currentIndexStreaming]?.price}</div>
                    <div className="text-wrapper-3">Preço mensal </div>
                    <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                    <div className="botoes">
                        <Link to={`/dashboard/${userId}`} onClick={AddService} className="botaoquatro link">Adicionar este serviço</Link>
                    </div>
                    </div>
                    <div className="text-wrapper-4">Novo Serviço </div>
                    <Link to={`/dashboard/${userId}`}>
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