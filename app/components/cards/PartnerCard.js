"use client";
import Image from "next/image";
import "./PartnerCard.css";
import { useState, useEffect } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";

const PartnerCard = ({ logo, title, description, link, docs }) => {
  const [isHover, setIsHover] = useState(false);
  const [docColor, setDocColor] = useState("#2580E5");

  const windowWidth = useWindowWidth();

  /* if (logo == undefined)
    logo = {
      sourceUrl: "",
      mediaDetails: {
        width: 0,
        height: 0,
      },
    }; */

  return (
    <div
      className="partnerCard"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover || windowWidth < 500 ? (
        <div className="partnerCard-container">
          <div className="partnerCard-content">
            {windowWidth < 500 &&
              logo != undefined &&
              {
                /* <Image
                alt={title}
                src={logo.sourceUrl}
                width={logo.mediaDetails.width / 2}
                height={logo.mediaDetails.height / 2}
              /> */
              }}
            <h4>{title}</h4>
            <p>{description}</p>
            {docs.length > 0 && (
              <div className="partnerCard-docs">
                {docs.map((doc) => {
                  return (
                    <a
                      href={doc.mediaItemUrl}
                      className="partnerCard-doc"
                      onMouseEnter={() => setDocColor("#FFFFFF")}
                      onMouseLeave={() => setDocColor("#2580E5")}
                      key={doc.mediaItemUrl}
                    >
                      <AiOutlineFile size={30} color={docColor} />
                      <p>{doc.title}</p>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {link != undefined && (
            <div className="partnerCard-link">
              <a href={link}>Перейти на сайт</a>
            </div>
          )}
        </div>
      ) : (
        <div className="partnerCard-logoholder">
          {/* {logo != undefined && (
            <Image
              alt={title}
              src={logo.sourceUrl}
              width={logo.mediaDetails.width}
              height={logo.mediaDetails.height}
            />
          )} */}
        </div>
      )}
    </div>
  );
};
export default PartnerCard;
