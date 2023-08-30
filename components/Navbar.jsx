'use client'

import React from "react";
import Link from "next/link";
import Options from "./Options";
const Navbar = () => {
 
  
  return (
    <div className=" h-12 p-6 border-b-2 border-black flex items-center justify-between w-full ">
      <nav className="flex w-full items-center justify-between ">
        <Options/>
        <Link href="/" className="text-2xl w-full flex  justify-center md:flex md:justify-start">
            MenstruHelp
        </Link>
        <div className="hidden  md:flex justify-between w-full items-center">
          <div>Menstruation Products</div>
          <div>Period Products</div>
          <div>Community</div>
          <div>Blogs</div>
          <div>Resources</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
