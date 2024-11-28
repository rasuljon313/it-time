import { NavLink } from "react-router-dom"
import img from "../../assets/images/navLogo.png"
import insta from "../../assets/images/instagram.png"
import face from "../../assets/images/facebook.png"
import telegram from "../../assets/images/telegram.png"
import you from "../../assets/images/youtube.png"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import Input from "../input/Input"
// const Footerbottom = () => {
//     const [activ, setActiv] = useState(false); 
//     const { t } = useTranslation(); 
//     const handleButtonClick = () => {
//         setActiv(true);  
//       };
//   return (
//     <>
//   <Input activ={activ} setActiv={setActiv} />
//      <div className="footerbottom">
//         <div className="container">
//             <div className="footerbottom_box">
//                 <div className="footerbottom_logo" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
//                 <img src={img} alt="" />
//                  <h3 className="footerbottom_logo_title">IT TIME <span>ACADEMY</span></h3>
//                 </div>
//                 <ul className="footerbottom_list" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
//                     <li >
//                         <NavLink className="footerbottom_item" to="/cours">
//                         {t("courses")}
//                         </NavLink>
//                         </li>
//                     <li >
//                         <NavLink className="footerbottom_item" to="/info">
//                         {t("about_us")}
//                         </NavLink>
//                         </li>
//                     <li >
//                         <div className="footerbottom_item" onClick={handleButtonClick} >
//                         {t("booking")}
//                         </div>
//                         </li>
//                 </ul>
//                 <div className="footerbottom_cards" data-aos="flip-up" >
//                  <span>
//                     <a className="footerbottom_cards_tell"  href="tel:+998947820092" target="_blank" rel="noopener noreferrer">+998947820092</a>
//                  </span>
//                     <ul className="footerbottom_card">
//                         <a href="https://www.instagram.com/it_time_academy/#" className="footerbottom_link">
//                             <img src={insta} alt="" />
//                         </a>
//                         <li className="footerbottom_link">
//                         <img src={face} alt="" />
//                         </li>
//                         <a href="https://t.me/it_time" className="footerbottom_link">
//                         <img src={telegram} alt="" />
//                         </a>
//                         <a href="https://www.youtube.com/@it-time-academy" className="footerbottom_link">
//                         <img src={you} alt="" />
//                         </a>
//                     </ul>
//                 </div>
//             </div>
//             <p className="footerbottom_txt" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
//             © It Time Acadmey 2021 - 2024 All rights reserved
//             </p>
//         </div>
//      </div>

//     </>
//   )
// }

// export default Footerbottom


import { useEffect } from "react";

const Footerbottom = () => {
    const [activ, setActiv] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0); // Sahifani yuqoriga siljitadi
    }, []);

    const handleButtonClick = () => {
        setActiv(true);
    };

    return (
        <>
            <Input activ={activ} setActiv={setActiv} />
            <div className="footerbottom">
                <div className="container">
                    <div className="footerbottom_box">
                        <div className="footerbottom_logo" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
                            <img src={img} alt="" />
                            <h3 className="footerbottom_logo_title">IT TIME <span>ACADEMY</span></h3>
                        </div>
                        <ul className="footerbottom_list" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
                            <li>
                                <NavLink className="footerbottom_item" to="/cours">
                                    {t("courses")}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="footerbottom_item" to="/info">
                                    {t("about_us")}
                                </NavLink>
                            </li>
                            <li>
                                <div className="footerbottom_item" onClick={handleButtonClick}>
                                    {t("booking")}
                                </div>
                            </li>
                        </ul>
                        <div className="footerbottom_cards" data-aos="flip-up">
                            <span>
                                <a className="footerbottom_cards_tell" href="tel:+998947820092" target="_blank" rel="noopener noreferrer">+998947820092</a>
                            </span>
                            <ul className="footerbottom_card">
                                <a href="https://www.instagram.com/it_time_academy/#" className="footerbottom_link">
                                    <img src={insta} alt="" />
                                </a>
                                <li className="footerbottom_link">
                                    <img src={face} alt="" />
                                </li>
                                <a href="https://t.me/it_time" className="footerbottom_link">
                                    <img src={telegram} alt="" />
                                </a>
                                <a href="https://www.youtube.com/@it-time-academy" className="footerbottom_link">
                                    <img src={you} alt="" />
                                </a>
                            </ul>
                        </div>
                    </div>
                    <p className="footerbottom_txt" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="1500">
                        © It Time Acadmey 2021 - 2024 All rights reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footerbottom;
