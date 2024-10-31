"use client";
import Image from "next/image";
import React from "react";
import SocialLinks from "@/components/common/SocialLinks";
import OnlineOrder from "@/components/common/OnlineOrder";
import { useTranslator } from "@/utils/translatorContext";

const SocialContent = () => {
  const { isArabic, isMalay } = useTranslator();
  return (
    <section className="min-h-[95vh]  max-w-[568px] mx-auto px-2 space-y-5">
      <div className="w-full flex items-center justify-center pt-5 sm:pt-0">
        <Image
          src={"/logo/logo_with_shadow.svg"}
          alt="logo"
          height={150}
          width={150}
        />
      </div>
      <p className="text-center text-lg text-white ">
        {isArabic
          ? " Lazeez - Arabic Restaurant and Grill - تذوق النكهة العربية في  "
          : isMalay
          ? "Manjakan diri dengan rasa tradisional masakan Arab di Lazeez - Restoran & Grill Arab!"
          : "Indulge in the traditional flavors of Arabic cuisines at Lazeez - Arabic Restaurant And Grill"}
      </p>

      <h1 className="capitalize text-center font-bold text-base sm:text-lg my-2 text-white ">
        <q>
          {isArabic
            ? "كن جزءًا من عائلتنا عبر الإنترنت"
            : isMalay
            ? "Jadilah Sebahagian Daripada Keluarga Dalam Talian Lazeez Kami"
            : "Become A Part Of Our Lazeez Online Family"}
        </q>
      </h1>
      <SocialLinks />

      <OnlineOrder />
    </section>
  );
};

export default SocialContent;
