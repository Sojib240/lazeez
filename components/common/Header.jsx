"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full  bg-white z-10 px-5 fixed top-0 left-0">
      <div className="container mx-auto">
        <div className="p-2 px-4 flex justify-between items-center">
          <img
            src={"/logo/name_without_shadow.svg"}
            height={80}
            width={130}
            alt="logo"
          />
          <ul>
            <li className="font-bold text-[#13502D] uppercase">
              <Link href={"/social_accounts"}>follow us</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
