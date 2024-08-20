"use client";
import { Button } from "@nextui-org/react";

export default function ScrollToTarget() {
  const handleScrollToTarget = () => {
    const element = document.getElementById("target");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex w-full justify-center py-10">
        <Button
          onClick={handleScrollToTarget}
          className="rounded-lg bg-[#1479f4] py-6 text-center font-bold text-white duration-300 ease-in-out hover:scale-105"
        >
          Chọn ngay mục tiêu của bạn
        </Button>
      </div>
    </>
  );
}
