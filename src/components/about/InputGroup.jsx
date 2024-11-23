import { useState } from "react"
import axios from "axios"
import { useTranslation } from "react-i18next";
import MentorSwiper from "./Swiper";
import img1 from "../../assets/images/banner.png"
import img2 from "../../assets/images/u2.png"
import img3 from "../../assets/images/u3.png"

const InputGroup = () => {
    
   const [formState, setFormState] = useState({
    name: "",
    phone: "+998 ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const { t } = useTranslation(); 
  const send = (event) => {
    event.preventDefault();

    const { name, phone } = formState;

    const token = "7224593125:AAG1qPC99h1sk1iqE-A23LMkhGSTmq_FTi4";
    const chatId = 5531572292;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `Name: ${name}, Phone: ${phone}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chatId,
        text: message,
      },
    })
      .then(() => {
        setFormState({
          name: "",
          phone: "+998 ",
        });
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  };


  return (
    <>
     <div className="inputGroup">
        <div className="container">
            <div className="inputGroup_card">
            <div className="inputGroup_card_left" data-aos="zoom-in">
                <h2 className="inputGroup_card_left_title">
 {t("it_future")}
                </h2>
                <div className="inputGroup_card_imgs">
                <div className="inputGroup_card_img">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    </div>
                </div>
            </div>
            <div className="inputGroup_card_right" data-aos="zoom-in" >
                <h2 className="inputGroup_card_right_title">{t("free")}</h2>
                <p className="inputGroup_card_right_txt">
      {t("free_txt")}
                </p>
                <form id="myinput" onSubmit={send} className="inputGroup_card_inputs">
                <input
                    className="footer_input"
                    type="text"
                    required
                    placeholder={`${t("name")}`}
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                <input
                    id="phone"
                    className="footer_input"
                    type="tel"
                    placeholder="+998"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="submit"
                    className="footer_btn"
                    disabled={!formState.name ||!formState.phone || formState.phone === "+998 "}
                  >
                    {t("kurs")}
                  </button>
                </form>
                
            </div>
            </div>
            <div className="inputGroup_footer">
                <MentorSwiper/>
            </div>
        </div>
        </div>   
    </>
  )

}
export default InputGroup



