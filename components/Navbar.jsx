/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { VscCircleSmall } from "react-icons/vsc";

import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
    const [navPosition, setnavPosition] = useState(false);

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll >= 300) {
            setnavPosition(true);
        }
        if (currentScroll < 300) {
            setnavPosition(false);
        }
    });

    const [first, setfirst] = useState(false);
    const menuRef = useRef();

    return (
        <>
            <header className="w-full relative">
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
                        delay: 0.3,
                        duration: 0.5,
                        ease: "linear",
                    }}
                    className={`main-navbar w-full absolute top-0 left-0 z-[99] h-[70px] mt-3 flex items-center justify-center px-5`}
                >
                    <div className="max-w-[1820px] mx-auto w-full h-full">
                        <div className="flex justify-between items-center w-full md:w-auto h-full">
                            <Link href={'/'} className="logo w-32 sm:w-40 lg:w-44 pb-2">
                                <img
                                    className="w-full"
                                    width={128}
                                    height={70}
                                    src="/logo_name.png"
                                    alt="logo"
                                />
                            </Link>
                            {first === false && (
                                <div
                                    onClick={() => setfirst(true)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden"
                                >
                                    <span className="text-lg text-greenShade-300">
                                        <MdOutlineMenu />
                                    </span>
                                </div>
                            )}
                            {first === true && (
                                <div
                                    onClick={() => setfirst(false)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden group"
                                >
                                    <span className="text-lg text-greenShade-300 group-hover:rotate-90 duration-150 transition-all">
                                        <MdClose />
                                    </span>
                                </div>
                            )}
                            <div className="main-nav-menu flex items-center gap-5 pt-3">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg mix-blend-difference"
                                >
                                    Home
                                </Link>
                                <Link
                                    href={"/about"}
                                    aria-label="about us"
                                    className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                >
                                    About Us
                                </Link>
                                <Link
                                    className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                    href="/menu"
                                    aria-label="menu"
                                >
                                    Menu
                                </Link>
                                <Link
                                    href={"/service"}
                                    aria-label="Our services"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                >
                                    Our services
                                </Link>
                                <Link
                                    href={"/social_accounts"}
                                    aria-label="social_accounts"
                                    className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg cursor-pointer"
                                >
                                    Socials
                                </Link>

                                <Link
                                    href={"/contact"}
                                    aria-label="contact"
                                    className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </motion.div>
                {/*  */}
                <div
                    className={`fixed-navbar w-full h-[90px] px-5 py-2 bg-white ${
                        navPosition === true
                            ? "-translate-y-0"
                            : "-translate-y-[100%]"
                    } fixed top-0 left-0  z-[999] lg:px-12 transition-all duration-500`}
                >
                    <div className="max-w-[1800px] mx-auto w-full h-full">
                        <div className="flex justify-between items-center w-full md:w-auto h-full">
                            <div className="logo w-32 sm:w-32 lg:w-44 pb-2">
                                <img
                                    className="w-full"
                                    width={128}
                                    height={70}
                                    src="/logo_name.png"
                                    alt="logo"
                                />
                            </div>
                            {first === false && (
                                <div
                                    onClick={() => setfirst(true)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden"
                                >
                                    <span className="text-lg text-greenShade-300">
                                        <MdOutlineMenu />
                                    </span>
                                </div>
                            )}
                            {first === true && (
                                <div
                                    onClick={() => setfirst(false)}
                                    className="menu-btn w-6 h-6 rounded-md bg-white justify-center items-center flex cursor-pointer relative md:hidden "
                                >
                                    <span className="text-lg text-greenShade-300 hover:rotate-90 duration-150 transition-all">
                                        <MdClose />
                                    </span>
                                </div>
                            )}
                            <div className="main-nav-menu flex items-center gap-5 pt-3">
                                <Link
                                    href="/"
                                    aria-label="home"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                >
                                    Home
                                </Link>
                                <Link
                                    href={"/about"}
                                    aria-label="about us"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                >
                                    About Us
                                </Link>
                                <Link
                                    className="link2 relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                    href="/menu"
                                    aria-label="menu"
                                >
                                    Menu
                                </Link>
                                <Link
                                    href={"/service"}
                                    aria-label="our services"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                >
                                    Our services
                                </Link>
                                <Link
                                    href={"/social_accounts"}
                                    aria-label="social_accounts"
                                    className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg cursor-pointer"
                                >
                                    Socials
                                </Link>

                                <Link
                                    href={"/contact"}
                                    aria-label="contact"
                                    className="link2 relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
                {/*  */}
                <div
                    ref={menuRef}
                    className={`fixed top-[85.2px] left-1/2 -translate-x-1/2 w-full z-[999] max-w-[1800px] mx-auto overflow-hidden transition-all duration-300 origin-top pb-5 ${
                        first === true
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible translate-y-[10%]"
                    }
                    `}
                >
                    <div className="fixed-menu flex flex-col bg-white overflow-hidden">
                        <Link
                            href="/"
                            aria-label="home"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#eeeeee] px-5 hover:bg-orangeShade-300 flex justify-between items-center"
                        >
                            Home
                            <span>
                                <VscCircleSmall />
                            </span>
                        </Link>
                        <Link
                            href={"/about"}
                            aria-label="about us"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#eeeeee] px-5 hover:bg-orangeShade-300 flex justify-between items-center"
                        >
                            About Us
                            <span>
                                <VscCircleSmall />
                            </span>
                        </Link>
                        <a
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#eeeeee] px-5 hover:bg-orangeShade-300 flex justify-between items-center"
                            href="https://lazeezarg.com/menu/"
                            aria-label="menu"
                        >
                            Menu
                            <span>
                                <VscCircleSmall />
                            </span>
                        </a>
                        <Link
                            href={"/service"}
                            aria-label="our services"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#eeeeee] px-5 hover:bg-orangeShade-300 flex justify-between items-center"
                        >
                            Our services
                            <span>
                                <VscCircleSmall />
                            </span>
                        </Link>
                        <Link
                            href={"/social_accounts"}
                            aria-label="socials"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-b-[1px] border-[#eeeeee] px-5 hover:bg-orangeShade-300 flex justify-between items-center"
                        >
                            Socials
                            <span>
                                <VscCircleSmall />
                            </span>
                        </Link>

                        <Link
                            href={"/contact"}
                            aria-label="contact"
                            className="link relative font-JosefinSans_semibold capitalize text-greenShade-300 text-lg py-3 border-none px-5
                             hover:bg-orangeShade-300 flex justify-between items-center"
                        >
                            Contact
                            <span>
                                <VscCircleSmall />
                            </span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
