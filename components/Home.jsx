"use client";
import React from "react";
import Info from "./Info";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import About from "./About";
import Team from "./Team";
const Home = () => {
  return (
    <>
      <div className="flex items-center gap-20 mt-20 flex-col">
        <Slideshow />
        <About/>
        <Info />
        <Team/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
