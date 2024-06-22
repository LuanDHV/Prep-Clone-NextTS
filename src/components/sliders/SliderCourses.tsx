"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SliderCourses() {
  const SliderCourses = [
    {
      img: "/imgs/courses/ielts/ielts_1.png",
    },
    {
      img: "/imgs/courses/ielts/ielts_2.png",
    },
    {
      img: "/imgs/courses/ielts/ielts_3.png",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      className="custom-swiper-pagination"
    >
      {SliderCourses.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.img}
            alt="slide-courses"
            width={450}
            height={400}
            className="mx-auto mb-[50px] object-cover"
            layout="responsive"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
