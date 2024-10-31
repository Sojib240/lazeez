"use client";
import React from "react";
import { contactData } from "@/constant/data";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";

const ContactUs = ({ children }) => {
    return (
        <section id="contact" className="w-full pt-20 pb-10 sm:pb-10 lg:pb-20 px-5">
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
                className="max-w-[1300px] mx-auto"
            >
                {children && <SectionTitle>{children}</SectionTitle>}

                <div className="flex gap-6 flex-wrap lg:flex-nowrap">
                    <div className="map w-full lg:w-[60%] rounded-2xl overflow-hidden">
                        <iframe
                            className="w-full h-[350px] md:h-[458px]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7995413782855!2d101.7119999!3d3.14753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3720104618e9%3A0x61ffb5fdb1844d68!2sLazeez%20Arabic%20Restaurant%20and%20Grill!5e0!3m2!1sen!2sbd!4v1727791828294!5m2!1sen!2sbd"
                            title="our location"
                        ></iframe>
                    </div>
                    <div className="w-full lg:w-[40%]">
                        <form className="flex flex-col gap-2">
                            <input
                                className="w-full border-[1px] py-3 md:py-4 border-zinc-300 outline-none pl-4 text-[20px] rounded-2xl font-JosefinSans_Regular capitalize"
                                type="text"
                                name=""
                                id=""
                                placeholder="Full name"
                            />
                            <input
                                className="w-full border-[1px] py-3 md:py-4 border-zinc-300 outline-none pl-4 text-[20px] rounded-2xl font-JosefinSans_Regular capitalize"
                                type="number"
                                name=""
                                id=""
                                placeholder="Phone number"
                            />
                            <input
                                className="w-full border-[1px] py-3 md:py-4 border-zinc-300 outline-none pl-4 text-[20px] rounded-2xl font-JosefinSans_Regular capitalize"
                                type="email"
                                name=""
                                id=""
                                placeholder="Email id"
                            />
                            <textarea
                                className="w-full h-[170px] md:h-[210] border-[1px] border-zinc-300 outline-none pl-4 pt-2 text-[20px] rounded-2xl font-JosefinSans_Regular capitalize"
                                placeholder="Message"
                            ></textarea>
                            <input
                                className="py-3 md:py-4 rounded-2xl border-[1px] bg-orangeShade-300 text-white text-[20px] transition-all duration-100 font-Nunito_Regular capitalize hover:text-white hover:hover:bg-greenShade-300 font-JosefinSans_Regular cursor-pointer"
                                type="submit"
                                value="submit"
                            />
                        </form>
                    </div>
                </div>
                <div className="w-full grid grid-cols-2 gap-12 content-center px-0 flex-col mt-14 sm:mt-20 md:mt-20 lg:mt-20">
                    {contactData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={`flex gap-4 ${item.styles}`}
                            >
                                <span className="text-4xl text-orangeShade-300">
                                    {item.logo}
                                </span>
                                <div className="!w-full flex flex-col">
                                    <h2 className="font-JosefinSans_bold text-[20px] uppercase pb-2 leading-none">
                                        {item.title}
                                    </h2>

                                    <div
                                        className={`font-JosefinSans_Regular ${
                                            item.id === 1 && "flex"
                                        } text-[18px] ${
                                            item.id === 2
                                                ? "lowercase"
                                                : "capitalize"
                                        } leading-5 w-full`}
                                    >
                                        <span>{item.desc}</span>
                                        <br />
                                        <span>{item.desc2}</span>
                                        {item.id === 1 && (
                                            <span className="max-w-72 w-full ml-2">
                                                {item.separatAdd}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default ContactUs;
