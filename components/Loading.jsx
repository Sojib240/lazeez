/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
    return (
        <>
            <motion.div
                initial={{ top: "0", visibility: "visiable" }}
                animate={{ top: "-100%", visibility: "hidden" }}
                transition={{ delay: 4, duration: 0.4, ease: "linear" }}
                className="load min-h-[100svh] md:min-h-[100vh] w-full h-full fixed top-0 left-0 bg-white z-[9999] flex items-center justify-center"
            >
                <div className="w-1/2 sm:w-1/2 md:w-2/5 lg:w-[30%]">
                    <img src="/logo.png" alt="logo" className="w-full h-full" />
                </div>
            </motion.div>
            <motion.div
                initial={{ visibility: "visiable", opacity: 1 }}
                animate={{ visibility: "hidden", opacity: 0 }}
                transition={{ delay: 4.2, duration: 0.4, ease: "linear" }}
                className="w-full h-screen fixed top-0 left-0 bg-white z-[999] flex items-center justify-center"
            ></motion.div>
        </>
    );
};

export default Loading;
