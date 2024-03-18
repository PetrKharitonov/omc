"use client";
import StuffCard from "../cards/StuffCard";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MainSwiperCustom.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@/app/hooks/useWindowWidth";

const StuffSwiper = ({ stuff }) => {
  console.log(stuff);
  const [swiperInstance, setSwiperInstance] = useState("");
  const windowWidth = useWindowWidth();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "30px",
      }}
      className={
        stuff.length <= 4 && windowWidth > 1200 ? "wrapper" : "wrapper-wide"
      }
    >
      {(stuff.length > 4 || windowWidth < 1200) && (
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
      >
        {stuff.map((emp) => {
          let image = emp.node.employee.image;
          let name = emp.node.employee.name;
          let position = emp.node.employee.position;
          let id = emp.node.id;
          return (
            <SwiperSlide key={name}>
              <StuffCard
                image={image}
                name={name}
                position={position}
                id={id}
              />
              <div style={{ height: 20 }}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {(stuff.length > 4 || windowWidth < 1200) && (
        <SlArrowRight
          className="infoBlock-swiper-btn"
          style={{ cursor: "pointer" }}
          onClick={() => swiperInstance.slideNext()}
        />
      )}
    </div>
  );
};
export default StuffSwiper;
