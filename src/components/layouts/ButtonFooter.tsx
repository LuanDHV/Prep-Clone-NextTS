"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ButtonFooter() {
  const [isButtonOpen, setButtonOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const toggleButtonOpen = () => {
    setButtonOpen(!isButtonOpen);
  };

  const toggleButtonClose = () => {
    setButtonOpen(!isButtonOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 2500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section>
        {isButtonOpen ? (
          <>
            <div
              className="fixed bottom-56 right-5 z-[200] flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-800 p-5"
              onClick={toggleButtonClose}
            >
              <svg
                className="svg-inline--fa fa-x text-md text-white"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="x"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  className=""
                  fill="currentColor"
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                ></path>
              </svg>
            </div>
            <div className="fixed bottom-80 right-5 z-[200] space-y-5">
              <div className="group relative h-16 w-16 cursor-pointer rounded-full bg-white p-2">
                <Link href="#">
                  <Image
                    src="/imgs/support/zalo.svg"
                    alt="zalo"
                    width={32}
                    height={32}
                    className="absolute right-4 top-4 object-cover"
                  />
                </Link>
                <span className="absolute right-[75px] top-2 flex h-10 w-16 items-center justify-center rounded-lg bg-black p-1 text-sm text-white opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                  Zalo
                  <Image
                    src="/imgs/support/arrow-right.svg"
                    alt="arrow-right"
                    width={14}
                    height={14}
                    className="absolute -right-[10px] object-cover"
                  />
                </span>
              </div>
              <div className="group relative h-16 w-16 cursor-pointer rounded-full bg-white p-2">
                <Link href="#">
                  <Image
                    src="/imgs/support/form-pen.svg"
                    alt="form-pen"
                    width={32}
                    height={32}
                    className="absolute right-4 top-4 object-cover"
                  />
                </Link>
                <span className="absolute right-[75px] top-2 flex h-10 w-48 items-center justify-center rounded-lg bg-black p-1 text-sm text-white opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                  Đăng ký nhận tư vấn
                  <Image
                    src="/imgs/support/arrow-right.svg"
                    alt="arrow-right"
                    width={14}
                    height={14}
                    className="absolute -right-[10px] object-cover"
                  />
                </span>
              </div>
              <div className="group relative h-16 w-16 cursor-pointer rounded-full bg-white p-2">
                <Link href="#">
                  <svg
                    className="svg-inline--fa fa-phone-volume p-2 text-[32px] text-blue-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone-volume"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      className=""
                      fill="currentColor"
                      d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                    ></path>
                  </svg>
                </Link>
                <span className="absolute right-[75px] top-2 flex h-14 w-36 flex-col items-center justify-center rounded-lg bg-black p-1 text-sm text-white opacity-0 duration-300 ease-in-out group-hover:opacity-100">
                  <p>Liên hệ Hotline</p>
                  <p className="font-bold">0123 456 789</p>
                  <Image
                    src="/imgs/support/arrow-right.svg"
                    alt="arrow-right"
                    width={14}
                    height={14}
                    className="absolute -right-[10px] object-cover"
                  />
                </span>
              </div>
            </div>
          </>
        ) : (
          <div
            className="group fixed bottom-56 right-5 z-[200] cursor-pointer"
            onClick={toggleButtonOpen}
          >
            <Image
              src="/imgs/support/bee-support.svg"
              alt="bee-support"
              width={80}
              height={56}
              className="object-cover"
            />
            <span className="absolute right-[75px] top-0 w-60 rounded-lg bg-black px-4 py-2 text-sm text-white opacity-0 duration-300 ease-in-out group-hover:opacity-100 md:h-20 md:w-80">
              <p>Xin chào, Prep rất vui được hỗ trợ bạn.</p>
              <p>
                Hãy chọn cách thức kết nối và gửi vấn đề cụ thể mà bạn cần Prep
                hỗ trợ nhé !
              </p>
              <Image
                src="/imgs/support/arrow-right.svg"
                alt="arrow-right"
                width={14}
                height={14}
                className="absolute -right-[10px] top-8 object-cover"
              />
            </span>
          </div>
        )}
        {isVisible && (
          <div
            className="fixed bottom-32 right-5 z-40 grid h-16 w-16 cursor-pointer place-content-center rounded-full bg-[#1479F4BF] bg-opacity-75 shadow"
            onClick={scrollToTop}
          >
            <svg
              className="svg-inline--fa fa-arrow-up text-white"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-up"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                className=""
                fill="currentColor"
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
              ></path>
            </svg>
          </div>
        )}
      </section>
    </>
  );
}
