import { Button, Avatar, AvatarGroup } from "@nextui-org/react";
import ButtonModal from "./ButtonModal";
import SliderCourses from "./SliderCourses";
import Image from "next/image";
import SliderReviews from "../sliders/SliderReviews";
import Questions from "./Questions";
import Roadmap from "./Roadmap";

export default function CoursesLayout({
  contents,
  sliders,
  brand,
  aim,
  benefit,
}) {
  return (
    <>
      {contents.map((items, index) => (
        <>
          {/* Header */}
          <section>
            <div
              className={`grid h-auto w-full grid-flow-row items-center ${items.bg1} justify-items-center px-5 py-10 md:px-10 lg:grid-flow-col`}
              key={index}
            >
              <div className="text-center font-bold text-black lg:text-start">
                <h1 className="mb-4 mt-16 text-5xl">{items.text1}</h1>
                <h2 className={`mb-4 text-5xl font-bold ${items.colorText}`}>
                  {items.textMain}
                </h2>
                <h3 className="mb-4 text-5xl">{items.text3}</h3>
                <p className="">{items.text4}</p>
                <p className="">{items.text5}</p>
                <Button className="my-5 h-16 w-full rounded-xl bg-[#0071F9] py-4 text-[20px] font-bold text-white outline-none hover:scale-105">
                  Xây Lộ Trình Cho Tôi
                </Button>
                <ButtonModal />
                <div className="my-5 grid grid-cols-2 justify-items-center">
                  <AvatarGroup isBordered max={4} total={99}>
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
                  </AvatarGroup>
                  <div className="pl-4">
                    <p className="text-4xl font-extrabold">700+</p>
                    <p className="text-sm font-normal">{items.text6}</p>
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[320px] items-center md:w-[490px] xl:w-[700px]">
                <SliderCourses sliders={sliders} />
              </div>
            </div>
          </section>

          {/* Road map */}
          <section id="roadmap">
            <div className="mt-12 h-auto w-full px-5 md:px-10 lg:mt-24">
              <div className="mb-3 grid justify-items-center text-center text-2xl font-bold md:text-4xl">
                <p className="text-gray-800">{items.text7}</p>
                <p className={`${items.colorText} mt-4`}>{items.text8}</p>
                <p className="mt-4 text-base font-normal text-gray-800">
                  {items.text9}
                </p>
              </div>
              <div className="mt-20 h-auto rounded-2xl bg-blue-50 p-5">
                <Roadmap brand={brand} aim={aim} benefit={benefit} />
              </div>
            </div>
          </section>

          {/* Slider Reviews */}
          <section>
            <div className="mx-auto w-full px-5 py-24 md:px-10">
              <h2 className="mb-24 text-center text-3xl font-bold">
                <span className="text-[#1479f4]">Học viên nói gì</span> về
                Prep.vn
              </h2>
              <div className="">
                <SliderReviews />
              </div>
            </div>
          </section>

          {/* Quesion */}
          <section>
            <div className="px-5 pb-12 md:px-10">
              <Questions />
            </div>
          </section>

          {/* Footer */}
          <section>
            <div
              className={`grid h-auto w-full grid-flow-row items-center ${items.bgFooter} justify-items-center px-5 py-10 md:px-10 lg:grid-flow-col`}
              key={index}
            >
              <div className="mt-16 w-4/5 text-center text-4xl font-bold text-white md:text-3xl lg:text-start">
                <h1 className="mb-4">
                  {items.text10}{" "}
                  <span className={`${items.colorText}`}>{items.textMain}</span>
                </h1>
                <h2 className="mb-4">{items.text11}</h2>
                <h3 className="my-4 text-base font-normal">{items.text12}</h3>
                <Button className="my-5 h-16 w-full rounded-xl bg-[#0071F9] py-4 text-[20px] font-bold text-white outline-none hover:scale-105">
                  Xây Lộ Trình Cho Tôi
                </Button>
                <ButtonModal />
              </div>

              <div className="w-[320px] md:w-[490px] lg:w-[700px]">
                <Image
                  src={items.img}
                  alt="footer"
                  width={320}
                  height={230}
                  layout="responsive"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
}
