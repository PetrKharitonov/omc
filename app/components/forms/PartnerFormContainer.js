"use client";
import { useState } from "react";
import MainBtn from "../btns/MainBtn";
import "./PartnerFormContainer.css";
import PartnerForm from "./PartnerForm";

const PartnerFormContainer = () => {
  const [back, setBack] = useState(false);

  const handleToggle = () => {
    setBack((current) => !current);
  };
  console.log(back);

  return (
    <div
      className="wrapper"
      style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}
    >
      {back && (
        <div className="darkening">
          <PartnerForm closeForm={handleToggle} />
        </div>
      )}

      <MainBtn onClick={handleToggle}>Стать партнером</MainBtn>
    </div>
  );
};
export default PartnerFormContainer;
