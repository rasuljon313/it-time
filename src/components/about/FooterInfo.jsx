import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const FooterInfo = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    chose: "",
    phone: "+998 ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const send = (event) => {
    event.preventDefault(); 

    const { name, chose, phone } = formState;

    const token = "7224593125:AAG1qPC99h1sk1iqE-A23LMkhGSTmq_FTi4";
    const chatId = 5531572292;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `Name: ${name}, Course: ${chose}, Phone: ${phone}`;

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
          chose: "",
          phone: "+998 ",
        });
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  };
  

  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer_box">
            <div className="footer_cards">
              <div className="footer_card" data-aos="flip-left" data-aos-duration="1000">
                <h2 className="footer_card_title">{t("yonalish")}</h2>
                <p className="footer_card_txt">
{t("yonalish_txt")}
                </p>
              </div>
              <div className="footer_box">
                <form id="myform" onSubmit={send} className="footer_box_form" data-aos="flip-left">
                  <input
                    className="footer_input"
                    type="text"
                    required
                    placeholder={t("name")}
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                  />
                  <select
                    className="footer_select"
                    name="chose"
                    aria-label={t("kursni_tanlang")}
                    required
                    value={formState.chose}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      {t("kursni_tanlang")}
                    </option>
                    <option className="footer_option" value="Mobilografiya">
                      Mobilografiya
                    </option>
                    <option className="footer_option" value="IOS">
                      IOS
                    </option>
                    <option className="footer_option" value="Frontend Internship">
                      Frontend Internship
                    </option>
                    <option className="footer_option" value="Backend">
                      Backend
                    </option>
                    <option className="footer_option" value="Frontend">
                      Frontend
                    </option>
                    <option className="footer_option" value="Marketing SMM">
                      Marketing SMM
                    </option>
                    <option className="footer_option" value="Flutter">
                      Flutter
                    </option>
                    <option className="footer_option" value="Java Backend">
                      Java Backend
                    </option>
                    <option className="footer_option" value="Frontend React">
                      Frontend React
                    </option>
                    <option className="footer_option" value="Grafik Dizayn">
                      Grafik Dizayn
                    </option>
                    <option className="footeroption" value="Frontend JavaScript">
                      Frontend JavaScript
                    </option>
                  </select>
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
                    disabled={!formState.name || !formState.chose || !formState.phone || formState.phone === "+998 "}
                  >
                    {t("kursga_yozilish")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;

















