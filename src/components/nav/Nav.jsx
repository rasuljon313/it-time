import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useState } from "react";  // Import useState for managing modal visibility
import Input from "../input/Input";
import Navlogo from "../../assets/images/navLogo.png" // Make sure the Input component is imported correctly

const Nav = () => {
  const { t, i18n } = useTranslation();
  const [activ, setActiv] = useState(false);  // State for managing modal visibility

  // Handle language change
  const handleChange = (event) => {
    const select = event.target.value;
    i18n.changeLanguage(select);
  };

  // Toggle modal visibility when the nav button is clicked
  const handleButtonClick = () => {
    setActiv(true);  // Set activ to true to show the modal
  };

  return (
    <div className="nav">
      <div className="container">
        <div className="nav_box">
          <NavLink to="/" className="nav_logo">
            <img className="nav_logo_img" src={Navlogo} alt="" />
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
          
          <div className="btn">
            <select name="Lang" id="Lang" onChange={handleChange}>
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

      {/* Render the Input component and pass activ state as a prop */}
      <Input activ={activ} setActiv={setActiv} />
    </div>
  );
};

export default Nav;
