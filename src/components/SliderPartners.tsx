import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function SliderPartners() {
  const SliderPartners = [
    {
      img: "/imgs/partners/partner-1.png",
      width: 195,
    },
    {
      img: "/imgs/partners/partner-2.png",
      width: 74,
    },
    {
      img: "/imgs/partners/partner-3.png",
      width: 278,
    },
  ];
  return (
    <Swiper
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
    >
      {SliderPartners.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="mx-auto mb-[50px] h-auto w-full rounded-xl bg-white p-5 shadow-lg">
            <Image
              src={slide.img}
              alt="partners"
              width={slide.width}
              height={80}
              objectFit="cover"
              loading="lazy"
              className="mx-auto"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
