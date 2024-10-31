"use client";
import React, { useState } from "react";

import SectionTitle from "./common/SectionTitle";
// import CountUp from "react-countup";
import { motion } from "framer-motion";

import ItemCounter from "./common/ItemCounter";

const NumberOfItems = () => {
    return (
        <section className="w-full pt-24 pb-10 px-5">
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
                className="max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] mx-auto"
            >
                <SectionTitle>
                    Moroccan Dishes is Always on the Table
                </SectionTitle>
                <div className="w-full max-w-[600px] -mt-7 mx-auto">
                    <p className="font-JosefinSans_Regular text-lg leading-5 text-center">
                        We lead the group by consistently emphasizing delicious,
                        high-quality food lorand that provides a warm and
                        welcoming environment.
                    </p>
                </div>
                <ItemCounter />
            </motion.div>
        </section>
    );
};

export default NumberOfItems;
