"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { IBlog } from "@/types/interfaces";

export default function SliderBlogEvent() {
  const SliderBlogEvent: IBlog[] = [
    {
      title:
        "[PREPxIPP] Ra mắt lớp học Speaking FREE - SPEAKING MARATHON trong mùa hè này",
      img: "/imgs/blogs/event/blog-event-1.png",
      link: "https://prepedu.com/vi/blog/speaking-marathon-free-prep-2024",
    },
    {
      title:
        "BÙNG NỔ ƯU ĐÃI THÁNG 5: HÈ TỚI, QUYẾT HỌC IELTS, LỘT XÁC THÀNH CON NGƯỜI MỚI!",
      img: "/imgs/blogs/event/blog-event-2.png",
      link: "https://prepedu.com/vi/blog/bung-no-uu-dai-thang-5",
    },
    {
      title: "HÈ RỰC RỠ - NÂNG IELTS HẾT CỠ",
      img: "/imgs/blogs/event/blog-event-3.png",
      link: "https://prepedu.com/vi/blog/he-ruc-ro-nang-ielts-het-co",
    },
    {
      title: "GIẢI PHÁP TỰ HỌC TOEIC TẠI NHÀ MỤC TIÊU 800+ SAU 145 NGÀY",
      img: "/imgs/blogs/event/blog-event-4.png",
      link: "https://prepedu.com/vi/blog/giai-phap-tu-hoc-toeic-tai-nha-muc-tieu-800-sau-145-ngay",
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
      {SliderBlogEvent.map((slide: IBlog, index: number) => (
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
