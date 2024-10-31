/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";

const CardEffect = ({ clientData }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards ,Autoplay]}
        className="mySwiper max-w-[290px] h-[380px]"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {clientData.map((data) => (
          <SwiperSlide
            className="rounded-2xl border-[4px] border-white overflow-hidden"
            key={data.id}
          >
            <img
              src={data.image}
              alt="client image"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardEffect;
