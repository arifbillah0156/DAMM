// components/FullSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import Link from "next/link";

const images = [
  {
    src: "/Banner1.jpg",
    alt: "ADMISSION IS GOING ON"
  },
  {
    src: "/Banner2.jpg",
    alt: "ভর্তি চলিতেছে"
  },
  {
    src: "/Banner3.jpg",
    alt: "DARUL AZHAR MODEL MADRASAH"
  },
  // {
  //   src: "https://darulazharbd.com/wp-content/uploads/2024/12/225-2000x700-1.jpg",
  //   alt: "EXAMINATION"
  // }
];

export default function FullSlider() {
  return (
    <section id="slider_area" className="w-full h-full z-0 border-[3px] lg:border-[10px] border-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-max rounded-md lg:rounded-lg"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-full relative">
              {/* <Link
                href={img.src}
                passHref
                rel="noopener noreferrer"
                className="absolute text-lg md:text-2xl left-4 md:left-[1%] top-1 md:top-4 text-white md:p-1 md:px-2 md:rounded-md md:border md:border-white "
              >
                <i className="fa-solid fa-expand"></i>
              </Link> */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
