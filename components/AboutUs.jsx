"use client";
import React from "react";
import CommonHero from "./common/CommonHero";
import { serviceSwiperData } from "@/constant/data";
import { aboutImageData } from "@/constant/data";
import { aboutData2 } from "@/constant/data";
import SectionTitle from "./common/SectionTitle";
import ItemCounter from "./common/ItemCounter";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <div className="">
            <CommonHero title={"About Us"} />
            <div className="">
                <motion.section
                    initial={{
                        opacity: 0,
                        transform: "translateY(15%)",
                    }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0%)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[1300px] mx-auto pt-20 flex items-center gap-10 flex-wrap lg:flex-nowrap px-5 mb-20"
                >
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
                        {aboutImageData.map((item) => {
                            return (
                                <div key={item.id}
                                    className={`h-[190px] sm:h-[210px] md:h-[230px] lg:h-[250px] rounded-2xl overflow-hidden group col-span-1 ${
                                        item.id === 3 &&
                                        "col-span-1 sm:col-span-2"
                                    }`}
                                >
                                    <img
                                        className="w-full h-full object-cover duration-200 group-hover:scale-125"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-full">
                        <h2 className="text-[22px] md:text-2xl lg:text-3xl font-JosefinSans_bold text-left">
                            We Believe That Food Has The Power To Change The
                            World
                        </h2>
                        <p className="text-lg font-JosefinSans_Regular pt-4 text-left">
                            We are a Syrian-inspired restaurant that is widely
                            known around the world. We take pride in providing a
                            varied selection. Our outstanding grilled pieces
                            come with delectable varieties of chicken, lamb,
                            fish, and shawarma at an affordable price. What is
                            our plan? We are the group’s entrepreneurs because
                            we continually emphasize great, high-quality meals
                            in a pleasant and welcoming setting. Our serving
                            portions come at a reasonable price. Our casual
                            environment is as adaptable as if you were at home.
                        </p>
                    </div>
                </motion.section>
                <section className="fixed-image py-[75px] sm:py-[100px] md:py-[125px] lg:py-[150px] xl:py-[175px] 2xl:py-[200px] w-full relative overflow-hidden">
                    <div className="bg w-[101%] absolute -bottom-[2px] -left-[2px] rotate-180 z-40">
                        <img className="w-full" src="/wave2.svg" alt="" />
                    </div>
                    <div className="bg w-[101%] absolute -top-[2px] -right-[2px] z-40">
                        <img className="w-full" src="/wave2.svg" alt="" />
                    </div>
                </section>
                <motion.section
                    initial={{
                        opacity: 0,
                        transform: "translateY(15%)",
                    }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0%)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[1300px] mx-auto mt-20 px-5"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 rounded-2xl overflow-hidden">
                        {aboutData2.map((item) => {
                            return (
                                <>
                                    {item.stats === true ? (
                                        <div key={item.id}
                                            className={` ${item.styles} w-full min-h-[280px] sm:min-h-[280px] md:min-h-[280px] lg:min-h-[350px] col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 overflow-hidden group
                                            `}
                                        >
                                            <img
                                                className={`w-full h-full scale-125 object-cover duration-150 group-hover:scale-150 ${
                                                    item.id === 3 &&
                                                    "scale-150 group-hover:scale-[1.8]"
                                                } `}
                                                src={item.image}
                                                alt=""
                                            />
                                        </div>
                                    ) : (
                                        <div key={item.id}
                                            className={`${item.styles} w-full min-h-auto sm:min-h-auto md:min-h-[280px] lg:min-h-[350px] col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 flex items-center justify-center p-5 bg-greenShade-300 text-white greenBg overflow-hidden relative`}
                                        >
                                            <h2 className="text-lg font-JosefinSans_Regular">
                                                {item.desc}
                                            </h2>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </motion.section>
                <motion.section
                    initial={{
                        opacity: 0,
                        transform: "translateY(15%)",
                    }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0%)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto pt-2 pb-14 px-5"
                >
                    <ItemCounter />
                </motion.section>
                <motion.section
                    initial={{
                        opacity: 0,
                        transform: "translateY(15%)",
                    }}
                    whileInView={{
                        opacity: 1,
                        transform: "translateY(0%)",
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-[1300px] mx-auto mt-10 mb-20 px-5"
                >
                    <SectionTitle>
                        The values that drive everything we do
                    </SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-24 sm:gap-x-5 sm:gap-y-24 md:gap-y-24 md:gap-x-5 lg:gap-x-5 lg:gap-y-20 pt-8">
                        {serviceSwiperData.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={`card group w-full`}
                                >
                                    <div className="image h-auto pt-12 pb-5 px-5 bg-greenShade-300 min-h-[220px] relative">
                                        <div className="bg1 w-[102%] absolute -bottom-[2px] -left-[2px] z-20">
                                            <img
                                                className="w-full"
                                                src="/wave3.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="bg1 max-h- w-[102%] absolute -top-[2px] -left-[2px] z-10 rotate-180">
                                            <img
                                                className="w-full"
                                                src="/wave3.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="w-[150px] h-[150px] rounded-full flex items-center justify-center bg- absolute left-1/2 -top-[70px] -translate-x-1/2 z-40">
                                            <div className="bg-orangeShade-300 p-5 rounded-full">
                                                <span className="text-5xl rounded-full text-white">
                                                    {item.logo}
                                                </span>
                                            </div>
                                        </div>
                                        <h2 className="text-center text-[25px] md:text-[25px] lg:text-[23px] xl:text-[25px] mt-6 font-JosefinSans_semibold capitalize text-white">
                                            {item.title}
                                        </h2>
                                        <p className="text-sm md:text-sm 2xl:base text-center capitalize leading-6  font-JosefinSans_Regular text-white py-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default AboutUs;
