"use client";
import React from "react";
import { socialData } from "@/constant/data";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="space-y-3 w-full flex flex-col items-center justify-center">
      {socialData.map((data, index) => (
        <Link
          className="bg-white capitalize py-1 px-2 rounded-md shadow-lg   transition-all duration-300 flex items-center justify-start gap-1 sm:gap-2 hover:bg-green-500 w-full sm:w-[450px]  link-bg h-[42px] relative"
          href={data.link}
          target="_blank"
          key={index}
        >
          <img
            src={`/icon/${data.logo}`}
            alt="icon"
            width={35}
            height={35}
            className={`h-[35px] w-[35px] absolute top-1/2 -translate-y-1/2 ${
              data.platform == "snapchat" && "h-[28px] w-[35px] rounded-lg "
            }`}
          />

          <span className="text-center text-sm block w-full font-bold">
            {data.username}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
