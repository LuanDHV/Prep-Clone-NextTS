import Link from "next/link";
import Image from "next/image";
import SliderRewards from "@/components/sliders/SliderRewards";
import SliderTeachers from "@/components/sliders/SliderTeachers";
import SliderReviews from "@/components/sliders/SliderReviews";
import SliderNewspapers from "@/components/sliders/SliderNewspapers";
import SliderPartners from "@/components/sliders/SliderPartners";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <section>
        <div className="container mx-auto h-auto w-full pt-40">
          <div className="flex h-auto flex-col items-center justify-center md:flex-row md:justify-evenly">
            <div className="mb-7 text-center text-3xl font-bold md:text-5xl">
              Nền Tảng
              <br />
              <span className="text-[#1479f4]">Học & Luyện Thi</span>
              <br />
              Thông Minh
            </div>
            <Image
              src="/imgs/homepage/public.png"
              alt="img-public"
              width={320}
              height={355.55}
              objectFit="cover"
              loading="lazy"
            />
            <div className="mt-8 block text-center text-xl font-bold sm:hidden">
              Chọn mục tiêu của bạn:
            </div>
          </div>
        </div>
      </section>

      {/* Target */}
      <section id="target">
        <div className="relative mx-auto mt-16 grid h-auto w-full grid-cols-1 gap-10 px-5 md:grid-cols-4">
          <Link
            href="#"
            className="relative top-5 h-auto w-full rounded-lg bg-white p-10 duration-300 ease-in-out hover:top-0"
          >
            <div className="mx-auto -mt-20 flex h-20 w-20 items-center justify-center rounded-full">
              <Image
                src="/imgs/homepage/school.svg"
                alt="ic-school"
                width={80}
                height={80}
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-8 text-center text-2xl font-bold">IELTS</h3>
            <p className="mt-4 text-center font-medium text-[#6b7280]">
              Lộ trình hiệu quả
            </p>
          </Link>
          <Link
            href="#"
            className="relative top-5 h-auto w-full rounded-lg bg-white p-10 duration-300 ease-in-out hover:top-0"
          >
            <div className="mx-auto -mt-20 flex h-20 w-20 items-center justify-center rounded-full">
              <Image
                src="/imgs/homepage/graduation.svg"
                alt="ic-graduation"
                width={80}
                height={80}
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <h3 className="mt-8 text-center text-2xl font-bold">TOEIC</h3>
            <p className="mt-4 text-center font-medium text-[#6b7280]">
              Lộ trình luyện thi cấp tốc
            </p>
          </Link>
          <Link
            href="#"
            className="relative top-5 h-auto w-full rounded-lg bg-white p-10 duration-300 ease-in-out hover:top-0"
          >
            <div className="mx-auto -mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#DCFFE5]">
              <Image
                src="/imgs/homepage/note.svg"
                alt="ic-note"
                width={35}
                height={37.5}
                objectFit="cover"
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <h3 className="mt-8 text-center text-2xl font-bold">HSK</h3>
            <p className="mt-4 text-center font-medium text-[#6b7280]">
              Lộ trình học và ôn thi hiệu quả
            </p>
          </Link>
          <Link
            href="#"
            className="relative top-5 h-auto w-full rounded-lg bg-white p-10 duration-300 ease-in-out hover:top-0"
          >
            <div className="mx-auto -mt-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#E6EDFF]">
              <Image
                src="/imgs/homepage/talk.svg"
                alt="ic-talk"
                width={40}
                height={40}
                objectFit="cover"
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <h3 className="mt-8 text-center text-2xl font-bold">
              PrepTalk English
            </h3>
            <p className="mt-4 text-center font-medium text-[#6b7280]">
              Luyện giao tiếp tiếng anh dễ dàng
            </p>
          </Link>
        </div>
      </section>

      {/* Slider Rewards */}
      <section>
        <div className="container mx-auto mt-14 h-auto w-full bg-white px-5 py-10">
          <Image
            src="/imgs/homepage/award.svg"
            alt="ic-award"
            width={128}
            height={66}
            objectFit="cover"
            loading="lazy"
            className="mx-auto"
          />
          <h2 className="mt-[18px] text-center text-2xl font-bold md:text-3xl">
            <span className="text-blue-600">Giải thưởng</span> đạt được
          </h2>
          <div className="mt-[65px]">
            <SliderRewards />
          </div>
        </div>
      </section>

      {/* About */}
      <section>
        <div className="container mx-auto mt-14 h-auto w-full">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Những gì chỉ có tại <span className="text-blue-600">Prep.vn</span>
          </h2>
          <div className="relative mt-10 grid h-auto grid-cols-1 gap-10 px-5 md:grid-cols-3">
            <div className="relative mx-auto h-auto w-full rounded-xl p-10 shadow-2xl">
              <div className="flex flex-row items-center justify-center md:flex-col lg:items-start">
                <Image
                  src="/imgs/homepage/slide.svg"
                  alt="ic-slide"
                  width={80}
                  height={80}
                  objectFit="cover"
                  loading="lazy"
                />
                <h4 className="ml-2 text-lg font-bold md:ml-0 md:mt-8">
                  Video bài giảng chất lượng cao
                </h4>
              </div>
              <p className="mt-4 font-medium text-gray-500 md:mt-8">
                Bởi đội ngũ giáo viên xuất sắc và tận tâm IELTS 8.0 - 8.5,cựu du
                học sinh, tốt nghiệp tại các trường Đại học danh tiếng
              </p>
            </div>
            <div className="mx-auto h-auto w-full rounded-xl p-10 shadow-2xl">
              <div className="flex flex-row items-center justify-center md:flex-col lg:items-start">
                <Image
                  src="/imgs/homepage/check_note.svg"
                  alt="ic-check_note"
                  width={80}
                  height={80}
                  objectFit="cover"
                  loading="lazy"
                />
                <h4 className="ml-2 text-lg font-bold md:ml-0 md:mt-8">
                  Đầy đủ bài mẫu, bài tập, mini test, progress test như thi thật
                </h4>
              </div>
              <p className="mt-4 font-medium text-gray-500 md:mt-8">
                Bộ tài liệu đã giúp 600 học viên đã đạt IELTS 7.0-8.5 tính tới
                tháng 5/2021
              </p>
            </div>
            <div className="relative mx-auto h-auto w-full rounded-xl p-10 shadow-2xl">
              <div className="flex flex-row items-center justify-center md:flex-col lg:items-start">
                <Image
                  src="/imgs/homepage/copy.svg"
                  alt="ic-copy"
                  width={80}
                  height={80}
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <h4 className="ml-2 text-lg font-bold md:ml-0 md:mt-8">
                Bài Speaking-Writing được chấm chất lượng hơn cả offline
              </h4>
              <p className="mt-4 font-medium text-gray-500 md:mt-8">
                Giáo viên chấm bài chính xác từng chữ với Writing, từng giây với
                Speaking, kết hợp bài kiểm tra phát âm bằng AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course */}
      <section>
        <div className="container mx-auto w-full px-5 py-24 md:grid md:grid-cols-2 md:items-center">
          <Image
            src="/imgs/homepage/public-2.png"
            alt="ic-slide"
            width={452}
            height={449}
            objectFit="cover"
            loading="lazy"
            className="mx-auto"
          />
          <div className="mx-auto w-full">
            <h2 className="mt-10 text-center text-2xl font-bold md:text-start md:text-3xl">
              Bắt đầu
              <span className="text-blue-500"> tìm kiếm khoá học</span>
              <span className="lg:block"> dễ dàng</span>
              <span className="hidden font-normal md:mt-3 md:block md:text-sm">
                Các khoá học của Prep được biên soạn và trình bày một cách khoa
                học nhất
              </span>
            </h2>
            <div className="mt-3 flex w-full flex-col items-center gap-5 md:grid md:grid-cols-2 md:text-center lg:grid-cols-3 xl:grid-cols-4">
              <Link
                href="#"
                className="flex h-[48px] w-full items-center justify-center rounded-3xl bg-[#1479f4] font-bold text-white duration-300 ease-in-out hover:scale-105"
              >
                Khóa học IELTS
              </Link>
              <Link
                href="#"
                className="flex h-[48px] w-full items-center justify-center rounded-3xl bg-[#1479f4] font-bold text-white duration-300 ease-in-out hover:scale-105"
              >
                Khóa học TOEIC
              </Link>
              <Link
                href="#"
                className="flex h-[48px] w-full items-center justify-center rounded-3xl bg-[#1479f4] font-bold text-white duration-300 ease-in-out hover:scale-105"
              >
                Khóa học HSK
              </Link>
              <Link
                href="#"
                className="flex h-[48px] w-full items-center justify-center rounded-3xl bg-[#1479f4] font-bold text-white duration-300 ease-in-out hover:scale-105"
              >
                PrepTalk English
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Teachers */}
      <section>
        <div className="relative">
          <div className="container mx-auto h-auto bg-white px-5 py-24">
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              100% Giáo viên trên Prep đạt <br />
              <span className="text-blue-600">IELTS 8.0-8.5</span>
            </h2>

            <p className="text-center text-gray-400">
              Cựu du học sinh hoặc tốt nghiệp từ ĐH danh tiếng
            </p>
            <div className="mx-auto mt-8 flex h-auto w-full justify-center">
              <SliderTeachers />
            </div>
            <ul className="mt-4 h-auto w-full px-4"></ul>
            <div className="md:mt-20 md:flex md:justify-between lg:justify-evenly">
              <div className="mx-auto mt-14 h-auto text-center md:mx-0 md:mt-0">
                <h2 className="text-2xl font-bold md:text-start md:text-3xl">
                  Bảng vàng <br />
                  <span className="text-[#ff9f00]">thành tích học viên </span>
                </h2>
                <p className="text-gray-400">
                  Chương trình học trên Prep đã giúp
                </p>
                <div className="mt-10 flex justify-around">
                  <div className="text-start">
                    <span className="text-2xl font-bold text-[#2dca8c] md:text-3xl">
                      620+
                    </span>
                    <p className="font-medium text-gray-500">
                      Học viên đạt <br />
                      IELST 7.0 trở lên
                    </p>
                  </div>
                  <div className="text-start">
                    <span className="text-2xl font-bold text-[#ff9f00] md:text-3xl">
                      90+
                    </span>
                    <p className="font-medium text-gray-500">
                      Học viên đạt <br />
                      8.0 - 8.5 trở lên
                    </p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="mx-2 mt-10 flex h-[55px] w-full items-center justify-center rounded-md bg-[#fff0d7] duration-300 ease-in-out hover:scale-105"
                >
                  <Image
                    src="/imgs/homepage/ic-star.svg"
                    alt="ic-star"
                    width={40}
                    height={40}
                    objectFit="cover"
                    loading="lazy"
                  />
                  <span className="ml-2 font-semibold text-[#ff9f00]">
                    Danh sách học viên điểm cao
                  </span>
                </Link>
              </div>
              <div className="mx-auto mt-10 md:mx-0 md:mt-0">
                <Image
                  src="/imgs/homepage/public-3.png"
                  alt="public-3"
                  width={575}
                  height={560}
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="circle">
            <Image
              src="/imgs/circles/circle-1.svg"
              alt="circles"
              width={20}
              height={20}
              objectFit="cover"
              loading="lazy"
              className="absolute left-1/2 top-2"
            />
            <Image
              src="/imgs/circles/circle-1.svg"
              alt="circles"
              width={20}
              height={20}
              objectFit="cover"
              loading="lazy"
              className="absolute bottom-36 left-16"
            />
            <Image
              src="/imgs/circles/circle-2.svg"
              alt="circles"
              width={28}
              height={28}
              objectFit="cover"
              loading="lazy"
              className="absolute left-20 top-48 hidden md:block"
            />
            <Image
              src="/imgs/circles/circle-2.svg"
              alt="circles"
              width={28}
              height={28}
              objectFit="cover"
              loading="lazy"
              className="absolute right-32 top-2 hidden md:block"
            />
            <Image
              src="/imgs/circles/circle-2.svg"
              alt="circles"
              width={28}
              height={28}
              objectFit="cover"
              loading="lazy"
              className="absolute right-16 top-32 hidden md:block"
            />
            <Image
              src="/imgs/circles/circle-3.svg"
              alt="circles"
              width={9}
              height={9}
              objectFit="cover"
              loading="lazy"
              className="absolute bottom-20 left-12"
            />
            <Image
              src="/imgs/circles/circle-4.svg"
              alt="circles"
              width={12}
              height={12}
              objectFit="cover"
              loading="lazy"
              className="absolute bottom-16 left-52"
            />
            <Image
              src="/imgs/circles/circle-5.svg"
              alt="circles"
              width={33}
              height={33}
              objectFit="cover"
              loading="lazy"
              className="absolute bottom-20 left-1/2 hidden md:block"
            />
            <Image
              src="/imgs/circles/circle-5.svg"
              alt="circles"
              width={33}
              height={33}
              objectFit="cover"
              loading="lazy"
              className="absolute bottom-2 right-60"
            />
            <Image
              src="/imgs/circles/circle-6.svg"
              alt="circles"
              width={9}
              height={9}
              objectFit="cover"
              loading="lazy"
              className="absolute bottom-0 right-32"
            />
          </div>
        </div>
      </section>

      {/* Slider Reviews */}
      <section>
        <div className="container mx-auto w-full px-5 py-24">
          <h2 className="mb-24 text-center text-3xl font-bold">
            <span className="text-[#1479f4]">Học viên nói gì</span> về Prep.vn
          </h2>
          <div className="">
            <SliderReviews />
          </div>
        </div>
      </section>

      {/* Slider Newspapers */}
      <section>
        <div className="container mx-auto h-auto w-full px-5 pb-24">
          <h2 className="mb-5 text-center text-2xl font-bold">
            Báo chí nói gì về<span className="text-[#1479f4]"> Prep.vn</span>
          </h2>
          <div className="">
            <SliderNewspapers />
          </div>
        </div>
      </section>

      {/* Slider Partners */}
      <section>
        <div className="container mx-auto h-auto w-full px-5 pb-24">
          <h2 className="mb-5 text-center text-2xl font-bold">
            Chúng tôi tự hào là đối tác của
          </h2>
          <div className="">
            <SliderPartners />
          </div>
        </div>
      </section>

      {/* Step  */}
      <section>
        <div className="container relative mx-auto h-auto w-full bg-white px-5 py-24">
          <h2 className="text-center text-2xl font-bold md:mb-10 md:text-3xl">
            Bắt đầu<span className="text-[#1479f4]"> khoá học dễ dàng</span> với
            3 bước
          </h2>
          <div className="flex flex-col justify-center md:flex-row">
            <div className="mt-16 md:mt-0">
              <Image
                src="/imgs/homepage/step-1.png"
                alt="step-1"
                width={80}
                height={80}
                objectFit="cover"
                loading="lazy"
                className="mx-auto rounded-md bg-blue-600 p-4"
              />
              <p className="relative z-10 mt-4 text-center font-semibold">
                Chọn chương trình <br /> học bạn mong muốn
              </p>
              <span className="relative z-0 -mt-14 block text-center text-9xl font-bold text-gray-200">
                1
              </span>
            </div>
            <div className="hidden pt-10 md:block">
              <Image
                src="/imgs/homepage/step-line-1.png"
                alt="step-line-1"
                width={225}
                height={90}
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div className="pt-16">
              <Image
                src="/imgs/homepage/step-2.png"
                alt="step-2"
                width={80}
                height={80}
                objectFit="cover"
                loading="lazy"
                className="mx-auto rounded-md bg-blue-600 p-4"
              />
              <p className="relative z-10 mt-4 text-center font-semibold">
                Chọn chương trình <br /> học bạn mong muốn
              </p>
              <span className="relative z-0 -mt-14 block text-center text-9xl font-bold text-gray-200">
                2
              </span>
            </div>
            <div className="hidden pt-10 md:block">
              <Image
                src="/imgs/homepage/step-line-2.png"
                alt="step-line-2"
                width={250}
                height={200}
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <div className="pt-16 md:pt-40">
              <Image
                src="/imgs/homepage/step-3.png"
                alt="step-3"
                width={80}
                height={80}
                objectFit="cover"
                loading="lazy"
                className="mx-auto rounded-md bg-blue-600 p-4"
              />
              <p className="relative z-10 mt-4 text-center font-semibold">
                Vào màn &#34;Khoá học của tôi&#34; <br /> để bắt đầu học ngay
              </p>
              <span className="relative z-0 -mt-14 block text-center text-9xl font-bold text-gray-200">
                3
              </span>
            </div>
            <div className="circle">
              <Image
                src="/imgs/circles/circle-1.svg"
                alt="circles"
                width={20}
                height={20}
                objectFit="cover"
                loading="lazy"
                className="absolute left-1/2 top-2"
              />
              <Image
                src="/imgs/circles/circle-1.svg"
                alt="circles"
                width={20}
                height={20}
                objectFit="cover"
                loading="lazy"
                className="absolute bottom-36 left-16"
              />
              <Image
                src="/imgs/circles/circle-2.svg"
                alt="circles"
                width={28}
                height={28}
                objectFit="cover"
                loading="lazy"
                className="absolute left-20 top-48 hidden md:block"
              />
              <Image
                src="/imgs/circles/circle-2.svg"
                alt="circles"
                width={28}
                height={28}
                objectFit="cover"
                loading="lazy"
                className="absolute right-32 top-2 hidden md:block"
              />
              <Image
                src="/imgs/circles/circle-2.svg"
                alt="circles"
                width={28}
                height={28}
                objectFit="cover"
                loading="lazy"
                className="absolute right-16 top-32 hidden md:block"
              />
              <Image
                src="/imgs/circles/circle-3.svg"
                alt="circles"
                width={9}
                height={9}
                objectFit="cover"
                loading="lazy"
                className="absolute bottom-20 left-12"
              />
              <Image
                src="/imgs/circles/circle-4.svg"
                alt="circles"
                width={12}
                height={12}
                objectFit="cover"
                loading="lazy"
                className="absolute bottom-16 left-52"
              />
              <Image
                src="/imgs/circles/circle-5.svg"
                alt="circles"
                width={33}
                height={33}
                objectFit="cover"
                loading="lazy"
                className="absolute bottom-20 left-1/2 hidden md:block"
              />
              <Image
                src="/imgs/circles/circle-5.svg"
                alt="circles"
                width={33}
                height={33}
                objectFit="cover"
                loading="lazy"
                className="absolute bottom-2 right-60"
              />
              <Image
                src="/imgs/circles/circle-6.svg"
                alt="circles"
                width={9}
                height={9}
                objectFit="cover"
                loading="lazy"
                className="absolute bottom-0 right-32"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Button Target */}
      <section>
        <div className="mx-24 py-10 duration-300 ease-in-out hover:scale-105 md:mx-auto md:w-1/5">
          <Link href="#target">
            <div className="rounded-lg bg-[#1479f4] p-3 text-center">
              <span className="font-bold text-white">
                Chọn ngay mục tiêu của bạn
              </span>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
