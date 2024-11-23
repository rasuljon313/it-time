import { useState } from "react";
import zamon from "../../assets/images/zamon-BYziiA9T.svg"
import loyal from "../../assets/images/loyal-T6wEGNwi.png"
import auto from "../../assets/images/autozom-CM99tOti.svg"
import itblim from "../../assets/images/itbilim-b7lKQeqw.jpg"
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay } from 'swiper/modules';
const Questions = () => {
  const { t } = useTranslation(); 
  const [activ, setActiv] = useState(null);

  const a = (questionNumber) => {
    if (activ === questionNumber) {
      setActiv(null);
    } else {
      setActiv(questionNumber); 
    }
  };

  return (
    <>
      <div className="question">
        <div className="container">
          <h2 className="question_title" data-aos="flip-up" >
            {t("most_questions")}
          </h2>
          <ul className="question_list">
            <li className="question_item" data-aos="zoom-in" data-aos-duration="1500">
              <div className="question_item_box">
                <h3 className={`question_item_title ${activ === 1 ? "activ" : ""}`}>
                  {t("question1")}
                </h3>
                <p className={`question_item_txt ${activ === 1 ? "activ" : ""}`}>{t("ansver1")}</p>
              </div>
              <span
                className={`question_item_open ${activ === 1 ? "" : "activ"}`}
                onClick={() => a(1)}
              >
                {activ === 1 ? `▲` : `▼`}
              </span>
            </li>
            <li className="question_item" data-aos="zoom-in" data-aos-duration="1500">
              <div className="question_item_box">
                <h3 className={`question_item_title ${activ === 2 ? "activ" : ""}`}>
                  {t("question2")}
                </h3>
                <p className={`question_item_txt ${activ === 2 ? "activ" : ""}`}>{t("ansver2")}</p>
              </div>
              <span
                className={`question_item_open ${activ === 2 ? "" : "activ"}`}
                onClick={() => a(2)}
              >
                {activ === 2 ? `▲` : `▼`}
              </span>
            </li>
            <li className="question_item" data-aos="zoom-in" data-aos-duration="1500">
              <div className="question_item_box">
                <h3 className={`question_item_title ${activ === 3 ? "activ" : ""}`}>
                  {t("question3")}
                </h3>
                <p className={`question_item_txt ${activ === 3 ? "activ" : ""}`}>{t("ansver3")}</p>
              </div>
              <span
                className={`question_item_open ${activ === 3 ? "" : "activ"}`}
                onClick={() => a(3)}
              >
                {activ === 3 ? `▲` : `▼`}
              </span>
            </li>
          </ul>

          <h2 className="question_bottom_title" data-aos="flip-up">
            {t("hamkorlarimiz")}
          </h2>
          <ul className="question_bottom_list">
          <Swiper
          loop={true} 
          centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Autoplay]} 
          spaceBetween={20}  
          slidesPerView={3}  
          className="mySwiper w-full h-full"
        > 
        <SwiperSlide>
        <a href="https://zamontour.uz/" className="question_bottom_item">
               <img src={zamon} alt="" />
             </a>
        </SwiperSlide>
             <SwiperSlide>
             <a href="https://www.uzloyal.uz/" className="question_bottom_item">
               <img src={loyal} alt="" />
             </a>
             </SwiperSlide>
             <SwiperSlide>
             <a href="https://autozoomrental.com/" className="question_bottom_item">
               <img src={auto} alt="" />
             </a>
             </SwiperSlide>
             <SwiperSlide>
             <a href="https://it-bilim.uz/" className="question_bottom_item">
               <img src={itblim} alt="" />
             </a>
             </SwiperSlide>
             
             </Swiper>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Questions;

