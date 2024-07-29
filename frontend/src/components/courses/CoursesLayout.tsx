import { Button, Avatar, AvatarGroup } from "@nextui-org/react";
import ButtonModal from "./ButtonModal";
import SliderCourses from "./SliderCourses";
import Image from "next/image";
import SliderReviews from "../sliders/SliderReviews";
import Questions from "./Questions";
import Roadmap from "./Roadmap";
import { ICoursesLayout } from "@/types/interfaces";

export default function CoursesLayout({
  contents,
  sliders,
  brands,
  aims,
  courses,
  benefits,
}: ICoursesLayout) {
  return (
    <>
      {contents.map((content) => (
        <>
          {/* Header */}
          <section>
            <div
              className={`grid h-screen w-full grid-flow-row items-center ${content.bgBanner} justify-items-center px-5 py-10 md:px-10 lg:grid-flow-col`}
              key={content._id}
            >
              <div className="text-center font-bold text-black lg:text-start">
                <h1 className="mb-4 mt-16 text-5xl">{content.text1}</h1>
                <h2 className={`mb-4 text-5xl font-bold ${content.textColor}`}>
                  {content.courseType}
                </h2>
                <h3 className="mb-4 text-5xl">{content.text2}</h3>
                <p className="">{content.text3}</p>
                <p className="">{content.text4}</p>
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
                    <p className="text-sm font-normal">{content.text5}</p>
                  </div>
                </div>
              </div>

              <div className="flex h-full w-[320px] items-center md:w-[490px] xl:w-[700px]">
                <SliderCourses
                  sliders={sliders}
                  contents={[]}
                  brands={[]}
                  aims={[]}
                  courses={[]}
                  benefits={[]}
                />
              </div>
            </div>
          </section>

          {/* Road map */}
          <section id="roadmap">
            <div className="mt-12 h-auto w-full px-5 md:px-10 lg:mt-24">
              <div className="mb-3 grid justify-items-center text-center text-2xl font-bold md:text-4xl">
                <p className="text-gray-800">{content.text6}</p>
                <p className={`${content.textColor} mt-4`}>{content.text7}</p>
                <p className="mt-4 text-base font-normal text-gray-800">
                  {content.text8}
                </p>
              </div>
              <div className="mt-20 h-auto rounded-2xl bg-blue-50 p-5">
                <Roadmap
                  brands={brands}
                  aims={aims}
                  benefits={benefits}
                  courses={courses}
                  contents={[]}
                  sliders={[]}
                />
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
              className={`grid h-auto w-full grid-flow-row items-center justify-items-center bg-[#001731] px-5 py-10 md:px-10 lg:grid-flow-col`}
            >
              <div className="mt-16 w-4/5 text-center text-4xl font-bold text-white md:text-3xl lg:text-start">
                <h1 className="mb-4">
                  {content.text9}{" "}
                  <span className={`${content.textColor}`}>
                    {content.courseType}
                  </span>
                </h1>
                <h2 className="mb-4">{content.text10}</h2>
                <h3 className="my-4 text-base font-normal">{content.text11}</h3>
                <Button className="my-5 h-16 w-full rounded-xl bg-[#0071F9] py-4 text-[20px] font-bold text-white outline-none hover:scale-105">
                  Xây Lộ Trình Cho Tôi
                </Button>
                <ButtonModal />
              </div>

              <div className="w-[320px] md:w-[490px] lg:w-[700px]">
                <Image
                  src={content.image}
                  alt="footer"
                  width={320}
                  height={230}
                  layout="responsive"
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
