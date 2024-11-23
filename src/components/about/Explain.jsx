
import { useTranslation } from "react-i18next"
import first from "../../assets/images/firstimg.png"
import second from "../../assets/images/Untitled 4.png"
import third from "../../assets/images/Untitled 3.png"
import four from "../../assets/images/Untitled 5.png"
import five from "../../assets/images/Untitled 6.png"
import six from "../../assets/images/Untitled 7.png"

const Explain = () => {

  const { t } = useTranslation();

  return (
    <div className="explain">
    <div className="container">
      <div className="explain_box">
        <h4 className="explain_box_title" data-aos="zoom-in" >{t("why_us")}</h4>
         <ul className="explain_box_list">
          <li className="explain_box_item" data-aos="zoom-in" >
            <img  src={first} alt="" />
            <p className="explain_box_item_title">
            {t("no_money")}</p>
            <p className="explain_box_item_txt">{t("no_money_txt")}</p>
            </li>
          <li className="explain_box_item" data-aos="zoom-in">
            <img src={second} alt="" />
            <p className="explain_box_item_title">
            {t("sale")}</p>
            <p className="explain_box_item_txt">{t("sale_txt")}</p>
            </li>
          <li className="explain_box_item" data-aos="zoom-in" >
            <img src={third} alt="" />
            <p className="explain_box_item_title">
            {t("strong_masters")}</p>
            <p className="explain_box_item_txt">{t("strong_txt")}</p>
            </li>
          <li className="explain_box_item" data-aos="zoom-in" >
            <img src={four} alt="" />
            <p className="explain_box_item_title">
            {t("experiance")}</p>
            <p className="explain_box_item_txt">{t("experiance_txt")}</p>
            </li>
          <li className="explain_box_item" data-aos="zoom-in" >
            <img src={five} alt="" />
            <p className="explain_box_item_title">
            {t("zamonaviy")}</p>
            <p className="explain_box_item_txt">{t("zamonaviy_txt")}</p>
            </li>
          <li className="explain_box_item" data-aos="zoom-in">
            <img src={six} alt="" />
            <p className="explain_box_item_title">
            {t("certificate")}</p>
            <p className="explain_box_item_txt">{t("certificate_txt")}</p>
            </li>
         </ul>
      </div>
    </div>
    </div>
  )
}

export default Explain