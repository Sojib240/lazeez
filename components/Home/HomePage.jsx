"use client";
import React, { useEffect, useRef, useState } from "react";
import ContactUs from "../ContactUs";
import Facilities from "../Facilities";
import Hero from "../Hero";
import NumberOfItems from "../NumberOfItems";
import PopUp from "../PopUp";
import Reviews from "../Reviews";
import Serve from "../Serve";
import VideoGallery from "../VideoGallery";
import WhyUs from "../WhyUs";
import ContactPopUp from "../ContactPopUp";
import BestSeller from "../BestSeller";

const HomePage = ({ popup, setpopup }) => {
    const [CPopUp, setCPopUp] = useState(false);
    var cp;
    const cpopU = useRef(null);

    window.addEventListener("scroll", () => {
        const currScroll = window.scrollY;
        if (currScroll >= cp) {
            setCPopUp(true);
        }
        if (currScroll < cp) {
            setCPopUp(false);
        }
    });

    useEffect(() => {
        cp = cpopU.current.getBoundingClientRect().height;
    });

    return (
        <div className="w-full h-full">
            <Hero cpopU={cpopU} setpopup={setpopup} />
            <Serve />
            <Facilities />
            <BestSeller />
            <NumberOfItems />
            <Reviews />
            <WhyUs />
            <VideoGallery />
            <ContactUs children={"Contact Us"} />
            <PopUp popup={popup} setpopup={setpopup} />
            <ContactPopUp CPopUp={CPopUp} />
        </div>
    );
};

export default HomePage;
