"use client";
import React from "react";
import { videoGalleryData } from "@/constant/data";
import ReactPlayer from "react-player";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";

const VideoGallery = () => {
    return (
        <motion.section
            initial={{
                opacity: 0,
                transform: "translateY(15%)",
            }}
            whileInView={{
                opacity: 1,
                transform: "translateY(0%)",
            }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.5 }}
            className="w-full px-6 py-5 sm:py-20"
        >
            <SectionTitle>Our Videos</SectionTitle>
            <div className="max-w-[1300px] mx-auto">
                <div className="slider mt-6 pb-5">
                    <Swiper
                        // loop
                        slidesPerView={2}
                        spaceBetween={10}
                        breakpoints={{
                            280: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {videoGalleryData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className=" cursor-move"
                                >
                                    <div className="flex flex-col rounded-2xl overflow-hidden justify-center items-center text-center h-[380px]">
                                        <ReactPlayer
                                            className="w-full h-full"
                                            controls
                                            url={item.video}
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </motion.section>
    );
};

export default VideoGallery;
