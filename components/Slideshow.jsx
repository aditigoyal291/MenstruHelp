import React, { useState } from "react";
import image from "../data/image";
// import { AiOutlineLeft } from "react-icons/ai";
// import { AiOutlineRight } from "react-icons/ai";
// import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
const Home = () => {
  console.log(image);
  const [currentIndex, setcurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  const goToSlide = (itemsIndex) => {
    setcurrentIndex(itemsIndex);
  };
  return (
    <>
      
        <div className="justify-center flex flex-col">
          
            <div
              style={{
                backgroundImage: `url(${image[currentIndex].image})`,
              }}
              className=" h-[12rem] w-[16rem] flex bg-no-repeat rounded-2xl  duration-500 hover:grayscale-0"
            ></div>

            <Image
              src="/images/left.png"
              width={20}
              height={20}
              alt="left"
              style={{display:"flex",alignItems:"end", left:40,position:"absolute" ,justifyContent:"end"}}
              onClick={prevSlide}
            />

            <Image
              src="/images/right.png"
              width={20}
              height={20}
              alt="right"
              style={{display:"flex",alignItems:"end", right:40,position:"absolute" ,justifyContent:"end"}}
              onClick={nextSlide}
            />
          
          <div className=" flex  justify-center">
            {image.map((items, itemsIndex) => (
              <div
                key={itemsIndex}
                onClick={() => {
                  goToSlide(itemsIndex);
                }}
                className="text-2xl cursor-pointer"
              >
                <Image
                  src="/images/dot.png"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
     
    </>
  );
};

export default Home;
