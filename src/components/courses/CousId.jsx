import mobimg from "../../assets/images/mobilografiya-A__rrbYZ.png";
import ios from "../../assets/images/ios-BuaZyvwq.jpg";
import front from "../../assets/images/frontend-Bxtm435o.png";
import back from "../../assets/images/backend-Dw6KPFhD.png";
import mar from "../../assets/images/marketing-DG6UKYBl.png";
import flut from "../../assets/images/flutter-BHWQ_pJJ.png";
import java from "../../assets/images/javabackend-Dntjp-Ax.png";
import dizayn from "../../assets/images/dizayn-BU3HgMix.png";
import logo from "../../assets/images/LOGO6666-B-CaV6E4.png"

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

    
const CousId = () => {
    const { t } = useTranslation(); 
const obj = [
    {
        id: 1,
        img: { mob: mobimg },
        name: "Mobilografiya",
        price: "4 300 000 sumdan",
        time: "2 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 2,
        img: { mob: ios },
        name: "Ios",
        price: "13 760 000 sumdan",
        time: "8 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 3,
        img: { mob: front },
        name: "Mobilografiya",
        price: "4 837 000 sumdan",
        time: "3 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 4,
        img: { mob: back },
        name: "Backend",
        price: "11 180 000 sumdan",
        time: "8 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 5,
        img: { mob: front },
        name: "Frontend",
        price: "11 180 000 sumdan",
        time: "8 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 6,
        img: { mob: mar },
        name: "Marketing Smm",
        price: "4 192 500 sumdan",
        time: "3 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 7,
        img: { mob: flut },
        name: "Flutter",
        price: "13 975 000 sumdan",
        time: "10 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 8,
        img: { mob: java },
        name: "Java Backnd",
        price: "11 180 000 sumdan",
        time: "10 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 9,
        img: { mob: front },
        name: "Frontend React",
        price: "2 795 000 sumdan",
        time: "2 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 10,
        img: { mob: dizayn },
        name: "Grafik Dizayn",
        price: "9 782 500 sumdan",
        time: "7 oy",
        credit:"11 180 000 so'mdan"
    },
    {
        id: 11,
        img: { mob: front },
        name: "Frontend JavaScript",
        price: "5 590 000 sumdan",
        time: "7 oy",
        credit:"11 180 000 so'mdan"
    }
];
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