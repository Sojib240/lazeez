"use client";
import { tableQR } from "@/constant/data";
import { motion } from "framer-motion";
import React, { useState } from "react";

const FloorList = () => {
  const [selectMenuItem, setSelectMenuItem] = useState("Ground Floor");
  const floorList = ["Ground Floor", "Level 1", "outside"];

  return (
    <>
      <ul className="flex gap-2 sm:gap-3 justify-center items-center my-3 mt-0 sticky top-0 bg-white bg-opacity-50 backdrop-blur-sm py-3 border-b shadow-sm z-10">
        {floorList.map((i, j) => (
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: j * 0.05 } }}
            key={j}
            className={`p-2 px-4 border border-r-green-500 border-b-green-500 border-orange-300 bg-white  rounded-xl capitalize  cursor-pointer duration-300 shdaow transition-all  relative z-0 ${
              selectMenuItem !== i
                ? "text-green-900 "
                : "bg-green-50 shadow-none text-white"
            }`}
            onClick={() => setSelectMenuItem(i)}
          >
            {selectMenuItem === i ? (
              <motion.span
                layoutId={"slide"}
                className="absolute block w-full h-full bg-green-800 -z-[1] left-0 top-0 rounded-xl"
              ></motion.span>
            ) : null}

            {i}
          </motion.li>
        ))}
      </ul>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center items-center ">
        {tableQR
          .filter((data) => data.level === selectMenuItem)
          .map((data, index) => (
            <motion.a
              href={data.link}
              target="_blank"
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: index * 0.05 },
              }}
              viewport={{ once: true }}
              key={index}
              className=" w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] bg-green-600 bg-opacity-50 backdrop-blur-sm m-2 flex justify-center items-center text-3xl text-white rounded-lg"
            >
              {data.tableNo}
            </motion.a>
          ))}
      </div>
    </>
  );
};

export default FloorList;
