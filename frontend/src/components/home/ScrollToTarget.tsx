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
      <Button
        onClick={handleScrollToTarget}
        className="rounded-lg bg-[#1479f4] p-3 text-center font-bold text-white"
      >
        Chọn ngay mục tiêu của bạn
      </Button>
    </>
  );
}
