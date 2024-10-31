/* eslint-disable @next/next/no-img-element */
import React from "react";
import { reviewsData } from "@/constant/data";
import { clientData } from "@/constant/data";
// Import Swiper React components
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import CardEffect from "./common/CardEffect";
import { motion } from "framer-motion";

const Reviews = () => {
    return (
        <section className="w-full greenBg pt-[6%] pb-[10%] sm:pb-[8%] md:pt-[10%] md:pb-[8%] lg:pt-[4%] lg:pb-[4%] px-5 testimonial bg-greenShade-300 relative overflow-hidden">
            <div className="bg w-[101%] absolute -bottom-[2px] -left-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="bg w-[101%] absolute -top-[2px]  -right-[2px] z-40">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <motion.div
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
                className="max-w-[1300px] mx-auto flex items-center justify-center flex-wrap-reverse md:flex-nowrap gap-5 md:gap-20 py-10"
            >
                <div className="w-full md:w-1/2">
                    <CardEffect clientData={clientData} />
                </div>
                <div className="slider w-full md:w-1/2">
                    <div className="max-w-[500px] md:max-w-[800px] w-full mx-auto bg-orangeShade-300 rounded-2xl flex justify-between items-center py-3 px-[5%] mb-[1%] md:mb-[4%] lg:mb-0">
                        <div className="flex flex-col gap-1 sm:gap-0">
                            <div className="flex items-center">
                                <p className="text-white pr-3 text-xs lg:text-2xl font-JosefinSans_Regular leading-[0px]">
                                    4.7
                                </p>
                                <div className="flex items-start">
                                    <span className="text-white text-xs lg:text-lg">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-lg">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-lg">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-lg">
                                        <IoStar />
                                    </span>
                                    <span className="text-white text-xs lg:text-lg">
                                        <IoStarHalf />
                                    </span>
                                </div>
                                <span className="text-white pl-3 text-xs lg:text-xs font-JosefinSans_Regular leading-none">
                                    {"(2863)"}
                                </span>
                            </div>
                        </div>
                        <a
                            className=" text-white text-xs lg:text-base rounded-2xl font-JosefinSans_Regular bg-greenShade-300 px-5 py-2"
                            href="https://g.page/r/CWhNhLH9tf9hEAE/review"
                            target="_blank"
                            aria-label="review us"
                        >
                            Write a Review
                        </a>
                    </div>
                    <Swiper
                        loop
                        slidesPerView={1}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={false}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper !pb-[12%] !sm:pb-[8%] !pt-[7%] max-w-[500px] md:max-w-[100%]"
                    >
                        {reviewsData.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.id}
                                    className=" cursor-move flex justify-center items-center"
                                >
                                    <div className="flex flex-col justify-center items-center text-center gap-3 w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12">
                                                <img
                                                    className="w-full h-full rounded-full "
                                                    src={item.logo}
                                                    alt=""
                                                />
                                            </div>

                                            <div className="">
                                                <h2 className="text-lg lg:text-[23px] font-JosefinSans_semibold text-white">
                                                    {item.title}
                                                </h2>
                                                <div className="flex">
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>
                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>

                                                    <span className="text-base lg:text-lg text-orangeShade-300">
                                                        <IoStar />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[15px] lg:text-[18px] font-JosefinSans_Regular text-white leading-5">
                                            {item.desc}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </motion.div>
        </section>
    );
};

export default Reviews;
