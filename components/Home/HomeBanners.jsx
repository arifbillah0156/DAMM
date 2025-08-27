"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  }
];

export default function FullSlider() {
  return (
    <section id="slider_area" className="max-w-full h-full z-0 m-1 lg:m-2 border border-blue-200 rounded-md lg:rounded-lg">
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
