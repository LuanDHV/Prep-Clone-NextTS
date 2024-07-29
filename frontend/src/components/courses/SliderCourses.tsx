"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ICoursesLayout } from "@/types/interfaces";

export default function SliderCourses({ sliders }: ICoursesLayout) {
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
      {sliders.map((slider) => (
        <SwiperSlide key={slider._id}>
          <Image
            src={slider.image}
            alt="slide-courses"
            width={320}
            height={400}
            className="mx-auto mb-[50px] object-cover"
            layout="responsive"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
