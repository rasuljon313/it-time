import img1 from "../../assets/images/Islom-BAT4FK3F.png"; 
import img2 from "../../assets/images/Mohlaroyim-CeTYveWN.jpg"; 
import img3 from "../../assets/images/Gulbahor-Coefen8F.jpg"; 
import img4 from "../../assets/images/Marjonabonu-BjBuqYeK.jpg"; 
import img5 from "../../assets/images/aziza.jpg"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from "react-i18next";
const MentorSwiper = () => { 
  const { t } = useTranslation();
    const mentors = [
      {
        name: "Raxmatjanov Islombek",
        role: `${t("ho1")}`,
        experience: `${t("ho_txt1")}`,
        image:img1
      },
      {
        name: "Komiljonova Mohlaroyim",
        role: `${t("ho2")}`,
        experience: `${t("ho_txt2")}`,
        image: img2
      },
      {
        name: "G'ofurova Gulbahor",
        role: `${t("ho3")}`,
        experience: `${t("ho_txt3")}`,
        image: img3
      },
      {
        name: "Aliyev Jamshid",
        role: `${t("ho4")}`,
        experience: `${t("ho_txt4")}`,
  image:img4
     
      },
      {
        name: "Karimova Nilufar",
        role: `${t("ho5")}`,
        experience: `${t("ho_txt5")}` ,
        image: img5
      }
    ];

    return (
      <section className="mentors">
        <div className="container">
          <h2 className="mentors__title">Bizning mentorlar</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              1200: {
                slidesPerView: 3, 
                spaceBetween: 30, 
              },
              1050: {
                slidesPerView: 3, 
                spaceBetween: 30, 
              },
              1000: {
                slidesPerView: 3, 
                spaceBetween: 30, 
              },
              750: {
                slidesPerView: 2, 
              }
            }}
            className="mentors__swiper"
          >
            {mentors.map((mentor, index) => (
              <SwiperSlide key={index}>
                <div className="mentor-card">
                  <div className="mentor-card__image">
                    <img src={mentor.image} alt={mentor.name} />
                    <div className="mentor-card__details">
                    <h3>{mentor.name}</h3>
                    <p className="mentor-card__role">{mentor.role}</p>
                    </div>
                  </div>
                  <div className="mentor-card__content">
                      <p>{mentor.experience}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>  
        </div>
      </section>
    );
};

export default MentorSwiper;





