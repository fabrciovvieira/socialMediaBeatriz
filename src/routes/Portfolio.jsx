import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import foto from '../../public/tiz.jpg';
import alcance from '../../public/alcance.jpeg'
import dark from '../../public/dark.jpg'
import santaAna from '../../public/santaAna.png'
import acai from '../../public/acai.png'
import videoEvento from '../../public/videoEvento.mp4'


const Portfolio = () => {
    const [scrollIcon, setScrollIcon] = useState('down');

    const handleScrollClick = () => {
        if (scrollIcon === 'down') {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        } 
    };
    
    const handleUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    const handleWorkClick = () => {
        window.scrollTo({
            top: 3400,
            behavior: 'smooth'
        });
    }

    const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrollIcon('up');
        } else {
          setScrollIcon('down');
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const whatsappNumber = "+5548996754390"; 
      const message = "Olá! Estou entrando em contato através do seu Site.";
    
      // Formatando o link do WhatsApp
      const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
      const handleEmailClick = () => {
        window.location.href = "mailto:beatrizpereirasm@gmail.com?subject=Assunto&body=Mensagem";
      };

    return (
        <div className='container-portfolio'>
            <div className="headPortfolio">
                <h1>BEATRIZ PEREIRA</h1>
                <p>SOCIAL MEDIA</p>
            </div>
            <div className="scroll-indicator" onClick={handleScrollClick}>
                {scrollIcon === 'down' && <p>Ver Mais</p>}
                {scrollIcon === 'down' && <FaChevronDown className='downArrow'/>}
            </div>
            <div className="aboutMe">
                <div className="description">
                    <div className="headDescription">
                        <h3>OLÁ,</h3>
                        <p>Me chamo Beatriz</p>
                    </div>
                    <div className="text-aboutMe">
                        <p>Sou social media, crio conteúdo para
                            empresas e eventos.
                            Sou apaixonada por criar conteúdos
                            com essência, procuro ter um olhar
                            atento aos detalhes, para assim,
                            contar histórias através de imagens.
                        </p>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="imgPortfolio">
                    <img src={foto} alt="" />
                </div>
            </div>
            <div className="resultados">
                <div className="resultados-textos">
                    <div className="resultadosHead">
                        <p>Notáveis</p>
                        <h3>RESULTADOS</h3>
                    </div>
                    
                </div>
                <div className="imgResultado">
                    <img src={alcance} alt="" />
                    <div className="cicle"></div>
                </div>
                
            </div>
            <div className="text-resultado">
                        <p>
                        Com apenas dois anos de experiência no gerenciamento de redes sociais já atingimos resultados expressivos no ganho de seguidores e engajamento de perfis.
                        </p>
            </div>
            <div className="skills">
                <h2>HABILIDADES</h2>
                <div className="all-skills">
                    <p>OLHAR SENSÍVEL PARA CRIAÇÃO DE CONTEÚDO</p>
                    <p>EDIÇÃO DE VIDEO</p>
                    <p>PLANEJAMENTO ESTRATÉGICO</p>
                    <p>ANÁLISE DE MÉTRICAS</p>
                </div>
                <div className="line"></div>
            </div>
            <div className="works">
                <div className="divImg">
                    <img src={dark} alt="imagem de equipamento" />
                </div>
                <div className="headWorks">
                    <p>Casos</p>
                    <h3>DE SUCESSO</h3>
                    <span>Confira meus trabalhos</span>
                    <FaChevronDown className='downArrow' onClick={handleWorkClick}/>
                </div>
            </div>
            <div className="santaAna">
                <img src={santaAna} alt="santa ana" />
                <div className="descSantaAna">
                    <h2>SANTA ANA</h2>
                    <p>Dois anos de trabalho,
                        vídeos com mais de dez mil
                        visualizações e mais de
                        dois mil novos seguidores.
                    </p>
                    <a href="https://www.instagram.com/santaanaresidencialgeriatrico?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><span>@santaanaresidencialgeriatrico</span></a>
                </div>
            </div>
            <div className="acai">
                <img src={acai} alt="puro sabor" />
                <div className="descAcai">
                    <h2>PURO SABOR</h2>
                    <p>Com apenas 3 meses de trabalho, conseguimos mais de mil novos seguidores.
                    </p>
                    <a href="https://www.instagram.com/_delivery.purosabor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><span>@_delivery.purosabor</span></a>
                </div>
            </div>
            <div className="eventos">
            <video controls>
                <source src={videoEvento}  type="video/mp4"/>
            </video>
                <div className="descEventos">
                    <h2>EVENTOS</h2>
                    <p>
                    Além dos serviços para empresas, oferecemos também serviços para eventos. Nossa cobertura de vídeo garantirá que cada momento do seu evento seja eternizado com essência e qualidade.
                    </p>
                </div>
            </div>
            <div className="contato">
                <img src={foto} alt="meu contato" />
                <div className="meusContatos">
                    <h2>VAMOS TRABALHAR JUNTOS?!</h2>
                    <div className='contato-link'>
                        <MdOutlineMailOutline className='contatoIcon'/> 
                        <p onClick={handleEmailClick}>beatrizpereirasm@gmail.com</p>
                    </div>
                    <div className='contato-link'>
                        <a href={whatsappLink} target='_blank'>
                            <FaWhatsapp className='contatoIcon'/> 
                        </a>
                        <a href={whatsappLink} target='_blank'>
                            <p>(48) 996754390</p>
                        </a>
                    </div>
                    <div className='contato-link'>
                    <a href="https://www.instagram.com/beappereira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                        <FaInstagram className='contatoIcon'/> 
                        </a>
                        <a href="https://www.instagram.com/beappereira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                            <p>@beappereira</p>
                        </a>
                    </div>
                    <div className="aoTopo">
                        <FaChevronUp className='downArrow' onClick={handleUp}/>
                        <span>Voltar ao topo</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
