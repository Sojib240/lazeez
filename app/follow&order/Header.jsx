"use client";
import HomeButton from "@/components/common/HomeButton";
import React from "react";
import Translator from "../social_accounts/Translator";

const Header = () => {
  return (
    <div className="w-full px-4 py-2 flex justify-between items-center ">
      <HomeButton />
      <Translator />
    </div>
  );
};

export default Header;
