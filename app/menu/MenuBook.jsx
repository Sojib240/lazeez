"use client";
import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const MenuBook = ({ selectedMenu }) => {
  const layoutPlugin = defaultLayoutPlugin();
  return (
    <div className=" mx-auto p-4 max-w-[778px] border h-[500px]">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className=" h-[90vh] sm:h-[80vh] w-full sm:w-[500px] m-auto">
          <Viewer
            fileUrl={`/menu/${selectedMenu}.pdf`}
            plugins={[layoutPlugin]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default MenuBook;
