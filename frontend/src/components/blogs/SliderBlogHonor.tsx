"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { IBlog } from "@/types/interfaces";

export default function SliderBlogHonor() {
  const SliderBlogHonor: IBlog[] = [
    {
      title:
        "Preppy Trần Mỹ Tâm: “Ăn ngủ” với IELTS trong vòng hơn 1 tháng, thành công đạt 8.0 IELTS",
      img: "/imgs/blogs/honor/blog-honor-1.png",
      link: "https://prepedu.com/vi/blog/vinh-danh-hvdc-my-tam",
    },
    {
      title:
        "Kinh nghiệm học TOEIC hiệu quả giúp nữ sinh viên đạt 830 điểm vượt ngoài kỳ vọng",
      img: "/imgs/blogs/honor/blog-honor-2.png",
      link: "https://prepedu.com/vi/blog/vinh-danh-hvdc-thao-uyen",
    },
    {
      title:
        "Giáo viên tiếng anh lựa chọn Prep trên hành trình chinh phục IELTS",
      img: "/imgs/blogs/honor/blog-honor-3.png",
      link: "https://prepedu.com/vi/blog/vinh-danh-hvdc-trinh-thu-hue",
    },
    {
      title:
        "Tăng 4,5 triệu tiền lương nhờ đạt TOEIC 925 điểm, cô gái chia sẻ bí quyết tự học hiệu quả",
      img: "/imgs/blogs/honor/blog-honor-4.png",
      link: "https://prepedu.com/vi/blog/vinh-danh-hvdc-huu-hong",
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
      {SliderBlogHonor.map((slide: IBlog, index: number) => (
        <SwiperSlide key={index}>
          <div className="mb-10">
            <Link href={slide.link}>
              <img
                src={slide.img}
                alt="img-slide-blog"
                className="mx-auto h-full w-full rounded-lg object-contain md:w-1/4"
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
