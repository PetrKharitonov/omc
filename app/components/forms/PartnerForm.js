"use client";
import { useState } from "react";
import "./PartnerForm.css";
import { MdClose } from "react-icons/md";
import { sendPartnerForm } from "@/app/lib/api";

const initValues = {
  name: "",
  company: "",
  number: "",
  email: "",
};

const initState = { values: initValues };

const PartnerForm = ({ closeForm }) => {
  const [state, setState] = useState(initState);
  const [checked, setChecked] = useState(false);

  const { values } = state;

  const handleCheck = () => {
    setChecked((current) => !current);
  };

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  async function handleSubmit(event) {
    event.preventDefault();
    if (!checked) return;

    const data = { values, subject: "Заявка в партнёры" };

    await sendPartnerForm(data);
    closeForm();
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
          name="name"
          placeholder="Имя"
          value={values.name}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          id="partnerForm-comp"
          name="company"
          placeholder="Наименование организации"
          value={values.company}
          onChange={handleChange}
        ></input>
        <input
          type="tel"
          id="partnerForm-num"
          name="number"
          placeholder="Номер телефона"
          value={values.number}
          onChange={handleChange}
        ></input>
        <input
          type="email"
          id="partnerForm-email"
          name="email"
          placeholder="Эл. почта"
          value={values.email}
          onChange={handleChange}
        ></input>
        <div className="partnerForm-ckeck-container">
          <input
            type="checkbox"
            id="partnerForm-check"
            name="partnerForm-check"
            onClick={handleCheck}
          ></input>
          <label for="partnerForm-check">
            Я согласен на обработку персональных данных
          </label>
        </div>

        <div className="partnerForm-btn-container">
          {checked &&
          values.name &&
          values.email &&
          values.company &&
          values.number ? (
            <button type="submit" className="form-btn" id="form-btn_active">
              Отправить
            </button>
          ) : (
            <button type="button" className="form-btn">
              Отправить
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default PartnerForm;
