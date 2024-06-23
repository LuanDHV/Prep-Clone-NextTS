import { Button, Avatar, AvatarGroup } from "@nextui-org/react";
import ButtonModal from "./ButtonModal";
import SliderCourses from "./SliderCourses";
import Image from "next/image";
import SliderReviews from "../sliders/SliderReviews";
import Questions from "./Questions";

export default function CoursesLayout() {
  const ContentIelts = [
    {
      bg1: "bg-[#E5EFFF]",
      text1: "Lộ Trình Học",
      text2: "IELTS",
      text3: "Toàn Diện!",
      text4: "Prep đã giúp hơn 700 học viên đạt IELTS 7.0+",
      text5: "Hãy để Prep giúp bạn!",
      text6: "Học viên đạt ielts 7.0+",
      text7: "Xây Lộ Trình Học IELTS",
      text8: "Cá Nhân Hóa",
      text9: "Lộ trình học chi tiết, phù hợp và dành riêng cho bạn",
      text10: "Tự Học IELTS Mọi Lúc Mọi Nơi",
      text11: "Dễ Dàng - Hiệu Quả",
      text12:
        "Study Plan chi tiết, Learning Profile cá nhân hóa cùng sự hỗ trợ sát sao từ Prep bạn sẽ chủ động trong việc luyện thi online, nhưng không một mình !",
      bg2: "bg-[#001731]",
      img: "/imgs/courses/ielts/footer-ielts.png",
    },
  ];
  return (
    <>
      {ContentIelts.map((items, index) => (
        <>
          <section>
            <div
              className={`grid h-auto w-full grid-flow-row items-center ${items.bg1} justify-items-center px-10 py-10 lg:grid-flow-col`}
              key={index}
            >
              <div className="text-center font-bold text-black lg:text-start">
                <h1 className="mb-4 mt-16 text-5xl">{items.text1}</h1>
                <h2 className="mb-4 text-5xl font-bold text-[#0071F9]">
                  {items.text2}
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
                <SliderCourses />
              </div>
            </div>
          </section>

          <section>
            <div className="mt-12 h-auto w-full px-10 lg:mt-24">
              <div className="mb-3 grid justify-items-center text-center text-2xl font-bold md:text-4xl">
                <p className="text-gray-800">{items.text7}</p>
                <p className="text-[#0071F9]">{items.text8}</p>
                <p className="text-base font-normal text-gray-800">
                  {items.text9}
                </p>
              </div>
            </div>
          </section>

          {/* Slider Reviews */}
          <section>
            <div className="mx-auto w-full px-10 py-24 md:px-20">
              <h2 className="mb-24 text-center text-3xl font-bold">
                <span className="text-[#1479f4]">Học viên nói gì</span> về
                Prep.vn
              </h2>
              <div className="">
                <SliderReviews />
              </div>
            </div>
          </section>

          <section>
            <div className="px-10 py-12 md:px-20">
              <Questions />
            </div>
          </section>

          <section>
            <div
              className={`grid h-auto w-full grid-flow-row items-center ${items.bg2} justify-items-center px-5 py-10 lg:grid-flow-col`}
              key={index}
            >
              <div className="mt-16 w-4/5 text-center text-4xl font-bold text-white md:text-3xl lg:text-start">
                <h1 className="mb-4">{items.text10}</h1>
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
