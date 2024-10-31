/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGallery = ({ signatureData }) => {
  return (
    <div className="w-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-2 grid-rows-auto">
      <Gallery withCaption>
        {signatureData.map((item) => {
          return (
            <div
              key={item.id}
              className={`${item.styles} h-52 w-full md:h-64 lg:h-80 rounded-3xl overflow-hidden border`}
            >
              <div className="w-full h-full absolute left-0 top-0 bg-black"></div>
              <Item
                className="w-full h-full object-cover"
                original={item.image}
                thumbnail={item.image}
                width="1200"
                height="800"
                caption={`${item.caption}`}
              >
                {({ ref, open }) => (
                  <img
                    className="w-full h-full object-cover"
                    ref={ref}
                    onClick={open}
                    src={item.image}
                    alt={item.caption}
                  />
                )}
              </Item>
            </div>
          );
        })}
      </Gallery>
    </div>
  );
};

export default ImageGallery;
