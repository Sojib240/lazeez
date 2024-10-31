/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

const ContactPopUp = ({ CPopUp }) => {
  const variants = {
    initial: {
      transform: "translateY(30%)",
      opacity: 0,
      visibility: "hidden",
    },
    animate: {
      transform: "translateY(0%)",
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 0.2,
        ease: "linear",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={CPopUp ? "animate" : "initial"}
      className="fixed-popup fixed bottom-3 right-3 sm:bottom-5 sm:right-5 md:bottom-7 md:right-7 lg:bottom-9 lg:right-9 z-50 p-0 overflow-hidden"
    >
      <a
        href="https://m.me/lazeezarg"
        aria-label="messanger"
        target="blank"
        className="block w-12 sm:w-14  mx-auto cursor-pointer group"
      >
        <img className="duration-150 transition-all group-hover:scale-90" src="/icon/facebook-messenger.png" alt="" />
      </a>
      <a
        href="https://wa.me/+601111192301?text=Hello!"
        aria-label="what's app"
        target="blank"
        className="block w-12 sm:w-14  mx-auto cursor-pointer group"
      >
        <img className="duration-150 transition-all group-hover:scale-90" src="/icon/whatsapp.png" alt="" />
      </a>
    </motion.div>
  );
};

export default ContactPopUp;
