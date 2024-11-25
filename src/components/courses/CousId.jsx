
import logo from "../../assets/images/LOGO6666-B-CaV6E4.png"

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { obj } from "./Data";

    
const CousId = () => {
    const { t } = useTranslation(); 

const param = useParams()
const car = obj.find(car=>car.id == param.id)
console.log(car);

    
  return (
<>
<div className="obj">
    <div className="container">
        <div className="obj_cards">
            <div className="obj_title">
                {car.name}
            </div>
            <div className="obj_wrapper">
                <div className="obj_item1">
                    <div className="obj_img">
                        <img src={car.img.mob} alt="" />
                    </div>
                    <div className="obj_info">
                    <div className="all-item1"><p className="item1-title">{t("language")}</p><h4>{t("which_lan")}</h4></div>
                    <div className="all-item1"><p className="item1-title">{t("murakkablik")}</p><h4>{t("murakkablik-turi")}</h4></div>
                    <div className="all-item1"><p className="item1-title">{t("davomiyligi")}</p><h4>{car.time} {t("month")}</h4></div>
                    <div className="all-item1"><p className="item1-title">{t("kurs_turi")}</p><h4>{t("kundizgi")}</h4></div>
                    </div>
                    <div className="obj_bottom">{t("kurs_hqida")}</div>
                </div>
                <div className="obj_item2">
                    <div className="obj_price">
                        <p>{t("kurs_narxi")}</p>
                        <h3>{car.price} {t("cost")}</h3>
                    </div>
                    <div className="obj_payment">
                        <p>{t("muddatli_tolov")}</p>
                        <h3>{car.credit}</h3>
                        <button>{t("muddatli_tolov")}</button>
                        <span>{t("tolov_shartlar")}</span>
                    </div>
                    <div className="obj_courses">
                        <a href="/">
                        <img src={logo} alt="" />
                        </a>
                        <a  href="/cours">
                        <p>{t("show")}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default CousId