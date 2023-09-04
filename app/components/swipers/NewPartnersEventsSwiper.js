"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MainSwiperCustom.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import { sortPosts } from "@/app/lib/sortPosts";
import EventCard from "../cards/EventCard";
import "./partnersEventsSwiper.css";
import PartnerEventCard from "../cards/PartnerEventCard";

const NewPartnersEventsSwiper = ({ posts }) => {
  const [swiperInstance, setSwiperInstance] = useState("");

  const sortedPosts = sortPosts(posts);

  return (
    <div
      className={
        posts.length > 4
          ? "partnersEventsSwiper"
          : "partnersEventsSwiper partnersEventsSwiper-block wrapper"
      }
    >
      {posts.length > 3 && (
        <SlArrowLeft
          className="infoBlock-swiper-btn"
          style={{ cursor: "pointer" }}
          size={25}
          onClick={() => swiperInstance.slidePrev()}
        />
      )}

      <Swiper
        style={{ width: "100%", overflowClipMargin: "10px" }}
        modules={[Navigation, Pagination]}
        pagination={{
          type: "progressbar",
        }}
        spaceBetween={20}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          1: {
            slidesPerView: 1.1,
          },
          500: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {sortedPosts.map((el) => {
          let post = Object.values(el)[0];
          let id = Object.values(el)[1];
          return (
            <SwiperSlide key={id}>
              <PartnerEventCard post={post} id={id} />
              <div style={{ height: 20 }}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {posts.length > 4 && (
        <SlArrowRight
          className="infoBlock-swiper-btn"
          style={{ cursor: "pointer" }}
          size={25}
          onClick={() => swiperInstance.slideNext()}
        />
      )}
    </div>
  );
};
export default NewPartnersEventsSwiper;
