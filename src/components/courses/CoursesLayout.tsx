import Image from "next/image";
import { Button, Avatar, AvatarGroup } from "@nextui-org/react";
import ButtonModal from "./ButtonModal";
import SliderCourses from "../sliders/SliderCourses";

export default function CoursesLayout() {
  const DataIelts = [
    {
      text1: "Lộ Trình Học",
      text2: "IELTS",
      text3: "Toàn Diện!",
      text4: "Prep đã giúp hơn 700 học viên đạt IELTS 7.0+",
      text5: "Hãy để Prep giúp bạn!",
    },
  ];
  return (
    <>
      {DataIelts.map((items, index) => (
        <div
          className="grid h-auto w-full grid-flow-row justify-items-center bg-[#E5EFFF] px-5 py-10 md:h-screen md:grid-flow-col"
          key={index}
        >
          <div className="text-center">
            <h1 className="mb-4 mt-16 text-5xl font-bold text-black">
              {items.text1}
            </h1>
            <h2 className="mb-4 text-5xl font-bold text-[#0071F9]">
              {items.text2}
            </h2>
            <h3 className="mb-4 text-5xl font-bold text-black">
              {items.text3}
            </h3>
            <p className="text-16 font-bold text-black">{items.text4}</p>
            <p className="text-16 font-bold text-black">{items.text5}</p>
            <Button className="my-5 h-16 w-full rounded-xl bg-[#0071F9] py-4 text-[20px] font-bold text-white outline-none hover:scale-105">
              Xây Lộ Trình Cho Tôi
            </Button>
            <ButtonModal />
            <div className="my-5 grid grid-cols-2">
              <AvatarGroup isBordered max={3} total={99}>
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
              <div className="pl-4 text-start">
                <p className="text-4xl font-extrabold text-black">700+</p>
                <p className="text-sm text-black">Học viên đạt ielts 7.0+</p>
              </div>
            </div>
          </div>
          <div className="w-[450px] md:w-[800px]">
            <SliderCourses />
          </div>
        </div>
      ))}
    </>
  );
}
