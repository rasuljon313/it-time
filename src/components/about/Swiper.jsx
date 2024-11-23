import imgi from "../../assets/images/Islom-BAT4FK3F.png"; 
import img2 from "../../assets/images/Mohlaroyim-CeTYveWN.jpg"; 
import img3 from "../../assets/images/Gulbahor-Coefen8F.jpg"; 
import img4 from "../../assets/images/Marjonabonu-BjBuqYeK.jpg"; 
import img5 from "../../assets/images/aziza.jpg"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import { useTranslation } from "react-i18next";
const MentorSwiper = () => {
    const { t } = useTranslation(); 
  const mentors = [
    {
      name: "Raxmatjanov Islombek",
      img: imgi,
      mentor: `${t("ho1")}`,
      txt: `${t("ho_txt1")}`,
    },
    {
      name: "Raxmatjanov Islombek",
      img: img2,
      mentor: `${t("ho2")}`,
      txt: `${t("ho_txt2")}` ,
    },
    {
      name: "Raxmatjanov Islombek",
      img: img3,
      mentor: `${t("ho3")}`,
      txt: `${t("ho_txt3")}`,
    },
    {
      name: "Raxmatjanov Islombek",
      img: img4,
      mentor: `${t("ho4")}`,
      txt:  `${t("ho_txt4")}`,
    },
    {
      name: "Raxmatjanov Islombek",
      img: img5,
      mentor: `${t("ho5")}`,
      txt: `${t("ho_txt5")}`,
    }
  ];

  return (
    <div className="inputGroup_footer">
      <h4 className="inputGroup_footer_title" data-aos="zoom-in">
        {t("metods")}
      </h4>
      <div className="inputGroup_footer_wrapper">
        <Swiper
          loop={true}  // Enable looping
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }} 
          modules={[Navigation]} 
          spaceBetween={20}  
          slidesPerView={3}  
          className="mySwiper w-full h-full"
        >

          {mentors.map((mentor, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="footerGroup_box">
                <div className="footerGroup_imgs">
                  <img src={mentor.img} alt={mentor.name} className="mentor-img" />
                  <div className="footerGroup_card_txts">
                    <h5>{mentor.name}</h5>
                    <p>{mentor.mentor}</p>
                  </div>
                </div>
                <p>{mentor.txt}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev">
          <BsArrowLeftCircle />
        </div>
        <div className="swiper-button-next">
          <BsArrowRightCircle />
        </div>
      </div>
    </div>
  );
};

export default MentorSwiper;




