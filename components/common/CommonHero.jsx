"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const CommonHero = ({ title }) => {
    return (
        <section className="commonHero newbg hero hero w-full px-1 sm:px-4 bg-greenShade-300 relative z-50 overflow-hidden h-full">
            <div className="w-[101%] absolute h-[105px] sm:h-[105px] md:h-28 2xl:h-28 -top-[1px] -left-[1px] z-50 bgRotateY">
                <img
                    className="w-full h-full object-cover "
                    src="/wave5.svg"
                    alt=""
                />
            </div>
            <div className="bg w-[101%] absolute -bottom-[1px] left-0 rotate-180 z-50">
                <img className="w-full" src="/wave2.svg" alt="" />
            </div>
            <div className="sm:py-20 hero-max max-w-[1800px] min-h-[50svh] sm:min-h-[60svh] md:min-h-[65vh] w-full h-full mx-auto relative flex justify-center items-center">
                <div className="absolute top-16 -right-5 h-auto z-10 flex gap-1 md:gap-1">
                    <motion.div
                        initial={{
                            transform: "translateY(-100%)",
                            opacity: 0,
                        }}
                        animate={{
                            transform: "translateY(0)",
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.7,
                            duration: 0.4,
                            ease: "linear",
                        }}
                        className="lamp w-[35px] sm:w-[45px] md:w-[55px]"
                    >
                        <img className="w-full" src="/lamp.png" alt="" />
                    </motion.div>
                    <motion.div
                        initial={{
                            transform: "translateY(-100%)",
                            opacity: 0,
                        }}
                        animate={{
                            transform: "translateY(0)",
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 0.4,
                            ease: "linear",
                        }}
                        className="lamp w-[25px] sm:w-[33px] md:w-[43px]"
                    >
                        <img className="w-full" src="/lamp.png" alt="" />
                    </motion.div>
                    <motion.div
                        initial={{
                            transform: "translateY(-100%)",
                            opacity: 0,
                        }}
                        animate={{
                            transform: "translateY(0)",
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.4,
                            ease: "linear",
                        }}
                        className="lamp w-[46px] sm:w-[56px] md:w-[68px] "
                    >
                        <img className="w-full" src="/lamp.png" alt="" />
                    </motion.div>
                </div>
                <motion.h2
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
                    className="text-4xl md:text-5xl font-Hidayatullah text-white mt-24 sm:mt-[105px] md:mt-14 lg:mt-10"
                >
                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-Hidayatullah text-center pb-14 capitalize text-white">
                        {title}
                    </h2>
                </motion.h2>
            </div>
        </section>
    );
};

export default CommonHero;
