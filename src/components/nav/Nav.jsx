import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";  
import Input from "../input/Input";
import Navlogo from "../../assets/images/navLogo.png" 
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activ, setActiv] = useState(false);  

  const handleChange = (event) => {
    const select = event.target.value;
    i18n.changeLanguage(select);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); 
  };
  const closeMenu = () => {
    setIsMenuOpen(false);  
  };
  const handleButtonClick = () => {
        setActiv(true);  
      };

  return (
    <div className="nav">
      <div className="container">
        <div className="nav_box">
          <NavLink to="/" className="nav_logo">
            <img className="nav_logo_img" src={Navlogo} alt="Logo" />
            <h3 className="nav_logo_title">IT TIME <span>ACADEMY</span></h3>
          </NavLink>
          <ul className="nav_list">
            <NavLink to="/info">
              <h4 className="nav_list_title">{t('about_us')}</h4>
            </NavLink>
            <NavLink to="/cours">
              <h4 className="nav_list_title">{t('courses')}</h4>
            </NavLink>
            <NavLink to="/new">
              <h4 className="nav_list_title">{t('news')}</h4>
            </NavLink>
          </ul>
          <IoMenu className="burger" onClick={toggleMenu} aria-label="Open menu" />
          <div className="btn">
            <select name="Lang" id="Lang" onChange={handleChange} aria-label="Select language">
              <option value="uz">Uzbek</option>
              <option value="eng">English</option>
              <option value="ru">Russian</option>
            </select>
            <button className="nav_btn" onClick={handleButtonClick}>
               {t('free')}
            </button>
          </div>
        </div>
      </div>

<div className={`menu ${isMenuOpen ? 'active' : ''}`}>
<div className='menu_box'>
        <div className="menu_close">
        <IoClose className="menu_close_icon" onClick={toggleMenu} aria-label="Close menu" />
        </div>
        <ul className="menu_list">
        <NavLink to="/info" onClick={closeMenu}>
          <h4 className="menu_title">{t('about_us')}</h4>
        </NavLink>
        <NavLink to="/cours" onClick={closeMenu}>
          <h4 className="menu_title">{t('courses')}</h4>
        </NavLink>
        <NavLink to="/new" onClick={closeMenu}>
          <h4 className="menu_title">{t('news')}</h4>
        </NavLink>
        </ul>
        <div className="menu_btn">
            <select name="Lang" id="Lang" onChange={handleChange} aria-label="Select language">
              <option value="uz">Uzbek</option>
              <option value="eng">English</option>
              <option value="ru">Russian</option>
            </select>
          </div>
      </div>
</div>
      

      <Input activ={activ} setActiv={setActiv} />
    </div>
  );
};

export default Nav;



