
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation } from 'swiper/modules';
// import { BsArrowLeftCircle } from "react-icons/bs";
// import { BsArrowRightCircle } from "react-icons/bs";
// import { useTranslation } from "react-i18next";
// const MentorSwiper = () => {
//     const { t } = useTranslation(); 
//   const mentors = [
//     {
//       name: "Raxmatjanov Islombek",
//       img: imgi,
//       mentor: `${t("ho1")}`,
//       txt: `${t("ho_txt1")}`,
//     },
//     {
//       name: "Raxmatjanov Islombek",
//       img: img2,
//       mentor: `${t("ho2")}`,
//       txt: `${t("ho_txt2")}` ,
//     },
//     {
//       name: "Raxmatjanov Islombek",
//       img: img3,
//       mentor: `${t("ho3")}`,
//       txt: `${t("ho_txt3")}`,
//     },
//     {
//       name: "Raxmatjanov Islombek",
//       img: img4,
//       mentor: `${t("ho4")}`,
//       txt:  `${t("ho_txt4")}`,
//     },
//     {
//       name: "Raxmatjanov Islombek",
//       img: img5,
//       mentor: `${t("ho5")}`,
//       txt: `${t("ho_txt5")}`,
//     }
//   ];

//   return (
//     <div className="inputGroup_footer">
//       <h4 className="inputGroup_footer_title" data-aos="zoom-in">
//         {t("metods")}
//       </h4>
//       <div className="inputGroup_footer_wrapper">
//         <Swiper
//           loop={true}  // Enable looping
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }} 
//           modules={[Navigation]} 
//           spaceBetween={20}  
//           slidesPerView={3}  
//           className="mySwiper w-full h-full"
//         >

//           {mentors.map((mentor, index) => (
//             <SwiperSlide key={index} className="flex justify-center">
//               <div className="footerGroup_box">
//                 <div className="footerGroup_imgs">
//                   <img src={mentor.img} alt={mentor.name} className="mentor-img" />
//                   <div className="footerGroup_card_txts">
//                     <h5>{mentor.name}</h5>
//                     <p>{mentor.mentor}</p>
//                   </div>
//                 </div>
//                 <p>{mentor.txt}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div className="swiper-button-prev">
//           <BsArrowLeftCircle />
//         </div>
//         <div className="swiper-button-next">
//           <BsArrowRightCircle />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MentorSwiper;




import img1 from "../../assets/images/Islom-BAT4FK3F.png"; 
// import img2 from "../../assets/images/Mohlaroyim-CeTYveWN.jpg"; 
// import img3 from "../../assets/images/Gulbahor-Coefen8F.jpg"; 
// import img4 from "../../assets/images/Marjonabonu-BjBuqYeK.jpg"; 
// import img5 from "../../assets/images/aziza.jpg"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const MentorSwiper = () => { 
    const mentors = [
      {
        name: "Raxmatjanov Islombek",
        role: "Frontend dasturchi",
        experience: "Tajribasi—1,5 yil, Til bo'yicha daraja—rus tili B1",
        education: "Qo'shimcha ma'lumotlar—talaba(TATU 4-kurs)",
        image:img1
      },
      {
        name: "Komiljonova Mohlaroyim",
        role: "Arab tili o'qituvchisi",
        experience: "Tajribasi—2 yil, Til bo'yicha daraja–Arab tili B2",
        education: "Qo'shimcha ma'lumotlar (Islom institutida talaba)",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
      },
      {
        name: "G'ofurova Gulbahor",
        role: "Grafik dizayner",
        experience: "Tajribasi—4 yil, Til bo'yicha daraja—B1(rus tili)",
        education: "Qo'shimcha ma'lumot—talaba(Moliya 3-kurs)",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
      },
      {
        name: "Aliyev Jamshid",
        role: "Backend dasturchi",
        experience: "Tajribasi—3 yil, Til bo'yicha daraja—ingliz tili B2",
        education: "Qo'shimcha ma'lumot—Software Engineer at Tech Solutions",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
      },
      {
        name: "Karimova Nilufar",
        role: "UI/UX dizayner",
        experience: "Tajribasi—2.5 yil, Til bo'yicha daraja—ingliz tili B1",
        education: "Qo'shimcha ma'lumot—talaba(INHA universiteti 3-kurs)",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
      }
    ];

    return (
      <section className="mentors">
        <div className="mentors__container">
          <h2 className="mentors__title">Bizning mentorlar</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}
            className="mentors__swiper"
          >
            {mentors.map((mentor, index) => (
              <SwiperSlide key={index}>
                <div className="mentor-card">
                  <div className="mentor-card__image">
                    <img src={mentor.image} alt={mentor.name} />
                  </div>
                  <div className="mentor-card__content">
                    <h3>{mentor.name}</h3>
                    <p className="mentor-card__role">{mentor.role}</p>
                    <div className="mentor-card__details">
                      <p>{mentor.experience}</p>
                      <p>{mentor.education}</p>
                    </div>
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




