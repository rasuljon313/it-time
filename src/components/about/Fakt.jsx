import { useTranslation } from "react-i18next";

const Fakt = () => {
  const { t } = useTranslation(); 
  return (
    <>
     <div className="fakt">
        <div className="container">
            <h2 className="fakt_title" data-aos="flip-left" data-aos-duration="1500"> {t("num")}</h2>
            <div className="fakt_wrapper">
                <div className="fakt_card" data-aos="flip-up" data-aos-duration="1300">
                <p className="fakt_number">100</p>
                <p className="fakt_text">{t("num_txt1")}</p>
                </div>
                <div className="fakt_card" data-aos="flip-up" data-aos-duration="1300">
                <p className="fakt_number">10</p>
                <p className="fakt_text">{t("num_txt2")}</p>
                </div>
                <div className="fakt_card last" data-aos="flip-up" data-aos-duration="1300">
                <p className="fakt_number">6</p>
                <p className="fakt_text">{t("num_txt3")}</p>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Fakt