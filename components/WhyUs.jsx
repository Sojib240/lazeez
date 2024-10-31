import React from "react";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";
import { whyUsData } from "@/constant/data";

const WhyUs = () => {
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
            id="why_us"
            className="w-full pt-10 pb-10 px-5"
        >
            <SectionTitle> why us?</SectionTitle>
            <div className="max-w-[1300px] mx-auto flex justify-between items-start flex-wrap gap-y-5 lg:flex-nowrap lg:gap-0 lg:w-full">
                {whyUsData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={`flex flex-col items-center justify-center p-5 gap-1 w-1/2 lg:w-1/4 ${
                                item.id == 0 && "border-l-[1px]"
                            }`}
                        >
                            <img src={item.image} alt="" />
                            <h2 className="text-[17px] font-JosefinSans_semibold text-center sm:text-[25px]">
                                {item.title}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default WhyUs;
