import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col flex-1 bg-pink-200 w-full justify-between items-center p-4">
        <h1>Menstruhelp</h1>
        <h1>Get Connected</h1>
        <div className="flex">
          <Image src="/images/email.png" width={60} height={60} />
          <Image src="/images/instagram.svg" width={60} height={60} />
          <Image src="/images/twitter.svg" width={60} height={60} />
          <Image src="/images/youtube.svg" width={60} height={60} />
        </div>

        <h2>
          If you have any feedback or query, Do mail us 
          <span className="hover:underline text-pink-500">
            <a href="goyaladiti2912@gmail.com"> @goyaladiti2912@gmail.com</a>
          </span>
        </h2>
        <form>
          <div className="flex flex-col gap-4">
            <input
              type="email"
              name="Name"
              className="h-[2rem] w-[20rem] rounded-2xl bg-background outline-none border-none p-4 text-purple-500 selection:bg-pink-300"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="Name"
              className="h-[2rem] w-[20rem] rounded-2xl bg-background outline-none border-none p-4 text-purple-500 selection:bg-pink-300"
              placeholder="Your Feedback"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Footer;
