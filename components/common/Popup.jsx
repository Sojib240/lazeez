/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ popUp, setPopUp, data }) => {
  useEffect(() => {
    const BodyEl = document.querySelector("body");
    if (popUp) {
      BodyEl.style.overflow = "hidden";
    }
    return () => (BodyEl.style.overflow = "inherit");
  }, [popUp]);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center z-[99999] ">
      <button
        className="bg-white px-3 py-2 rounded absolute top-5 right-5 text-greenShade-200 "
        onClick={() => setPopUp(false)}
      >
        <IoCloseOutline size={20} />
      </button>
      <div className=" w-[90%] h-[300px] md:w-[600px] md:h-[400px] bg-white border rounded-lg overflow-hidden">
        <img
          src={data.image}
          alt={data.caption}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Popup;
