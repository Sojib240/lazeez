/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";
import { cardData } from "@/constant/data";

const Serve = () => {
    return (
        <section id="serve" className="serve px-5 pt-10 sm:pt-8 bg-opacity-0">
            <motion.div
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
                className="mx-auto max-w-[450px] sm:max-w-[800px] md:max-w-[800px] lg:max-w-[1600px]"
            >
                <SectionTitle> We Serve </SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24 sm:gap-x-5 sm:gap-y-24 md:gap-y-28 md:gap-x-5 lg:gap-5">
                    {cardData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={`${item.styles} card group w-full`}
                            >
                                <div className="image h-auto pt-12 pb-5 px-2 bg-greenShade-300 min-h-[220px] relative">
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
                                        <img
                                            className="w-full relative group-hover:scale-[1.2] duration-150 transition-all scale-110 z-30 object-cover drop-shadow-lg"
                                            src={item.image}
                                            alt="item's image "
                                        />
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
            </motion.div>
        </section>
    );
};

export default Serve;
