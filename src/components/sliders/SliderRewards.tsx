"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { IReward } from "@/types/interfaces";

export default function SliderRewards() {
  const SliderRewards: IReward[] = [
    {
      img: "/imgs/homepage/edtech.svg",
      content: "Top 50 đơn vị Giáo dục Công Nghệ Đông Nam Á tiềm năng 2023",
      width: 180,
      height: 45,
    },
    {
      img: "/imgs/homepage/sei.svg",
      content:
        "Giải Ảnh hưởng giáo dục của năm (Impact Awards) - SEI Awards do Viện Sáng tạo và Chuyển đổi số tổ chức lần thứ nhất, năm 2023",
      width: 124,
      height: 60,
    },
    {
      img: "/imgs/homepage/sei.svg",
      content:
        "Giải Sáng kiến giáo dục của năm (Innovation of the Year) - SEI Awards do Viện Sáng tạo và Chuyển đổi số tổ chức lần thứ nhất, năm 2023",
      width: 124,
      height: 60,
    },
    {
      img: "/imgs/homepage/holon-award.svg",
      content: "Top 50 đơn vị Giáo dục Công Nghệ Đông Nam Á tiềm năng 2023",
      width: 88,
      height: 88,
    },
  ];

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      {SliderRewards.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="h-[90px]">
            <Image
              src={slide.img}
              alt="rewards"
              width={slide.width}
              height={slide.height}
              objectFit="cover"
              loading="lazy"
              className="mx-auto"
            />
          </div>
          <p className="mb-[50px] mt-[10px] text-center text-sm text-gray-600">
            {slide.content}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
