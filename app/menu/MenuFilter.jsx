// components/MenuFilter.js
"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
// import MenuBook from "./MenuBook";

const MenuFilter = () => {
  const [selectMenuItem, setSelectMenuItem] = useState("main-menu");
  const menuList = [
    "main-menu",
    "second-menu",
    "breakfast",
    "lunch",
    "dessert",
  ];
  const flipBookLink = [
    {
      name: "main-menu",
      link: "https://publuu.com/flip-book/692671/1541333/page/1?embed&transparent",
    },
    {
      name: "second-menu",
      // link: "https://heyzine.com/flip-book/b78749e94c.html",
      link: "https://publuu.com/flip-book/692671/1540902/page/1?embed&transparent",
    },
    {
      name: "breakfast",
      link: "https://publuu.com/flip-book/692671/1541366/page/1?embed&transparent",
    },
    {
      name: "lunch",
      link: "https://publuu.com/flip-book/692671/1541383/page/1?embed&transparent",
    },
    {
      name: "dessert",
      link: "https://publuu.com/flip-book/692671/1541384//page/1?embed&transparent",
    },
  ];

  return (
    <>
      <ul className="flex justify-center items-center gap-5 py-5 flex-wrap">
        {menuList.map((i, j) => (
          <motion.li
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { delay: j * 0.2 } }}
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
      {/* <MenuBook selectedMenu={selectMenuItem} /> */}
      <AnimatePresence>
        {flipBookLink
          .filter((data) => data.name === selectMenuItem)
          .map((data, index) => (
            <motion.div
              className=" max-w-[768px] mx-auto"
              key={index}
              exit={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* <iframe
                allowFullScreen="allowfullscreen"
                scrolling="no"
                className="fp-iframe"
                src={data.link}
                style={{ border: 0, width: "100%", height: "600px" }}
              ></iframe> */}

              <iframe
                src={data.link}
                width="100%"
                height="568"
                scrolling="no"
                frameBorder="0"
                allow="clipboard-write; autoplay; fullscreen"
                className="publuuflip"
              ></iframe>
            </motion.div>
          ))}
      </AnimatePresence>
    </>
  );
};

export default MenuFilter;
