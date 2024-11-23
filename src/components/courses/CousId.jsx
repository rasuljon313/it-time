
import logo from "../../assets/images/LOGO6666-B-CaV6E4.png"

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { obj } from "./Data";

    
const CousId = () => {
    const { t } = useTranslation(); 

const param = useParams()
const car = obj.find(car=>car.id == param.id)
    
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
                    <div className="all-item1"><p className="item1-title">Talim tili</p><h4>Ozbekcha</h4></div>
                    <div className="all-item1"><p className="item1-title">Murakkablik</p><h4>Boshlangich</h4></div>
                    <div className="all-item1"><p className="item1-title">Davomiyligi</p><h4>{car.time}</h4></div>
                    <div className="all-item1"><p className="item1-title">Kust turi</p><h4>Kunduzgi</h4></div>
                    </div>
                    <div className="obj_bottom">Kurs tavsifi</div>
                </div>
                <div className="obj_item2">
                    <div className="obj_price">
                        <p>Kurs narxi</p>
                        <h3>{car.price}</h3>
                    </div>
                    <div className="obj_payment">
                        <p>Muddatli tolov</p>
                        <h3>{car.credit}</h3>
                        <button>Muddatli tolov</button>
                        <span>Muddatli tolov shartlari</span>
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