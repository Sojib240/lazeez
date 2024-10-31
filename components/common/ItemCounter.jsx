import React, { useState } from "react";
import { itemData } from "@/constant/data";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const ItemCounter = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    };
    return (
        <div className="grid grid-cols-4 w-full mt-10 gap-2">
            {itemData.map((item) => {
                return (
                    <div
                        key={item.id}
                        className="card image col-span-2 lg:col-span-1 bg-greenShade-300 py-8 px-3 rounded-2xl flex flex-col items-center"
                    >
                        <motion.div className="flex" whileInView={handleShow}>
                            {show ? (
                                <CountUp
                                    className="font-JosefinSans_bold text-[38px] md:text-[48px] lg:text-[58px] text-center text-white leading-[100%]"
                                    start={0}
                                    end={item.title}
                                    duration={item.duration}
                                />
                            ) : (
                                <p className="font-JosefinSans_bold text-[38px] md:text-[48px] lg:text-[58px] text-center text-white leading-[100%]">
                                    {item.title}
                                </p>
                            )}

                            {/* <p className="font-JosefinSans_bold text-[38px] md:text-[48px] lg:text-[58px] text-center text-white leading-[100%]">
                                {item.title}
                            </p> */}
                            {item.id === 4 && (
                                <span className="text-white text-[38px] md:text-[48px] lg:text-[58px] leading-[100%]">
                                    +
                                </span>
                            )}
                        </motion.div>
                        <p className="font-JosefinSans_Regular text-xs md:text-base lg:text-lg text-center text-white">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemCounter;
