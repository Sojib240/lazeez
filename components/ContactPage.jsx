"use client";
import React from "react";
import ContactUs from "./ContactUs";
import CommonHero from "./common/CommonHero";

const ContactPage = () => {
    return (
        <>
            <CommonHero title = {'Contact Us'} />
            <ContactUs />
        </>
    );
};

export default ContactPage;
