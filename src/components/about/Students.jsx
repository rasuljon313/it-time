import { useTranslation } from "react-i18next";
import first from "../../assets/images/video1-M_nm2fXW.mp4"
import second from "../../assets/images/video2-CezXuMQu.mp4"
import third from "../../assets/images/video3-D5zV-PVE.mp4"
import four from "../../assets/images/video4-LbU7B-6X.mp4"
import five from "../../assets/images/video5-BjJEkCB5.mp4"
import six from "../../assets/images/first.mp4"
const Students = () => {
  const { t } = useTranslation(); 
  return (
    <>
    <div className="studens">
        <div className="container">
            <div className="studens_box">
                <h4 className="studens_box_title" data-aos="flip-left" data-aos-duration="1000">{t("opinion")}</h4>
                <ul className="studens_box_list">
               
  <li className="studens_box_item" data-aos="zoom-in" data-aos-duration="1300">
    <div className="studens_box_item_stu">
    <video  className="studens_video" controls src={first}></video>
    </div>
    <p className="studens_box_item_title">Hojimuhammedov Muhammadislom</p>
    <p className="studens_box_item_txt">{`"Front end" ${t("finishing")}`} </p>
  </li>
  <li className="studens_box_item" data-aos="zoom-in" data-aos-duration="1300">
  <div className="studens_box_item_stu">
    <video  className="studens_video" controls src={second}></video>
    </div>
    <p className="studens_box_item_title">Haydarov Asilbek</p>
    <p className="studens_box_item_txt">{`"Front end" ${t("finishing")}`}</p>
  </li>
  <li className="studens_box_item" data-aos="zoom-in" data-aos-duration="1300">
  <div className="studens_box_item_stu">
    <video  className="studens_video" controls src={third}></video>
    </div>
    <p className="studens_box_item_title">Abdullayev Farruh</p>
    <p className="studens_box_item_txt">{`"Back end" ${t("finishing")}`} </p>
  </li>
  <li className="studens_box_item" data-aos="zoom-in" data-aos-duration="1300">
  <div className="studens_box_item_stu">
    <video  className="studens_video" controls src={four}></video>
    </div>
    <p className="studens_box_item_title">Samandar</p>
    <p className="studens_box_item_txt">{`"Front end" ${t("finishing")}`} </p>
  </li>
  <li className="studens_box_item" data-aos="zoom-in" data-aos-duration="1300">
  <div className="studens_box_item_stu">
    <video  className="studens_video" controls src={five}></video>
    </div>
    <p className="studens_box_item_title">Lazizbek</p>
    <p className="studens_box_item_txt">{`"Front end" ${t("finishing")}`} </p>
  </li>
  <li className="studens_box_item" data-aos="zoom-in" data-aos-duration="1300">
  <div className="studens_box_item_stu">
    <video  className="studens_video" controls src={six}></video>
    </div>
    <p className="studens_box_item_title">Jafarbek</p>
    <p className="studens_box_item_txt">{`"Phyton Backend" ${t("finishing")}`} </p>
  </li>
</ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Students