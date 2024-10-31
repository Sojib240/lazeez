"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { GrRestaurant } from "react-icons/gr";

const HomeButton = () => {
  return (
    <motion.div className=" space-x-2 text-sm sm:text-base ">
      <Link href={"/"} className="bg-white p-2 rounded-lg inline-block">
        <GrRestaurant color="#13502D" />
      </Link>
    </motion.div>
  );
};

export default HomeButton;
