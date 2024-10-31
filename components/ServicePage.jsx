"use client";
import React from "react";
import CommonHero from "./common/CommonHero";
import Services from "./Services";

const ServicePage = () => {
    return (
        <div>
            <CommonHero title={"Our Services"} />
            <Services />
        </div>
    );
};

export default ServicePage;
