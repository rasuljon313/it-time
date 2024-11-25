import { useTranslation } from "react-i18next";
import banenr from  "../../assets/images/aboutbanner-DkiekoLL.png"
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import Footerbottom from "../about/Footerbottom";
const HomeInfo = () => {
  const { t } = useTranslation(); 
  return (
    <>
  
     <div className="homeinfo">
      <div className="container">
        <h2 className="homeinfo_title">{t("about_us")}</h2>
        <img src={banenr} alt="" />
        <div className="homeinfo_content">
          <h3>{t("malumot")}</h3>
          <article className="homeinfo_content_articl">
            <p>{t("it1")}</p>
            <p>{t("it2")} </p>
            <p>{t("it3")} </p>
          </article>
          <p>{t("oquv_markazi")}</p>
          <ul className="homeinfo_content_list">
            <li>{t("wifi")}</li>
            <li>{t("proekt")}</li>
            <li>{t("koworking")}</li>
            <li>{t("oquvchilar")}</li>
            <li>{t("doimiy_ustoz")}</li>
            <li>{t("sertificat")}</li>
            <li>{t("quality")}</li>
            <li>{t("darslar_yoziladi")}</li>
            <li>{t("ishga")}</li>
          </ul>
          <div className="homeinfo_about_contact">
            <h4>{t("boglaning")}</h4>
            <div className="homeinfo_about_contact_items" >
              <div className="homeinfo_about_contact_phone">
              <LuPhone />
              <span>+998 (94) 782 00 92</span>
              </div>
              <div className="homeinfo_about_contact_location">
              <IoLocationOutline />
              <span>{t("location")}</span>
              </div> 
              <div className="homeinfo_about_contact_site">
              <CiGlobe />
              <a href="https://t.me/it_time">https://t.me/it_time_admin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
        <Footerbottom/>
    </>
  )
}

export default HomeInfo