/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import { FaFacebookF } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = ({ setpopup }) => {
    return (
        <div className="w-full greenBg bg-greenShade-300 px-6 pt-20 sm:pt-32 pb-8 relative overflow-hidden">
            <div className="bg w-[101%] absolute -top-[1px] -right-[2px] rotate-180 z-40">
                <img className="w-full" src="/wave.svg" alt="" />
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
                viewport={{ once: true }}
                className="max-w-[1300px] mx-auto"
            >
                <div className="w-full flex justify-between gap-10 flex-wrap lg:flex-nowrap lg:gap-0">
                    <div className="flex gap-10 flex-wrap lg:flex-nowrap lg:gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold font-bold text-white uppercase">
                                USEFUL LINKS
                            </h2>
                            <div className="flex flex-col">
                                <p
                                    onClick={() => setpopup(true)}
                                    className="text-white font-JosefinSans_Regular text-[17px] cursor-pointer capitalize hover:text-orangeShade-300"
                                >
                                    order online
                                </p>
                                <a
                                    href="#serve"
                                    aria-label="we serve"
                                    className="text-white font-JosefinSans_Regular text-[17px] cursor-pointer capitalize hover:text-orangeShade-300"
                                >
                                    we serve
                                </a>
                                <a
                                    href="#about"
                                    aria-label="about us"
                                    className="text-white font-JosefinSans_Regular text-[17px] cursor-pointer capitalize hover:text-orangeShade-300"
                                >
                                    about us
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold font-bold text-white uppercase">
                                HOME
                            </h2>
                            <div className="flex flex-col">
                                <a
                                    href="https://wa.me/+8801627025159?text=Hello!"
                                    target="blank"
                                    aria-label="what's app"
                                    className="text-white font-JosefinSans_Regular text-[17px] cursor-pointer capitalize hover:text-orangeShade-300"
                                >
                                    book a table
                                </a>
                                <a
                                    href="#facilities"
                                    aria-label="facilities"
                                    className="text-white font-JosefinSans_Regular text-[17px] cursor-pointer capitalize hover:text-orangeShade-300"
                                >
                                    facilities
                                </a>
                                <a
                                    href="#why_us"
                                    aria-label="why us"
                                    className="text-white font-JosefinSans_Regular text-[17px] cursor-pointer capitalize hover:text-orangeShade-300"
                                >
                                    why us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-10 flex-wrap lg:flex-nowrap lg:gap-10">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold text-white uppercase">
                                CONTACT
                            </h2>
                            <div className="">
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize w-full max-w-[350px] 2xl:max-w-[350px]">
                                    148, Jln Bukit Bintang, Wilayah Persekutuan,
                                    55100 Kuala Lumpur, Wilayah Persekutuan
                                    Kuala Lumpur
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] capitalize py-1">
                                    +011-1119 2301
                                </p>
                                <p className="text-white font-JosefinSans_Regular text-[17px] lowercase">
                                    lazeez.restoran@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-JosefinSans_bold font-bold text-white uppercase">
                                CONNECT
                            </h2>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/lazeezarg"
                                    target="blank"
                                    aria-label="facebook"
                                    className="text-white text-xl cursor-pointer hover:text-orangeShade-300"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@lazeezarg"
                                    className="text-white text-xl cursor-pointer hover:text-orangeShade-300"
                                    target="blank"
                                    aria-label="tiktok"
                                >
                                    <FaTiktok />
                                </a>
                                <a
                                    href="https://www.instagram.com/lazeezarg/?hl=en"
                                    className="text-white text-xl cursor-pointer hover:text-orangeShade-300"
                                    target="blank"
                                    aria-label="instagram"
                                >
                                    <FiInstagram />
                                </a>
                                <a
                                    href="https://www.snapchat.com/add/lazeezarg"
                                    aria-label="snapchat"
                                    className="text-white text-xl cursor-pointer hover:text-orangeShade-300"
                                >
                                    <FaSnapchatGhost />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <h2 className="font-JosefinSans_Regular text-zinc-200 text-base text-left pt-10 lg:text-lg lg:pt-20 lg:text-left">
                    @ Copyrights 2024. All Rights Reserved.
                </h2>
            </motion.div>
        </div>
    );
};

export default Footer;
