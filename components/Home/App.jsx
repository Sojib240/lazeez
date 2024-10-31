"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HomePage from "./HomePage";
import Footer from "../Footer";
import Loading from "../Loading";

const App = () => {
    const [popup, setpopup] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <HomePage popup={popup} setpopup={setpopup} />
                    <Footer setpopup={setpopup} />
                </>
            )}
        </>
    );
};

export default App;
