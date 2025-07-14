// components/FullSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    src: "https://darulazharbd.com/wp-content/uploads/2024/01/125-2000x700-1.jpg",
    alt: "ADMISSION IS GOING ON"
  },
  {
    src: "https://darulazharbd.com/wp-content/uploads/2024/01/2-2000x700.jpg",
    alt: "ভর্তি চলিতেছে"
  },
  {
    src: "https://darulazharbd.com/wp-content/uploads/2024/01/3-2000x700.jpg",
    alt: "DARUL AZHAR MODEL MADRASAH"
  },
  {
    src: "https://darulazharbd.com/wp-content/uploads/2024/12/225-2000x700-1.jpg",
    alt: "EXAMINATION"
  }
];

export default function FullSlider() {
  return (
    <section id="slider_area" className="w-screen h-full z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-max"
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
