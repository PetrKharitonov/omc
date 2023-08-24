"use client";
import PartnerCard from "../cards/PartnerCard";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MainSwiperCustom.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";

const PartnersSwiper = ({ partners }) => {
  const [swiperInstance, setSwiperInstance] = useState("");

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <SlArrowLeft
        className="infoBlock-swiper-btn"
        style={{ cursor: "pointer" }}
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
          1: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {partners.map((partner) => {
          let title = partner.node.partner.title;
          let description = partner.node.partner.opisanie;
          let link = partner.node.partner.link;
          let logo = partner.node.partner.logo;
          let docs = [];
          if (partner.node.partner.doc1 != null)
            docs.push(partner.node.partner.doc1);
          if (partner.node.partner.doc2 != null)
            docs.push(partner.node.partner.doc2);
          if (partner.node.partner.doc3 != null)
            docs.push(partner.node.partner.doc3);

          return (
            <SwiperSlide key={title}>
              <PartnerCard
                logo={logo}
                title={title}
                description={description}
                link={link}
                docs={docs}
              />
              <div style={{ height: 20 }}></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <SlArrowRight
        className="infoBlock-swiper-btn"
        style={{ cursor: "pointer" }}
        onClick={() => swiperInstance.slideNext()}
      />
      {/* <SwiperNavButtons swiper={swiperInstance} /> */}
    </div>
  );
};
export default PartnersSwiper;
