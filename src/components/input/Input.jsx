import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
import PropTypes from "prop-types";

const Input = ({ activ, setActiv }) => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "+998 ",
    chose: "", 
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

    const { name, phone, chose } = formState;

    const token = "7224593125:AAG1qPC99h1sk1iqE-A23LMkhGSTmq_FTi4";
    const chatId = 5531572292;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `Name: ${name}, Phone: ${phone}, Chose: ${chose}`;

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
          chose: "",
        });

        setActiv(false);
      })
      .catch((error) => {
        console.log("Error sending message:", error);
      });
  };

  return (
    <form
      id="myinput"
      onSubmit={send}
      className={`first ${activ ? "activ" : ""}`}
    >
      <div className="first_box">
        <IoCloseOutline
          className="first_box_icon"
          onClick={() => setActiv(false)} 
        />
        <h2 className="first_title">{`Kursga yozilish uchun formani to'ldiring`}</h2>
        <p className="first_txt">
          {`Agar kurs haqida savollaringiz bo'lsa yoki tanlashni bilmasangiz,
          raqamingizni qoldiring va bizning operatorlarimiz sizga qo'ng'iroq
          qilishadi.`}
        </p>
        <div className="first_card">
          <input
            className="first_name"
            type="text"
            required
            placeholder="Name"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
          <select
            className="first_select"
            name="chose"
            aria-label="kursni_tanlang"
            required
            value={formState.chose}
            onChange={handleChange}
          >
            <option value="" disabled>
              Kursni tanlang
            </option>
            <option value="Mobilografiya">Mobilografiya</option>
            <option value="IOS">IOS</option>
            <option value="Frontend Internship">Frontend Internship</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Marketing SMM">Marketing SMM</option>
            <option value="Flutter">Flutter</option>
            <option value="Java Backend">Java Backend</option>
            <option value="Frontend React">Frontend React</option>
            <option value="Grafik Dizayn">Grafik Dizayn</option>
            <option value="Frontend JavaScript">Frontend JavaScript</option>
          </select>
          <input
            id="phone"
            className="first_tell"
            type="tel"
            placeholder="+998"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="first_btn"
            disabled={
              !formState.name ||
              !formState.phone ||
              formState.phone === "+998 " ||
              !formState.chose
            }
          >
            Kursga yozilish
          </button>
        </div>
      </div>
    </form>
  );
};

Input.propTypes = {
  activ: PropTypes.bool.isRequired,
  setActiv: PropTypes.func.isRequired,
};

export default Input;

