"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/public/1.jpg";
import img2 from "@/public/2.jpg";
import img3 from "@/public/3.jpg";
import img4 from "@/public/4.jpg";
import Link from "next/link";

const HomeSection2 = () => {
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    const totalImg = [
      {
        imgUrl: img1,
        imgTxt: "আমাদের কথা",
        fullImgUrl: "/1.jpg",
      },
      {
        imgUrl: img2,
        imgTxt: "কেন এ আয়োজন",
        fullImgUrl: "/2.jpg",
      },
      {
        imgUrl: img3,
        imgTxt: "আমাদের স্বাতন্ত্র্য",
        fullImgUrl: "/3.jpg",
      },
      {
        imgUrl: img4,
        imgTxt: "আমাদের বৈশিষ্ঠ্য",
        fullImgUrl: "/4.jpg",
      }
    ];
    setImgData(totalImg);
  }, []);

  return (
    <div>
      <div>
        <div className="mt-8 md:mt-16 mb-2 text-center">
          <h1 className="text-3xl md:text-5xl  text-green-600 font-bold tracking-wider px-4">
            আমাদের সম্পর্কে:-
          </h1>
          <i className="fa-solid fa-arrows-down-to-line mt-3 p-4 bg-green-200 rounded-full text-4xl text-green-600"></i>
        </div>
        {/*  */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 font-bold">
          {imgData
            ? imgData.map((img) => {
                return (
                  <div
                    key={img.imgTxt}
                    className="bg-gray-200 rounded-lg shadow p-2 text-center textGradient relative "
                  >
                    <Image
                      src={img.imgUrl}
                      alt="Image"
                      placeholder="blur"
                      className="h-[300px] w-full object-cover"
                    />
                    <div className="text-2xl mt-3 mb-2">{img.imgTxt}</div>
                    <div className="absolute inset-0  text-white text-start text-3xl p-4">
                      <Link
                        href={img.fullImgUrl}
                        passHref
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <i className="fa-solid fa-expand"></i>
                      </Link>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
