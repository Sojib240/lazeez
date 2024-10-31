"use client";
import React from "react";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";
import { facilitiesData } from "@/constant/data";

const Facilities = () => {
    // const handleClick = (index) => {
    //     if (index === 0) {
    //         setpopup(true);
    //     }
    // };
    return (
        <section
            id="facilities"
            className="Facilities py-10 sm:py-28 px-5 w-full relative"
        >
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
                className="w-full"
            >
                <SectionTitle>Our Facilities</SectionTitle>
                <div className="max-w-[1300px] mx-auto flex justify-between items-start flex-wrap gap-y-5 lg:flex-nowrap lg:gap-0 lg:w-full">
                    {facilitiesData.map((item, index) => {
                        return (
                            <div
                                key={item.id}
                                className="flex flex-col items-center justify-center p-5 gap-1 w-1/2 lg:w-1/4"
                            >
                                <img
                                    // onClick={() => handleClick(index)}
                                    className="p-7 greenBg2 rounded-2xl bg-greenShade-300 text-5xl text-white mb-4 duration-150 transition-all cursor-pointer"
                                    src={item.icon}
                                    alt=""
                                />
                                <h2 className="text-[17px] font-JosefinSans_semibold text-center sm:text-[25px] capitalize">
                                    {item.title}
                                </h2>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default Facilities;
