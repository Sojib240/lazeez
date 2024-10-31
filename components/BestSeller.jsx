/* eslint-disable @next/next/no-img-element */
import React from "react";
import { bestSellerData } from "@/constant/data";
import { Gallery, Item } from "react-photoswipe-gallery";
import Link from "next/link";
import "photoswipe/dist/photoswipe.css";
import SectionTitle from "./common/SectionTitle";
import { motion } from "framer-motion";

const BestSeller = () => {
    return (
        <>
            <section className="px-5 max-w-[1600px] mx-auto" id="bestSeller">
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
                >
                    <SectionTitle>Best Selling Item</SectionTitle>
                </motion.div>
                <div className="w-full flex justify-between gap-10 lg:gap-14 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2">
                        <div className="grid col-span-1 sm:col-span-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                            <Gallery withCaption>
                                {bestSellerData.map((data) => (
                                    <div
                                        className={`h-48 sm:h-52 md:h-52 lg:h-52 rounded-2xl ${data.styles} overflow-hidden cursor-pointer bg-gray-500`}
                                        key={data.id}
                                    >
                                        <div className="w-full h-full absolute left-0 top-0 bg-black"></div>
                                        <Item
                                            className="w-full h-full object-cover"
                                            original={data.image}
                                            thumbnail={data.image}
                                            width="1000"
                                            height="670"
                                            caption={`${data.caption}`}
                                        >
                                            {({ ref, open }) => (
                                                <img
                                                    className="w-full h-full object-cover"
                                                    ref={ref}
                                                    onClick={open}
                                                    src={data.image}
                                                    alt={data.caption}
                                                />
                                            )}
                                        </Item>
                                    </div>
                                ))}
                            </Gallery>
                        </div>
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
                        transition={{ duration: 0.5 }}
                        className="w-full lg:w-1/2"
                    >
                        <p className="text-[22px] md:text-2xl lg:text-3xl font-JosefinSans_bold text-left">
                            Explore our top dishes at 'Lazeez Arabic Restaurant
                            and Grill'.
                        </p>
                        <p className="text-lg font-JosefinSans_Regular pt-4 text-left">
                            Elevate your dining experience by pairing them with
                            our recommended sides or refreshing drinks. From
                            succulent grilled meats to fragrant rice dishes,
                            each of our best sellers is crafted with authentic
                            Middle Eastern flavors. enhance your meal by
                            choosing from our wide selection of appetizers,
                            beverages, and desserts to create the perfect
                            combination.
                        </p>
                        <p className="text-lg font-JosefinSans_Regular pt-4 text-left pb-10">
                            Whether you’re in the mood for something light and
                            refreshing or rich and indulgent, our menu has the
                            perfect pairings for every dish.
                        </p>
                        <Link
                            href={"/menu"}
                            className="py-4 px-10 rounded-2xl border-[1px] bg-greenShade-300 text-white text-base transition-all duration-100 font-Nunito_Regular capitalize hover:text-white hover:hover:bg-orangeShade-300 font-JosefinSans_Regular cursor-pointer"
                        >
                            Explore Menu
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default BestSeller;
