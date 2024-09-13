"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { IBlog } from "@/types/interfaces";

export default function SliderBlogIelts() {
  const SliderBlogIelts: IBlog[] = [
    {
      title: "5 phút phân biệt Yet, Already, Still, Just và Since nhanh chóng",
      img: "/imgs/blogs/ielts/blog-ielts-1.png",
      link: "https://prepedu.com/vi/blog/phan-biet-yet-already-still-just-va-since",
    },
    {
      title: "Động từ khởi phát là gì? Tổng hợp 10 động từ khởi phát tiếng Anh",
      img: "/imgs/blogs/ielts/blog-ielts-2.png",
      link: "https://prepedu.com/vi/blog/dong-tu-khoi-phat-tieng-anh",
    },
    {
      title: "[LỘ TRÌNH HỌC IELTS] - Đạt IELTS 6.5 sau 6 tháng từ con số 0",
      img: "/imgs/blogs/ielts/blog-ielts-3.png",
      link: "https://prepedu.com/vi/blog/lo-trinh-hoc-ielts-65-don-gian-trong-vong-6-thang",
    },
    {
      title: "[LỘ TRÌNH LUYỆN THI IELTS] - 33 NGÀY NƯỚC RÚT ĐỂ VỀ ĐÍCH",
      img: "/imgs/blogs/ielts/blog-ielts-4.png",
      link: "https://prepedu.com/vi/blog/lo-trinh-luyen-thi-ielts-nuoc-rut-trong-33-ngay",
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
      {SliderBlogIelts.map((slide: IBlog, index: number) => (
        <SwiperSlide key={index}>
          <div className="mb-10">
            <Link href={slide.link}>
              <img
                src={slide.img}
                alt="img-slide-blog"
                className="mx-auto h-60 w-full rounded-lg object-contain md:h-[450px] md:w-4/6"
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
