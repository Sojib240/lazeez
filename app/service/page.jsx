"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServicePage from "@/components/ServicePage";
import React from "react";

const page = () => {
    return (
        <>
            <Navbar />
            <ServicePage />
            <Footer />
        </>
    );
};

export default page;
