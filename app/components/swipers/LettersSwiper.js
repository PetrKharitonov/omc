"use client";
import LetterCard from "../cards/LetterCard";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MainSwiperCustom.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";

const LettersSwiper = ({ letters }) => {
  const [swiperInstance, setSwiperInstance] = useState("");

  const windowWidth = useWindowWidth();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "30px",
        padding: "0 20px",
      }}
      className={
        letters.length <= 4 && windowWidth > 1200 ? "wrapper" : "wrapper-wide"
      }
    >
      {(letters.length > 4 || windowWidth < 1200) && (
        <SlArrowLeft
          className="infoBlock-swiper-btn"
          style={{ cursor: "pointer" }}
          onClick={() => swiperInstance.slidePrev()}
        />
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          type: "progressbar",
        }}
        spaceBetween={20}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          380: {
            slidesPerView: 1.2,
          },
          460: {
            slidesPerView: 1.5,
          },
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        style={{ width: "100%" }}
      >
        {letters.map((letter) => {
          let image = letter.thankyouletter.file.sourceUrl;
          let title = letter.title;
          return (
            <SwiperSlide key={title}>
              <LetterCard image={image} title={title} />
              <div style={{ height: 20 }}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {(letters.length > 4 || windowWidth < 1200) && (
        <SlArrowRight
          className="infoBlock-swiper-btn"
          style={{ cursor: "pointer" }}
          onClick={() => swiperInstance.slideNext()}
        />
      )}
    </div>
  );
};
export default LettersSwiper;
