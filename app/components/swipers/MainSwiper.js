"use client";
import Card from "../cards/Card";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MainSwiperCustom.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import { sortPosts } from "@/app/lib/sortPosts";

const MainSwiper = ({ posts }) => {
  const [swiperInstance, setSwiperInstance] = useState("");

  const sortedPosts = sortPosts([
    ...posts.postEvents.nodes,
    ...posts.postNews.nodes,
  ]).slice(0, 6);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <SlArrowLeft
        className="infoBlock-swiper-btn"
        style={{ cursor: "pointer" }}
        size={25}
        onClick={() => swiperInstance.slidePrev()}
      />
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          type: "progressbar",
        }}
        spaceBetween={20}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          380: {
            slidesPerView: 1.2,
          },
          500: {
            slidesPerView: 1.5,
          },
          690: {
            slidesPerView: 2.3,
          },
          850: {
            slidesPerView: 1,
          },
          1000: {
            slidesPerView: 1.45,
          },
          1160: {
            slidesPerView: 2,
          },
        }}
      >
        {sortedPosts.map((el) => {
          let post = Object.values(el)[0];
          let id = Object.values(el)[1];
          return (
            <SwiperSlide key={id}>
              <Card post={post} type={Object.keys(el)[0]} id={id} />
              <div style={{ height: 20 }}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <SlArrowRight
        className="infoBlock-swiper-btn"
        style={{ cursor: "pointer" }}
        size={25}
        onClick={() => swiperInstance.slideNext()}
      />
      {/* <SwiperNavButtons swiper={swiperInstance} /> */}
    </div>
  );
};
export default MainSwiper;
