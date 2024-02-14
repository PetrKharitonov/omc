"use client";

import "./ContactFooter.css";
import React, { useState, useEffect } from "react";
import SecBtn from "./btns/SecBtn";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { sendPartnerForm } from "../lib/api";

const initValues = {
  name: "",
  company: "",
  number: "",
  email: "",
};

const initState = { values: initValues };

const ContactFooter = () => {
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

    const data = { values, subject: "Заявка на обратную связь" };

    await sendPartnerForm(data);
    setState(initState);
  }

  const windowWidth = useWindowWidth();

  return (
    <div className="shadow-container wrapper-wide contactFooter">
      <div className="wrapper">
        <h2 style={{ margin: "30px 0" }}>Связаться с нами</h2>
      </div>
      <div className="wrapper contactFooter-container">
        <div className="contactFooter-content">
          <p>
            Нашей целью является формирование комфортной инфраструктуры для
            предприятий, попавших в трудную экономическую ситуацию и не только
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="contactForm-name"
              name="name"
              placeholder="Имя"
              value={values.name}
              onChange={handleChange}
            ></input>
            <input
              type="text"
              id="contactForm-comp"
              name="company"
              placeholder="Название компании"
              value={values.company}
              onChange={handleChange}
            ></input>
            <input
              type="tel"
              id="contactForm-num"
              name="number"
              placeholder="Номер телефона"
              value={values.number}
              onChange={handleChange}
            ></input>
            <input
              type="email"
              id="contactForm-email"
              name="email"
              placeholder="Эл. почта"
              value={values.email}
              onChange={handleChange}
            ></input>
            <div className="contactForm-ckeck-container">
              <input
                type="checkbox"
                id="contactForm-check"
                name="contactForm-check"
                onClick={handleCheck}
                style={{ cursor: "pointer" }}
              ></input>
              <label htmlFor="contactForm-check">
                Я согласен на{" "}
                <a
                  href="https://wp.anoomc.ru/wp-content/uploads/2023/10/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D1%83-%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D1%85-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.docx"
                  target="_blank"
                  style={{ color: "#2580e5" }}
                >
                  обработку персональных данных{" "}
                </a>
              </label>
            </div>

            <div className="contactForm-btn-container">
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
          {windowWidth < 940 && <SecBtn>Скачать презентацию</SecBtn>}
        </div>
        <div className="contactFooter-map-container">
          <p>Офис на карте</p>
          <YMaps>
            <div className="contactFooter-map">
              <Map
                defaultState={{ center: [55.761558, 37.647298], zoom: 14 }}
                width={windowWidth > 640 ? 580 : "100%"}
                height={windowWidth > 640 ? 330 : 250}
              >
                <Placemark geometry={[55.761558, 37.647298]} />
              </Map>
            </div>
          </YMaps>
        </div>
      </div>
      <div className="contactFooter-contacts">
        <div className="contactFooter-contacts-container wrapper">
          <div className="contactFooter-contacts-data">
            <div className="contact-data">
              <h4>Юридический адрес:</h4>
              <div className="contact-adress contact-el">
                <MdLocationOn style={{ flexShrink: "0" }} />
                <p>
                  г. Москва, ул. Макаренко, д. 5, стр. 1А, эт. 2, пом. I, ком.6
                </p>
              </div>
            </div>
            <div className="contact-data">
              <h4>Контактная информация:</h4>
              <div className="contact-info">
                <div className="contact-info-el contact-el">
                  <MdEmail style={{ flexShrink: "0" }} />
                  <p>anoomc@anoomc.ru</p>
                </div>
                <div className="contact-info-el contact-el">
                  <FaPhoneAlt style={{ flexShrink: "0" }} />
                  <div className="contact-info-el-num">
                    <p>{"+7 (495) 532-03-43"}</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  <div className="contact-data">
              <h4>Социальные сети:</h4>
            </div> */}
          </div>
          {windowWidth > 940 && (
            <SecBtn fileUrl={""}>Скачать презентацию</SecBtn>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactFooter;
