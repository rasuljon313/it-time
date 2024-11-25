import { useTranslation } from "react-i18next";
import news1 from "../../assets/images/news1-BosU6TbV.jpg"
import news2 from "../../assets/images/news2-D6Z6Tx3P.jpg"
import news3 from "../../assets/images/news3-DUqkWl6j.jpg"
import Footerbottom from "../about/Footerbottom";
const New = () => {
  const { t } = useTranslation(); 
  return (
    <>
    <div className="news">
        <div className="container">
          <h2>It Time Academy yangiliklari</h2>
          <div className="news_wrapper">
            <div className="news_card">
              <img src={news1} alt="" />
              <h3>{t("taqdirlash")}</h3>
              <p>t{t("xulosa")}</p>
            </div>
            <div className="news_card">
            <img src={news2} alt="" />
              <h3>{t("taqdirlash")}</h3>
              <p>t{t("xulosa")}</p>
            </div>
            <div className="news_card">
              <img src={news3} alt="" />
              <h3>{t("game")}</h3>
              <p>t{t("footbal")}</p></div>
          </div>
        </div>
    </div>
    <Footerbottom/>
    </>
  )
}

export default New