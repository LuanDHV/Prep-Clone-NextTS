"use client";
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import Link from "next/link";

export default function Roadmap({ roadmap }) {
  return (
    <>
      {roadmap.map((items, index) => (
        <div className="relative" key={index}>
          <div className="mt-5">
            <div className="mb-5 grid text-xl font-bold text-gray-800 md:grid-cols-2">
              <p>Hãy trọn lộ trình của bạn</p>
              <Link href="#" className="text-base text-[#0071F9] md:text-end">
                Làm bài kiểm tra
              </Link>
            </div>
            <RadioGroup orientation="horizontal">
              <div className="item grid w-full justify-items-center lg:grid-flow-col">
                <div className="my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-[90%]">
                  <Radio value="1" description={`${items.des1}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="w-full text-xl"> {items.brand1}</span>
                    </p>
                  </Radio>
                </div>
                <div className="my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-[90%]">
                  <Radio value="2" description={`${items.des2}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {items.brand2}</span>
                    </p>
                  </Radio>
                </div>
                <div className="my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-[90%]">
                  <Radio value="3" description={`${items.des3}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {items.brand3}</span>
                    </p>
                  </Radio>
                </div>
                <div className="my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-[90%]">
                  <Radio value="4" description={`${items.des4}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {items.brand4}</span>
                    </p>
                  </Radio>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-5">
            <div className="mb-5 text-xl font-bold text-gray-800">
              <p>Chọn tiếp mục tiêu bạn muốn</p>
            </div>
            <RadioGroup orientation="horizontal">
              <div className="item grid w-full justify-items-center lg:grid-cols-3">
                <div className="my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-[90%]">
                  <Radio value="1" description={`${items.des5}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {items.aim1}</span>
                    </p>
                  </Radio>
                </div>
                <div className="my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-[90%]">
                  <Radio value="2" description={`${items.des6}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {`${items.aim2}`}</span>
                    </p>
                  </Radio>
                </div>
                <div className="my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-[90%]">
                  <Radio value="3" description={`${items.des7}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {`${items.aim3}`}</span>
                    </p>
                  </Radio>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="mt-10 blur-md">
            <div className="mb-5 text-xl font-bold text-gray-800">
              <p>Chi tiết lộ trình học dành cho bạn</p>
            </div>
            <div className="mb-5 grid h-auto w-full rounded-xl bg-white p-5 shadow-lg">
              <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                Lộ trình
                <span className="font-bold text-gray-800">
                  {" "}
                  Mất gốc đến 5.0
                </span>
              </p>
              <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                Thời gian hoàn thành
                <span className="font-bold text-gray-800"> 4 tháng</span>
              </p>
              <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                Số lượng khoá học
                <span className="font-bold text-gray-800">
                  3.400.000 ₫
                  <span className="ml-4 inline-block text-sm font-normal text-[#23242D] line-through">
                    4.000.000 ₫
                  </span>
                </span>
              </p>
              <p className="grid grid-cols-2 pt-3 font-medium lg:grid-cols-5">
                Thời gian sở hữu
                <span className="font-bold text-red-600"> 30 tháng</span>
              </p>
            </div>
          </div>
          <div className="absolute bottom-10 left-0 right-0 mx-auto grid items-center justify-items-center">
            <p className="text-center text-lg font-bold">
              Vui lòng chọn trình độ và mục tiêu đầu ra để xem lộ trình
            </p>

            <Button color="primary" className="mt-4 h-14 w-40 bg-[#0071F9]">
              <Link href="#" className="font-bold">
                Chọn trình độ
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
