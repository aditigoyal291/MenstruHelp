import React from "react";
import Image from "next/image";
const Team = () => {
  return (
    <>
      <h1>Meet Our Team</h1>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col">
          <Image
            src="/images/profile2.jpg"
            width={100}
            height={100}
            alt="team"
            className="rounded-full"
          />
          <div className="flex flex-col items-center">
            <p>Aditi Goyal</p>
            <p>Front-End</p>
          </div>
        </div>
        <div>
          <Image
            src="/images/profile2.jpg"
            width={100}
            height={100}
            alt="team"
            className="rounded-full"
          />
          <div className="flex flex-col items-center">
            <p>Shreya Reddy</p>
            <p>Content</p>
          </div>
        </div>
        <div>
          <Image
            src="/images/profile2.jpg"
            width={100}
            height={100}
            alt="team"
            className="rounded-full"
          />
          <div className="flex flex-col items-center">
            <p>Meghana Goru</p>
            <p>Back-end</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
