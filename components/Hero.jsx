/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = ({ setpopup, cpopU }) => {
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
            ref={cpopU}
            id="home"
            className="heroBg greenBg hero hero w-full px-1 sm:px-4 bg-greenShade-300 relative z-50 overflow-hidden min-h-[100svh] flex items-center justify-center"
        >
            {/* wave */}
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
            {/* wave end */}
            {/* main */}
            <div className="max-w-[1800px] w-full h-full mx-auto flex justify-center items-center flex-wrap-reverse lg:flex-nowrap gap-8 lg:gap-10">
                {/* lamp */}
                <div className="absolute top-16 -right-5 h-auto z-10 flex gap-1">
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
                {/* lamp end */}
                {/*  */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: "linear",
                    }}
                    className="w-full lg:w-3/5 xl:w-1/2"
                >
                    <h2 className="hero-text font-Love_Craft text-[26px] sm:text-[26px] md:text-3xl lg:text-[43px] 2xl:text-[50px]      leading-[38px] sm:leading-[38px] md:leading-[45px] lg:leading-[65px] 2xl:leading-[70px]      lg:text-left text-white text-center max-w-[500px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[650px] xl:max-w-[650px] 2xl:max-w-[850px] mx-auto lg:mx-0">
                        the best of arabic cuisine awaits you to fulfil
                        your cravings
                    </h2>
                    <span className="text-[13px] font-JosefinSans_bold uppercase text-center mt-3 lg:text-right text-white mb-2 md:mb-6 lg:mb-5 max-w-[500px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[650px] xl:max-w-[650px] 2xl:max-w-[700px] block mx-auto lg:mx-0">
                        {"'team lazeez'"}
                    </span>
                    <div className="flex gap-2 md:gap-3 justify-center lg:justify-start flex-wrap">
                        <motion.button
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5,
                                duration: 0.2,
                                ease: "linear",
                            }}
                            onClick={() => setpopup(true)}
                            className="btn text-white bg-orangeShade-300 rounded-full capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular px-5 py-2 md:px-8 lg:px-10 text-[15px] md:text-base lg:text-lg"
                        >
                            order online
                        </motion.button>
                        <motion.a
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.6,
                                duration: 0.2,
                                ease: "linear",
                            }}
                            href="https://lazeezarg.com/menu/"
                            aria-label="menu"
                            className="btn text-white bg-orangeShade-300 rounded-full capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular px-5 py-2 md:px-8 lg:px-10 text-[15px] md:text-base lg:text-lg"
                        >
                            Menu
                        </motion.a>
                        <motion.a
                            initial={{
                                scale: 0.5,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.7,
                                duration: 0.2,
                                ease: "linear",
                            }}
                            href="https://wa.me/+601111192301?text=Hello!"
                            aria-label="what's app"
                            target="blank"
                            className="btn text-white bg-orangeShade-300 rounded-full capitalize transition-all duration-100 border-transparent border hover:border-white hover:bg-transparent font-JosefinSans_Regular px-5 py-2 md:px-8 lg:px-10 text-[15px] md:text-base lg:text-lg"
                        >
                            book a table
                        </motion.a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "linear",
                    }}
                    className="w-full lg:w-2/5 xl:w-1/2"
                >
                    <div className="flex items-center justify-center relative">
                        <div className="w-[270px] sm:w-[280px] md:w-[320px] lg:w-[400px] xl:w-[430px] absolute top-1/2 left-[48%] lg:left-[45%] -translate-x-1/2 -translate-y-1/2 rotate-[16deg] z-20">
                            <img
                                src="/land/lamb_tagine.png"
                                alt="pattern"
                                className="w-full"
                            />
                        </div>

                        <div className="w-[270px] sm:w-[280px] md:w-[320px] lg:w-[400px] xl:w-[430px] animate-spin-slow z-10">
                            <img
                                src="/land/B.svg"
                                alt="pattern"
                                className="w-full"
                            />
                        </div>
                    </div>
                    {/* shape end */}
                </motion.div>
                {/*  */}
            </div>
            {/* main end */}
        </motion.section>
    );
};

export default Hero;
