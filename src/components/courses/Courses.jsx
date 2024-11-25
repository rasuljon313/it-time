import clock from "../../assets/images/download.svg";
import { Link } from "react-router-dom";
      
import { useTranslation } from "react-i18next";
import { obj } from "./Data";
import i18next from "i18next";
import { FaStar } from "react-icons/fa";
import Footerbottom from "../about/Footerbottom";
const Courses = () => {
  const { t } = useTranslation(); 
  return (

       <>
      <div className="informations">
        <div className="container">
          <div className="informations_box">
            <h4 className="informations_box_title" data-aos="zoom-in-right">
              {t("choose")}
            </h4>
            <ul className="informations_box_list">
              {
                obj?.map(item => (
                    <Link key={item.id} to={`/cours/${item.id}`}>
                     <li className="informations_box_item" data-aos="zoom-in">
                    <div className="informations_box_img">
                      <img src={item.img.mob} alt={item.name} />
                      <div className="informations_box_payment">
                      <FaStar className="star" />
                      <span>{t("muddatli_tolov")}</span>
                      </div>
                    </div>
                    <div className="informations_card">
                      <p className="informations_card_name">{item.name}</p>
                      <div className="informations_card_price">
                        <span>{t("cost")}</span>
                        <p>
                        {item?.price}
                        {i18next.language === 'uz' ? "So'm": i18next.language === 'eng' ? "Eng":"Ru" }
                          </p>
                      </div>
                      <div className="informations_card_times">
                        <img src={clock} alt="clock" />
                        <p>{item?.time}</p>
                      </div>
                    </div>
                  </li>
                    </Link>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      <Footerbottom/>
    </>


  )
}

export default Courses
