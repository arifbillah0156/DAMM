"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/public/DAMM-Principal.jpeg";
import img2 from "@/public/smallBanner2.png";
import img3 from "@/public/smallBanner3.png";
import img4 from "@/public/smallBanner4.png";
import Link from "next/link";
import Loading from "@/app/loading";

const HomeSection2 = () => {
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    const totalImg = [
      {
        imgUrl: img1,
        imgTxt: "আমাদের কথা",
        fullImgUrl: "/DAMM-Principal.jpeg",
        src: "/#our-words"
      },
      {
        imgUrl: img2,
        imgTxt: "কেন এ আয়োজন",
        fullImgUrl: "/smallBanner2.png",
        src: "/#why-this-event"
      },
      {
        imgUrl: img3,
        imgTxt: "আমাদের স্বাতন্ত্র্য",
        fullImgUrl: "/smallBanner3.png",
        src: "/#our-uniqueness"
      },
      {
        imgUrl: img4,
        imgTxt: "আমাদের বৈশিষ্ট্য",
        fullImgUrl: "/smallBanner4.png",
        src: "/#our-specialty"
      }
    ];
    setImgData(totalImg);
  }, []);

  return (
    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 font-bold tiro-bangla-regular">
          {imgData
            ? imgData.map((img) => {
              return (
                <div
                  key={img.imgTxt}
                  className="bg-white text-lc underline underline-offset-4 rounded-lg shadow p-2 text-center textGradient relative hover:shadow-lg"
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
            : (<div className="fixed inset-0 flex items-center justify-center bg-lc text-white z-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
            </div>)}
        </div>
      </div>
    </div>
  );
};

export default HomeSection2;
