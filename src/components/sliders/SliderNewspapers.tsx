"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { INewPaper } from "@/types/interfaces";

export default function SliderNewspapers() {
  const SliderNewspapers: INewPaper[] = [
    {
      img: "/imgs/newspapers/newspaper-1.png",
      logo: "/imgs/newspapers/logo-1.png",
      content:
        "Luyện thi Ielts online - trải nghiệm lớp học truyền thống qua edtech như thế nào ?",
      link: "https://cafef.vn/tao-trai-nghiem-lop-hoc-truyen-thong-qua-edtech-bai-toan-muon-thuo-20210930112047186.chn",
    },
    {
      img: "/imgs/newspapers/newspaper-2.png",
      logo: "/imgs/newspapers/logo-2.png",
      content: "Luyện thi Tiếng Anh online trên  Prep - xu thế học của Gen Z",
      link: "https://znews.vn/nen-tang-giup-gen-z-luyen-thi-tieng-anh-online-post1260458.html",
    },
    {
      img: "/imgs/newspapers/newspaper-3.png",
      logo: "/imgs/newspapers/logo-3.png",
      content: "Prep.vn - luyện thi tiếng Anh online toàn diện hút GenZ",
      link: "https://dantri.com.vn/giao-duc/ra-mat-nen-tang-luyen-thi-tieng-anh-online-toan-dien-mua-dich-20210907133923234.htm",
    },
    {
      img: "/imgs/newspapers/newspaper-4.png",
      logo: "/imgs/newspapers/logo-4.png",
      content:
        "Tuyển thẳng đại học nhờ IELTS - chỉ cần tự luyện online tại nhà",
      link: "https://www.24h.com.vn/giao-duc-du-hoc/nen-tang-giup-gen-z-luyen-thi-tieng-anh-online-cong-diem-tuyen-thang-dai-hoc-c216a1286991.html",
    },
    {
      img: "/imgs/newspapers/newspaper-5.png",
      logo: "/imgs/newspapers/logo-5.png",
      content: "Gen Z mê mệt nền tảng học luyện thi IELTS vì lý do này",
      link: "https://kenh14.vn/nen-tang-giup-gen-z-tang-band-ielts-online-cong-diem-va-tuyen-thang-dai-hoc-2021090912593213.chn",
    },
    {
      img: "/imgs/newspapers/newspaper-6.png",
      logo: "/imgs/newspapers/logo-6.png",
      content: "Nền tảng luyện thi Tiếng Anh online Prep.vn dẫn đầu xu thế mới",
      link: "https://giaoducthoidai.vn/ra-mat-nen-tang-luyen-thi-tieng-anh-online-toan-dien-mua-dich-post555109.html",
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
      {SliderNewspapers.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="mb-[50px] h-auto w-full rounded-xl bg-white p-5 shadow-lg">
            <Link href={slide.link} target="_blank">
              <Image
                src={slide.img}
                alt="newspapers"
                width={432}
                height={165}
                className="mb-2 object-cover"
              />
              <Image
                src={slide.logo}
                alt="newspapers"
                width={48}
                height={48}
                className="mx-auto object-cover"
              />
              <h3 className="mt-2 h-14">{slide.content}</h3>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
