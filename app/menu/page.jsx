import React from "react";
import MenuFilter from "./MenuFilter";

const Menu = () => {
  return (
    <div className="min-h-screen w-full px-2 bg-[url('/bg/bg-green.png')] bg-cover bg-center bg-fixed">
      <div className="container mx-auto">
        <MenuFilter />
      </div>
    </div>
  );
};

export default Menu;
