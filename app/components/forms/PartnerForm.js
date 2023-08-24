"use client";
import "./PartnerForm.css";

const PartnerForm = () => {
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
        ></input>
        <input
          type="text"
          id="partnerForm-comp"
          name="partnerFormComp"
          placeholder="Наименование организации"
        ></input>
        <input
          type="tel"
          id="partnerForm-num"
          name="partnerFormNum"
          placeholder="Номер телефона"
        ></input>
        <input
          type="email"
          id="partnerForm-email"
          name="partnerFormEmail"
          placeholder="Эл. почта"
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
