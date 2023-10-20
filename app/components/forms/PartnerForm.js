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
            style={{ cursor: "pointer" }}
          ></input>
          <label for="partnerForm-check">
            Я согласен на
            <a
              href="https://wp.anoomc.ru/wp-content/uploads/2023/10/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.docx"
              target="_blank"
              style={{ color: "#2580e5" }}
            >
              обработку персональных данных{" "}
            </a>
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
