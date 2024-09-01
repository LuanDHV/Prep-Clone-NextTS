"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { IBlog } from "@/types/interfaces";

export default function SliderBlogToeic() {
  const SliderBlogToeic: IBlog[] = [
    {
      title: "“Xanh chín” với bài thi TOEIC cùng “bảo bối” bộ xanh cam TOEIC",
      img: "/imgs/blogs/toeic/blog-toeic-1.png",
      link: "https://prepedu.com/vi/blog/bo-xanh-cam-toeic",
    },
    {
      title: "“Bỏ túi” gần 7600 từ vựng cùng Hackers TOEIC Vocabulary PDF",
      img: "/imgs/blogs/toeic/blog-toeic-2.png",
      link: "https://prepedu.com/vi/blog/hackers-toeic-vocabulary-pdf",
    },
    {
      title: "10+ từ vựng TOEIC chủ đề Marketing thông dụng",
      img: "/imgs/blogs/toeic/blog-toeic-3.png",
      link: "https://prepedu.com/vi/blog/tu-vung-toeic-chu-de-marketing",
    },
    {
      title: "20+ từ vựng chủ đề Warranties thường gặp trong bài thi TOEIC",
      img: "/imgs/blogs/toeic/blog-toeic-4.png",
      link: "https://prepedu.com/vi/blog/tu-vung-chu-de-warranties",
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
      spaceBetween={30}
    >
      {SliderBlogToeic.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="mb-10">
            <Link href={slide.link}>
              <img
                src={slide.img}
                alt="img-slide-blog"
                className="mx-auto h-60 w-full rounded-lg object-cover md:h-[450px] md:w-4/6"
              />
            </Link>
            <p className="py-4 text-center text-white md:py-6 md:text-xl">
              {slide.title}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
