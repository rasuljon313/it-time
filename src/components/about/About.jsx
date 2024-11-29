import { useState } from "react";
import img from "../../assets/images/rightImg.png";
import Explain from "./Explain";
import Students from "./Students";
import Informations from "./Informations";
import InputGroup from "./InputGroup";
import Fakt from "./Fakt";
import Questions from "./Questions";
import FooterInfo from "./FooterInfo";
import Footerbottom from "./Footerbottom";
import { useTranslation } from "react-i18next";
import Input from "../input/Input";

const About = () => {
  const [input, setInput] = useState(false); 
  const { t } = useTranslation(); 

  const toggleInput = () => {
    setInput((prev) => !prev); 
  };


  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_box">
            <div className="header_box_left">
              <h1 className="header_box_left_title">
                {t('beliv_experiance')}
                <span>{t('beliv')}</span> {t('feature')}
              </h1>
              <p className="header_box_left_txt">
                {t('get_your_profil')}
              </p>
              <button className="header_btn" onClick={toggleInput}>
                {t("ariza_qoldirish")}
              </button>
            </div>
            <div className="header_box_right">
              <img src={img} alt="right image" />
            </div>
          </div>
        </div>
      </div>
      <Explain />
      <Students />
      <Informations />
      <InputGroup />
      <Fakt />
      <Questions />
      <FooterInfo />
      <Footerbottom />
      <Input activ={input} setActiv={setInput} />
    </>
  );
};

export default About;
