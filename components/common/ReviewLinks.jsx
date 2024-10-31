"use client";
import { reviewLinks } from "@/constant/data";
import { useTranslator } from "@/utils/translatorContext";
import Link from "next/link";
import React from "react";

const ReviewLinks = () => {
  const { isArabic, isMalay } = useTranslator();
  return (
    <div className="w-full flex flex-col items-center gap-5">
      {reviewLinks.map((link, i) => (
        <Link
          key={i}
          href={link.link}
          className="bg-white capitalize py-1 px-2 rounded-md shadow-lg   transition-all duration-300 flex items-center justify-start gap-1 sm:gap-2 hover:bg-green-500  animate-non w-full sm:w-[450px] link-bg h-[42px]"
          target="_blank"
        >
          <img
            src={
              link.platform == "google"
                ? "/icon/google.svg"
                : "/icon/tripadvisor.svg"
            }
            alt="google"
            width={30}
            height={30}
            className="absolute"
          />
          <span className="inline-block w-full text-center text-sm">
            {isArabic
              ? "أ  تقيمك يهمنا "
              : isMalay
              ? "Beritahu kami bagaimana kami melakukannya?"
              : "Let Us know how we did?"}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ReviewLinks;
