import Link from "next/link";
import React from "react";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="">
        <Navbar/>
        <Home />
        
      </main>
    </div>
  );
};

export default App;
