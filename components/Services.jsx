"use client";
import React from "react";
import { serviceData } from "@/constant/data";
import { motion } from "framer-motion";

const Services = () => {
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[1300px] mx-auto px-5 pb-14 sm:pb-0"
        >
            <p className="text-center text-lg font-JosefinSans_Regular max-w-[800px] mx-auto pt-16 sm:pt-16 md:pt-10 lg:pt-8 pb-16">
                We offer the best service to ensure that each of our customers
                is satisfied and can enjoy the food with pleasure. You will not
                regret it, when you come and enjoy the food from us. You can
                also directly contact us to order food or if you have any
                questions.
            </p>
            <div className="grid grid-cols-2 gap-y-14 sm:gap-y-0 gap-x-10">
                {serviceData.map((item) => {
                    return (
                        <div className="relative col-span-2 md:col-span-1 rounded-tl-lg rounded-tr-lg overflow-hidden ">
                            <div className="img h-[280px] sm:h-[350px] w-full mx-auto rounded-none sm:rounded-md overflow-hidden group">
                                <img
                                    className="w-full h-full object-cover duration-150 transition-all group-hover:scale-105"
                                    src={item.image}
                                    alt=""
                                />
                            </div>
                            <div className="py-10 px-5 bg-greenShade-300 w-full max-w-full sm:max-w-[90%] mx-auto -translate-y-0 sm:-translate-y-[40%] rounded-none sm:rounded-md overflow-hidden greenBg2 relative">
                                <div className="bg1 w-[102%] absolute -bottom-[2px] -left-[2px] z-20">
                                    <img
                                        className="w-full"
                                        src="/wave4.svg"
                                        alt=""
                                    />
                                </div>
                                <h2 className="text-white font-JosefinSans_bold capitalize  text-[22px] md:text-2xl lg:text-3xl mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-white font-JosefinSans_Regular capitalize  text-xs md:text-sm lg:text-base">
                                    {item.desc}
                                </p>
                                <a
                                    href=""
                                    className="text-white underline font-JosefinSans_Regular pt-2 inline-block text-lg"
                                >
                                    Learn more
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Services;
