import React, { useState, useEffect } from 'react';
import './Home.css';
import foto from '../../public/tiz.jpeg'
import cliente1 from '../../public/CLIENTE.jpg'
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

const Home = () => {
  const textos = [
    { id: 1, content: "Oi, eu sou a Beatriz", color: "var(--dark-color-font-2)" },
    { id: 2, content: "Social Media", color: "var(--dark-color-font-1)" },
    { id: 3, content: "Te ajudo a impulsionar seu Instagram", color: "var(--dark-color-font-1)"}
  ];


  const [currentPositions, setCurrentPositions] = useState([0, 1, 2]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositions(prevPositions => [
        prevPositions[1],
        prevPositions[2],
        prevPositions[0]
      ]);

    
    }, 3000); 

    return () => clearInterval(interval);
  }, []);


  const whatsappNumber = "+5548996754390"; 
  const message = "Olá! Estou entrando em contato através do seu Site.";

  // Formatando o link do WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleEmailClick = () => {
    window.location.href = "mailto:beatrizpereirasm@gmail.com?subject=Assunto&body=Mensagem";
  };



  return (
    <div className="home">
      <div className="text-container">
        {currentPositions.map((pos, index) => (
          <div
            key={textos[pos].id}
            className={`text position-${index}`}
            style={{ fontSize: textos[pos].fontSize, color: textos[pos].color }}
          >
            {textos[pos].content}
          </div>
        ))}
      </div>
      <div className="boxApresenta">
        <div className="boxImg">
          <img src={foto} alt="foto de perfil" />
        </div>
        <div className="textAboutMe">
          <p>Sou apaixonada por criar conteúdos com essência. Procuro ter um olhar atento aos detalhes, para assim contar histórias através de imagens</p>
        </div>
      </div>
      <div className="linkSociais">
        <a href="https://www.instagram.com/beappereira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
          <FaInstagram className='homeIcons'/>
        </a>
        <a href={whatsappLink} target='_blank'>
          <FaWhatsapp className='homeIcons'/>
        </a>
        <FaTiktok className='homeIcons'/>
        <MdOutlineMailOutline onClick={handleEmailClick} className='homeIcons'/>
      </div>
      <div className="container-inclinado">
        <div className="inclinada">
            <p>Impulsione seu Instagram com estratégias eficazes</p>
            <p>Transforme seu Instagram em uma potência digital</p>
        </div>
        <div className="declinclinada">
            <p>Faça seu Instagram brilhar com conteúdo envolvente</p>
            <p>Destaque-se no Instagram com táticas inteligentes</p>
        </div>
      </div>
        {/* <div className="clients">
            <h1>+200K VIZUALIZAÇÕES</h1>
            <h1>+20K SEGUIDORES</h1>
            <h1>+4 CLIENTES</h1>
        </div> */}
    </div>
  );
};

export default Home;



