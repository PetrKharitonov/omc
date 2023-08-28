"use client";
import { useState } from "react";
import "./PartnerForm.css";
import { MdClose } from "react-icons/md";

const PartnerForm = ({ closeForm }) => {
  const [values, setFormValues] = useState({
    name: "",
    company: "",
    num: "",
    email: "",
  });

  const handleChange = (e) => {};

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      partnerFormName: event.target.partnerFormName.value,
      partnerFormComp: event.target.partnerFormComp.value,
      partnerFormNum: event.target.partnerFormNum.value,
      partnerFormEmail: event.target.partnerFormEmail.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("message sent");
    }
    if (!response.ok) {
      console.log("error");
    }
  }

  return (
    <div className="partnerForm-container">
      <MdClose
        size={25}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          cursor: "pointer",
        }}
        onClick={closeForm}
      />
      <h3>Стать партнёром</h3>
      <p>
        Оставьте свои контакты, чтобы вместе с нами содействовать развитию
        предпринимательства и улучшению инвестиционного климата
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="partnerForm-name"
          name="partnerFormName"
          placeholder="Имя"
          value={values.name}
        ></input>
        <input
          type="text"
          id="partnerForm-comp"
          name="partnerFormComp"
          placeholder="Наименование организации"
          value={values.company}
        ></input>
        <input
          type="tel"
          id="partnerForm-num"
          name="partnerFormNum"
          placeholder="Номер телефона"
          value={values.num}
        ></input>
        <input
          type="email"
          id="partnerForm-email"
          name="partnerFormEmail"
          placeholder="Эл. почта"
          value={values.email}
        ></input>
        <div className="partnerForm-ckeck-container">
          <input
            type="checkbox"
            id="partnerForm-check"
            name="partnerForm-check"
          ></input>
          <label for="partnerForm-check">
            Я согласен на обработку персональных данных
          </label>
        </div>

        <div className="partnerForm-btn-container">
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );
};
export default PartnerForm;
