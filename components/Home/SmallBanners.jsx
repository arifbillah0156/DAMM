"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/public/DAMM-Principal.jpeg";
import img2 from "@/public/smallBanner2.png";
import img3 from "@/public/smallBanner3.png";
import img4 from "@/public/smallBanner4.png";
import Link from "next/link";

const HomeSection2 = () => {
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    const totalImg = [
      {
        imgUrl: img1,
        imgTxt: "আমাদের কথা",
        fullImgUrl: "/DAMM-Principal.jpeg",
        src: "/Others/"
      },
      {
        imgUrl: img2,
        imgTxt: "কেন এ আয়োজন",
        fullImgUrl: "/2.jpg",
        src: "/Others/কেন-এ-আয়োজন"
      },
      {
        imgUrl: img3,
        imgTxt: "আমাদের স্বাতন্ত্র্য",
        fullImgUrl: "/3.jpg",
        src: "/Others/আমাদের-স্বাতন্ত্র্য"
      },
      {
        imgUrl: img4,
        imgTxt: "আমাদের বৈশিষ্ট্য",
        fullImgUrl: "/4.jpg",
        src: "/Others/আমাদের-বৈশিষ্ট্য"
      }
    ];
    setImgData(totalImg);
  }, []);

  return (
    <div>
      <div>
        {/* <div className="mt-8 md:mt-16 mb-2 text-center">
          <h1 className="text-3xl md:text-5xl  text-green-600 font-bold tracking-wider px-4">
            আমাদের সম্পর্কে:-
          </h1>
          <i className="fa-solid fa-arrows-down-to-line mt-3 p-4 bg-green-200 rounded-full text-4xl text-green-600"></i>
        </div> */}
        {/*  */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 font-bold tiro-bangla-regular">
          {imgData
            ? imgData.map((img) => {
              return (
                <div
                  key={img.imgTxt}
                  className="bg-white text-lc underline underline-offset-4 rounded-lg shadow p-2 text-center textGradient relative "
                >
                  <Image
                    src={img.imgUrl}
                    alt="Image"
                    placeholder="blur"
                    className="h-[300px] w-full object-cover rounded-md md:rounded-lg"
                  />
                  <div className="text-xl mt-4 mb-2">
                    <i className="fa-solid fa-arrow-up-right-from-square" style={{ color: "#118eee" }}></i>
                    <Link href={img.src} className="ml-2" >{img.imgTxt}</Link>
                  </div>
                  <div className="absolute top-0 left-1  text-white text-start text-lg md:text-2xl p-4">
                    <Link
                      href={img.fullImgUrl}
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
