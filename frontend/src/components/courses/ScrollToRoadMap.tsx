"use client";
import { Button } from "@nextui-org/react";

export default function ScrollToRoadMap() {
  const handleScrollToRoadmap = () => {
    const element = document.getElementById("roadmap");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Button
        className="my-5 h-16 w-full rounded-xl bg-[#0071F9] py-4 text-[20px] font-bold text-white outline-none hover:scale-105"
        onClick={handleScrollToRoadmap}
      >
        Xây Lộ Trình Cho Tôi
      </Button>
    </>
  );
}
