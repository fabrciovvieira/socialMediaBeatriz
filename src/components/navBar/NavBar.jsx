import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaTiktok, FaRegMoon, FaRegSun } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Toggle } from '../toggle/Toggle';
import './NavBar.css'



const NavBar = ({ isDark, setIsDark }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const handleEmailClick = () => {
    window.location.href = "mailto:beatrizpereirasm@gmail.com?subject=Assunto&body=Mensagem";
  };

  const whatsappNumber = "+5548996754390"; 
  const message = "Olá! Estou entrando em contato através do seu Site.";

  // Formatando o link do WhatsApp
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='container-navBar'>
      <div className="hamburger-menu">
        <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
        </div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <div className="menu-item-mobile">
                <Link to='/'>
                  <h1 className='menu-item-mobile' onClick={toggleMenu}>BEATRIZ PEREIRA</h1>
                </Link>
            </div>
            <div className="menu-item-mobile">
                {/* <Link to='/aboutMe'>
                  <h1 className='item-menu' onClick={toggleMenu}>Sobre Mim</h1>
                </Link> */}
                <Link to='/portfolio' onClick={toggleMenu}>
                  <h1 className='item-menu'>Portfólio</h1>
                </Link>
            </div>
            <div className="menu-item-mobile-icons">
                <a href="https://www.instagram.com/beappereira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                  <FaInstagram className='icon'/>
                </a>
                <a href={whatsappLink} target='_blank'>
                  <FaWhatsapp className='icon'/>
                </a>
                <MdOutlineMailOutline onClick={handleEmailClick} className='icon'/>
                <Toggle className='icon' isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
            </div>
            <div className="devCreator">
              <a href="https://www.instagram.com/fabrciovvieira?igsh=MXRldnN3dWRpemRpMA%3D%3D&utm_source=qr" target='_blank'>
                <h3>Desenvolvido por Fabrício Vieira</h3>
              </a>
            </div>
        </div>
      </div>
        <div className="content-navbar">
            <Link to='/'>
              <h1 className='nameLogo'>BEATRIZ PEREIRA</h1>
            </Link>
        </div>
        <div className="content-navbar">
            {/* <Link to='/aboutMe'>
              <h1 className='menu'>Sobre Mim</h1>
            </Link> */}
            <Link to='/portfolio'>
              <h1 className='menu'>Portfólio</h1>
            </Link>
        </div>
        <div className="content-navbar">
            <a href="https://www.instagram.com/beappereira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
                <FaInstagram className='icon'/>
            </a>
            <a href={whatsappLink} target='_blank'>
                  <FaWhatsapp className='icon'/>
            </a>
            <MdOutlineMailOutline onClick={handleEmailClick} className='icon'/>
            <Toggle className='icon' isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
        </div>
    </div>
  )
}

export default NavBar