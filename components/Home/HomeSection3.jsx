"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HomeSection3 = () => {
  const images = [
    //
    // "/1.jpeg",
    // "/2.jpeg",
    // "/3.jpeg",
    "/Images/homeS3BG.png",
    // "/5.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);
  return (
    <div>
      <div
        className="h-max w-[100%] bg-cover bg-center transition-all duration-1000 tracking-wider font-semibold text-purple-600 pl-[20px] md:pl-[20%] text-start"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
        }}
      >
        <div className="h-full w-full p-4 py-8 mt-2">
          {/* <p className="text-[25px] md:text-[34px] text-start text-green-600">
            Lorem ipsum dolor sit amet
          </p> */}
          <h1 className="text-[40px] text-start ">
            Lorem <span className="text-green-600">ipsum dolor</span> sit amet consectetur.
          </h1>
          <p className="mt-4 text-[16px] sm:text-[20px] text-green-700 text-start ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, molestias eligendi deserunt velit quia quasi aliquid ullam officiis blanditiis assumenda voluptas:
          </p>
          <div className="ml-[2%] text-start text-[18px] sm:text-xl text-green-700 mt-3">
            <p>
              <i className="fa-solid fa-arrow-right mr-2 text-pink-600 mb-2"></i>
              Lorem ipsum dolor sit.
            </p>
            <p>
              <i className="fa-solid fa-arrow-right mr-2 text-pink-600 mb-2"></i>
              Lorem ipsum dolor sit amet.
            </p>
            <p>
              <i className="fa-solid fa-arrow-right mr-2 text-pink-600"></i>
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>{" "}
          <br /> <br />
          <Link
            href="/services"
            className="p-4 rounded-lg border border-green-500 text-green-700 text-xl font-mono hover:bg-green-600 hover:text-white hover:ring duration-100 tracking-normal"
          >
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
