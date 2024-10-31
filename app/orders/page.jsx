import React from "react";
import FloorList from "./FloorList";

const Order = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/bg/background-1.jpg')] bg-fixed bg-cover bg-center">
      <div className="max-w-[575px]  mx-auto min-h-screen     ">
        <div className="">
          <FloorList />
        </div>
      </div>
    </div>
  );
};

export default Order;
