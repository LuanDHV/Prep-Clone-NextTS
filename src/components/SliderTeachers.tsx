import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SliderTeachers() {
  const SliderTeachers = [
    {
      img: "/imgs/teachers/teacher-1.png",
      name: "Thầy Tú Phạm (MSc)",
      score: "8.5 Overall",
    },
    {
      img: "/imgs/teachers/teacher-2.png",
      name: "Cô Trang Phương (MA)",
      score: "8.0 Overall",
    },
    {
      img: "/imgs/teachers/teacher-3.png",
      name: "Cô Quỳnh Nguyễn",
      score: "9.0 Overall",
    },
    {
      img: "/imgs/teachers/teacher-4.png",
      name: "Thầy Tùng V",
      score: "8.5 Overall",
    },
    {
      img: "/imgs/teachers/teacher-5.png",
      name: "Thầy Trung Đức",
      score: "8.5 Overall",
    },
    {
      img: "/imgs/teachers/teacher-6.png",
      name: "Cô Thục Trinh",
      score: "8.0 Overall",
    },
    {
      img: "/imgs/teachers/teacher-7.png",
      name: "Thầy Viết Vũ",
      score: "8.5 Overall",
    },
    {
      img: "/imgs/teachers/teacher-8.png",
      name: "Cô Huyền Phạm",
      score: "8.0 Overall",
    },
    {
      img: "/imgs/teachers/teacher-9.png",
      name: "Cô Anh Trúc",
      score: "8.0 Overall",
    },
    {
      img: "/imgs/teachers/teacher-10.png",
      name: "Cô Tường Thanh",
      score: "8.0 Overall",
    },
    {
      img: "/imgs/teachers/teacher-11.png",
      name: "Cô Nguyễn Hà Trang",
      score: "8.0 Overall",
    },
    {
      img: "/imgs/teachers/teacher-12.png",
      name: "Cô Hà Trang",
      score: "8.0 Overall",
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
      }}
      className="custom-swiper-pagination"
    >
      {SliderTeachers.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.img}
            alt="teachers"
            width={320}
            height={320}
            objectFit="cover"
            loading="lazy"
            className="mx-auto rounded-xl"
          />

          <p className="mb-[50px] mt-[10px] text-center text-lg font-bold">
            {slide.name}
            <span className="block font-medium text-gray-400">
              {slide.score}
            </span>
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
