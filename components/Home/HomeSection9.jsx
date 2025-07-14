"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img1 from "@/public/Images/download.png";
import img2 from "@/public/Images/download.png";
import img3 from "@/public/Images/download.png";
import img4 from "@/public/Images/download.png";
import img5 from "@/public/Images/download.png";
import img6 from "@/public/Images/download.png";

const HomeSection9 = () => {
  const [imgData, setImgData] = useState(null);

  useEffect(() => {
    const totalImg = [
      {
        id: 1,
        imgUrl: img1,
      },
      {
        id: 2,
        imgUrl: img2,
      },
      {
        id: 3,
        imgUrl: img3,
      },
      {
        id: 4,
        imgUrl: img4,
      },
      {
        id: 5,
        imgUrl: img5,
      },
      {
        id: 6,
        imgUrl: img6,
      },
    ];
    setImgData(totalImg);
  }, []);

  return (
    <div>
      <div>
        <div className="mt-8 md:mt-16 mb-2 text-center">
          <h1 className="text-2xl md:text-4xl  text-green-600 font-bold tracking-wider px-4">
            We are Working With
          </h1>
        </div>
        {/*  */}

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 p-4 font-bold">
          {imgData
            ? imgData.map((img) => {
                return (
                  <div
                    key={img.id}
                    className="rounded-lg shadow p-1 text-center"
                  >
                    <Image
                      src={img.imgUrl}
                      alt="Image"
                      placeholder="blur"
                      className="w-full"
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default HomeSection9;
