"use client";
import { RadioGroup, Radio, Button } from "@nextui-org/react";
import Link from "next/link";

export default function Roadmap({ brand, aim }) {
  return (
    <>
      <div className="relative">
        <div className="mt-5">
          <div className="mb-5 grid text-xl font-bold text-gray-800 md:grid-cols-2">
            <p>Hãy trọn lộ trình của bạn</p>
            <Link href="#" className="text-base text-[#0071F9] md:text-end">
              Làm bài kiểm tra
            </Link>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col">
            {brand.map((items, index) => (
              <RadioGroup orientation="horizontal" key={index}>
                <div className="mx-auto my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-4/5">
                  <Radio value="1" description={`${items.description}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="w-full text-xl"> {items.brand}</span>
                    </p>
                  </Radio>
                </div>
              </RadioGroup>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-5 text-xl font-bold text-gray-800">
            <p>Chọn tiếp mục tiêu bạn muốn</p>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col">
            {aim.map((items, index) => (
              <RadioGroup orientation="horizontal" key={index}>
                <div className="mx-auto my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-4/5">
                  <Radio value="1" description={`${items.description}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {items.aim}</span>
                    </p>
                  </Radio>
                </div>
              </RadioGroup>
            ))}
          </div>
        </div>
        <div className="mt-10 blur-md">
          <div className="mb-5 text-xl font-bold text-gray-800">
            <p>Chi tiết lộ trình học dành cho bạn</p>
          </div>
          <div className="mb-5 grid h-auto w-full rounded-xl bg-white p-5 shadow-lg">
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Lộ trình
              <span className="font-bold text-gray-800"> Mất gốc đến 5.0</span>
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
    </>
  );
}
