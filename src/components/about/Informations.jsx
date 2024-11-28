import mobimg from "../../assets/images/mobilografiya-A__rrbYZ.png";
import ios from "../../assets/images/ios-BuaZyvwq.jpg";
import front from "../../assets/images/frontend-Bxtm435o.png";
import back from "../../assets/images/backend-Dw6KPFhD.png";
import mar from "../../assets/images/marketing-DG6UKYBl.png";
import flut from "../../assets/images/flutter-BHWQ_pJJ.png";
import java from "../../assets/images/javabackend-Dntjp-Ax.png";
import dizayn from "../../assets/images/dizayn-BU3HgMix.png"
import clock from "../../assets/images/download.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";

const Informations = () => {
  const { t } = useTranslation(); 
  const obj = [
    {
        id:1,
      img: { mob: mobimg },
      name: "Mobilografiya",
      price: `4 300 000 ${t("sum")}` ,
      time: `2 ${t("month")}`,
    },
    {
        id:2,
      img: { mob: ios },
      name: "Ios",
      price: `13 760 000 ${t("sum")}`,
      time: `8 ${t("month")}`,
    },
    {
        id:3,
      img: { mob: front },
      name: "Frontend Internship",
      price: `4 837 000 ${t("sum")}`,
      time: `3 ${t("month")}`,
    },
    {
        id:4,
      img: { mob: back },
      name: "Backend",
      price: `11 180 000 ${t("sum")}`,
      time: `8 ${t("month")}`,
    },
    {
        id:5,
      img: { mob: front },
      name: "Frontend",
      price: `11 180 000 ${t("sum")}`,
      time: `8 ${t("month")}`,
    },
    {
        id:6,
      img: { mob: mar },
      name: "Marketing Smm",
      price: `4 192 500 ${t("sum")}`,
      time: `3 ${t("month")}`,
    },
    {
        id:7,
        img: { mob: flut },
        name: "Flutter",
        price: `13 975 000 ${t("sum")}`,
        time: `10 ${t("month")}`,
    },
    {
        id:8,
        img: { mob: java },
        name: "Java Backnd",
        price: `11 180 000 ${t("sum")}`,
        time: `10 ${t("month")}`,
    },
    {
        id:9,
        img: { mob: front },
        name: "Frontend React",
        price: `2 795 000 ${t("sum")}`,
        time: `2 ${t("month")}`,
    },
    {
        id:10,
        img: { mob: dizayn },
        name: "Grafik Dizayn",
        price: `9 782 500 ${t("sum")}`,
        time: `7 ${t("month")}`,
    },
    {
        id:11,
        img: { mob: front },
        name: "Frontend JavaScript",
        price: `5 590 000 ${t("sum")}`,
        time: `7 ${t("month")}`,
    }
  ];

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
                        <p>{item.price}</p>
                      </div>
                      <div className="informations_card_times">
                        <img src={clock} alt="clock" />
                        <p>{item.time}</p>
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
    </>
  );
}

export default Informations;
