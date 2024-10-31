import { onlineOrderLinks } from "@/constant/data";
import Link from "next/link";
import React from "react";

const OnlineOrder = () => {
  return (
    <div className="space-y-3 w-full flex flex-col items-center justify-center pb-5">
      <h1 className="text-white text-lg text-center font-bold  ">
        <q> Order from the Comfort of Your Home</q>
      </h1>
      {onlineOrderLinks.map((link, index) => (
        <Link
          className="bg-white capitalize py-1 px-2 rounded-md shadow-lg   transition-all duration-300 flex items-center justify-start gap-1 sm:gap-2 hover:bg-green-500 w-full sm:w-[450px]  link-bg h-[42px] relative"
          href={link.link}
          target="_blank"
          key={index}
        >
          <img
            src={`/icon/${link.platform}.svg`}
            alt="icon"
            width={35}
            height={35}
            className={`h-[35px] w-[35px] absolute top-1/2 -translate-y-1/2 `}
          />

          <span className="text-center text-sm block w-full font-bold">
            {link.platform}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default OnlineOrder;
