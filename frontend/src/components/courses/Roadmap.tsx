"use client";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
  Input,
  Checkbox,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import ButtonModal from "./ButtonModal";
import { ICourses, ICoursesLayout, IRoadMapDetails } from "@/types/interfaces";

export default function Roadmap({
  brands,
  aims,
  benefits,
  courses,
}: ICoursesLayout) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [couponCode, setCouponCode] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedAim, setSelectedAim] = useState("");
  const [roadMapName, setRoadMapName] = useState("");
  const [roadMapDetails, setRoadMapDetails] = useState({
    duration: "",
    courses: "",
    price: "",
    discount: "",
    period: "",
  });
  const [roadMapCourses, setRoadMapCourses] = useState<ICourses[]>([]);

  const handleInputChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    console.log("Áp dụng mã coupon:", couponCode);
    setCouponCode("");
  };

  // Handle brand and aim changes
  useEffect(() => {
    handleRoadMap(selectedBrand, selectedAim);
  }, [selectedBrand, selectedAim]);

  const handleBrandChange = (courseType: string, brand: string) => {
    const selectedBrand = `${courseType} ${brand}`;
    setSelectedBrand(selectedBrand);
    console.log("Brand:", selectedBrand);
  };

  const handleAimChange = (courseType: string, aim: string) => {
    const selectedAim = `${courseType} ${aim}`;
    setSelectedAim(selectedAim);
    console.log("Aim:", selectedAim);
  };

  const handleRoadMap = (selectedBrand: string, selectedAim: string) => {
    let roadMapName: string = "";
    let roadMapDetails: IRoadMapDetails = {
      duration: "",
      courses: "",
      price: "",
      discount: "",
      period: "",
    };
    let roadMapCourses: ICourses[] = [];

    if (selectedBrand.startsWith("IELTS")) {
      switch (selectedBrand) {
        case "IELTS 1.0 - 3.5":
          if (selectedAim === "IELTS Cơ bản") {
            roadMapName = "Mất Gốc đến 5.0";
            roadMapDetails = {
              duration: "4 tháng",
              courses: "2 khóa",
              price: "3.400.000 đ",
              discount: "4.000.000 đ",
              period: "30 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng IELTS", "IELTS Cơ bản"].includes(course.name),
            );
          } else if (selectedAim === "IELTS Trung cấp") {
            roadMapName = "Mất Gốc đến 6.0";
            roadMapDetails = {
              duration: "8 tháng",
              courses: "3 khóa",
              price: "6.000.000 đ",
              discount: "7.500.000 đ",
              period: "45 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng IELTS", "IELTS Cơ bản", "IELTS Trung Cấp"].includes(
                course.name,
              ),
            );
          } else if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Mất Gốc đến 6.5+";
            roadMapDetails = {
              duration: "13 tháng",
              courses: "4 khóa",
              price: "9.000.000 đ",
              discount: "12.000.000 đ",
              period: "60 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              [
                "Nền Tảng IELTS",
                "IELTS Cơ bản",
                "IELTS Trung Cấp",
                "IELTS Chuyên Sâu",
              ].includes(course.name),
            );
          }
          break;
        case "IELTS 4.0 - 5.0":
          if (selectedAim === "IELTS Cơ bản") {
            roadMapName = "Từ 4.0 đến 5.0";
            roadMapDetails = {
              duration: "3 tháng",
              courses: "1 khóa",
              price: "2.250.000 đ",
              discount: "3.000.000 đ",
              period: "15 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng IELTS", ,].includes(course.name),
            );
          } else if (selectedAim === "IELTS Trung cấp") {
            roadMapName = "Từ 4.0 đến 6.0";
            roadMapDetails = {
              duration: "7 tháng",
              courses: "2 khóa",
              price: "5.525.000 đ",
              discount: "6.500.000 đ",
              period: "30 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["IELTS Cơ bản", "IELTS Trung Cấp"].includes(course.name),
            );
          } else if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Từ 4.0 đến 6.5+";
            roadMapDetails = {
              duration: "12 tháng",
              courses: "3 khóa",
              price: "8.800.000đ",
              discount: "11.000.000 đ",
              period: "45 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["IELTS Cơ bản", "IELTS Trung Cấp", "IELTS Chuyên Sâu"].includes(
                course.name,
              ),
            );
          }
          break;
        case "IELTS 5.0 - 5.5":
          if (selectedAim === "IELTS Trung cấp") {
            roadMapName = "Từ 5.0 đến 6.0";
            roadMapDetails = {
              duration: "4 tháng",
              courses: "1 khóa",
              price: "2.625.000 đ",
              discount: "3.500.000đ",
              period: "15 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["IELTS Trung Cấp"].includes(course.name),
            );
          }
          if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Từ 5.0 đến 6.5+";
            roadMapDetails = {
              duration: "9 tháng",
              courses: "2 khóa",
              price: "6.800.000 đ",
              discount: "8.000.000 đ",
              period: "30 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["IELTS Trung Cấp", "IELTS Chuyên Sâu"].includes(course.name),
            );
          } else {
            console.error(
              "Mục tiêu đầu ra không thể thấp hơn Trình độ hiện tại",
            );
          }
          break;
        case "IELTS 6.0 - 6.5":
          if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Từ 6.0 đến 6.5+";
            roadMapDetails = {
              duration: "5 tháng",
              courses: "1 khóa",
              price: "3.375.000 đ",
              discount: "4.500.000đ",
              period: "15 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["IELTS Chuyên Sâu"].includes(course.name),
            );
          } else {
            console.error(
              "Mục tiêu đầu ra không thể thấp hơn Trình độ hiện tại",
            );
          }

          break;
        default:
          break;
      }
    } else if (selectedBrand.startsWith("TOEIC")) {
      switch (selectedBrand) {
        case "TOEIC 1 - 295":
          if (selectedAim === "TOEIC 300") {
            roadMapName = "Mất Gốc đến 300";
            roadMapDetails = {
              duration: "2 tháng",
              courses: "1 khóa",
              price: "500.000 đ",
              discount: "750.000 đ",
              period: "9 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng TOEIC"].includes(course.name),
            );
          } else if (selectedAim === "TOEIC 600") {
            roadMapName = "Mất Gốc đến 600";
            roadMapDetails = {
              duration: "5 tháng",
              courses: "2 khóa",
              price: "2.000.000 đ",
              discount: "2.500.000 đ",
              period: "18 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng TOEIC", "TOEIC Trung Cấp"].includes(course.name),
            );
          } else if (selectedAim === "TOEIC 800") {
            roadMapName = "Mất Gốc đến 800";
            roadMapDetails = {
              duration: "27 tháng",
              courses: "3 khóa",
              price: "4.000.000 đ",
              discount: "4.750.000 đ",
              period: "27 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              [
                "Nền Tảng TOEIC",
                "TOEIC Trung Cấp",
                "TOEIC Chuyên Sâu",
              ].includes(course.name),
            );
          }
          break;
        case "TOEIC 300 - 595":
          if (selectedAim === "TOEIC 600") {
            roadMapName = "Có Nền Tảng đến 600";
            roadMapDetails = {
              duration: "3 tháng",
              courses: "1 khóa",
              price: "1.500.000 đ",
              discount: "1.750.000 đ",
              period: "9 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["TOEIC Trung Cấp"].includes(course.name),
            );
          } else if (selectedAim === "TOEIC 800") {
            roadMapName = "Có Nền Tảng đến 800";
            roadMapDetails = {
              duration: "5 tháng",
              courses: "2 khóa",
              price: "3.500.000 đ",
              discount: "4.000.000 đ",
              period: "18 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["TOEIC Trung Cấp", "TOEIC Chuyên Sâu"].includes(course.name),
            );
          } else {
            console.error(
              "Mục tiêu đầu ra không thể thấp hơn Trình độ hiện tại",
            );
          }
          break;
        case "TOEIC 600 - 650":
          if (selectedAim === "TOEIC 800") {
            roadMapName = "TOEIC Nền Tảng Tốt đến 800";
            roadMapDetails = {
              duration: "2 tháng",
              courses: "1 khóa",
              price: "2.000.000 đ",
              discount: "2.250.000 đ",
              period: "9 tháng",
            };
            roadMapCourses = courses.filter((course) =>
              ["TOEIC Chuyên Sâu"].includes(course.name),
            );
          } else {
            console.error(
              "Mục tiêu đầu ra không thể thấp hơn Trình độ hiện tại",
            );
          }
          break;
        default:
          break;
      }
    }

    // Update  state
    setRoadMapName(roadMapName);
    setRoadMapDetails(roadMapDetails);
    setRoadMapCourses(roadMapCourses);

    // Log the results for debugging
    console.log("Road Map Name:", roadMapName);
    console.log("Road Map Details:", roadMapDetails);
    console.log("Road Map Courses:", roadMapCourses);
  };

  return (
    <>
      <div className="relative">
        {/* Select Brand */}
        <div className="mt-5">
          <div className="mb-5 grid text-xl font-bold text-gray-800 md:grid-cols-2">
            <p>Hãy chọn trình độ hiện tại của bạn</p>
            <Link href="#" className="text-base text-[#0071F9] md:text-end">
              Làm bài kiểm tra
            </Link>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col">
            {brands.map((brand) => (
              <div
                key={brand._id}
                className={`mx-auto my-2 grid h-20 w-full items-center rounded-xl px-5 shadow-lg lg:w-4/5 ${
                  selectedBrand === `${brand.courseType} ${brand.brand}`
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                <label className="flex cursor-pointer items-center">
                  <input
                    type="radio"
                    name="brandGroup"
                    value={brand._id}
                    className="mr-2 h-6 w-6"
                    onChange={() =>
                      handleBrandChange(brand.courseType, brand.brand)
                    }
                  />
                  <div>
                    <p className="font-bold">
                      {brand.courseType}:
                      <span className="w-full text-xl"> {brand.brand}</span>
                    </p>
                    <p>{brand.description}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Select Aim */}
        <div className="mt-5">
          <div className="mb-5 text-xl font-bold text-gray-800">
            <p>Chọn mục tiêu bạn muốn chinh phục</p>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col">
            {aims.map((aim) => (
              <div
                key={aim._id}
                className={`mx-auto my-2 grid h-20 w-full items-center rounded-xl px-5 shadow-lg lg:w-4/5 ${
                  selectedAim === `${aim.courseType} ${aim.aim}`
                    ? "bg-blue-500 text-white"
                    : "bg-white"
                }`}
              >
                <label className="flex cursor-pointer items-center">
                  <input
                    type="radio"
                    name="brandGroup"
                    value={aim._id}
                    className="mr-2 h-6 w-6"
                    onChange={() => handleAimChange(aim.courseType, aim.aim)}
                  />
                  <div>
                    <p className="font-bold">
                      {aim.courseType}:
                      <span className="w-full text-xl"> {aim.aim}</span>
                    </p>
                    <p>{aim.description}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Show Road  Map*/}
        {selectedBrand && selectedAim ? (
          <>
            <div className="mt-10">
              <div className="mb-5 text-xl font-bold text-gray-800">
                <p>Chi tiết lộ trình học cho bạn</p>
              </div>
              <div className="mb-5 grid h-auto w-full rounded-xl bg-white p-5 shadow-lg">
                <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                  Lộ trình
                  <span className="ml-2 font-bold text-gray-800">
                    {roadMapName}
                  </span>
                </p>
                <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                  Thời gian hoàn thành
                  <span className="ml-2 font-bold text-gray-800">
                    {roadMapDetails.duration}
                  </span>
                </p>
                <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                  Số lượng khóa học
                  <span className="ml-2 font-bold text-gray-800">
                    {roadMapDetails.courses}
                  </span>
                </p>
                <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                  Thành tiền
                  <span className="ml-2 font-bold text-gray-800">
                    {roadMapDetails.discount}
                    <span className="ml-4 inline-block text-sm font-normal text-[#23242D] line-through">
                      {roadMapDetails.price}
                    </span>
                  </span>
                </p>
                <p className="grid grid-cols-2 pt-3 font-medium lg:grid-cols-5">
                  Thời gian sở hữu
                  <span className="ml-2 font-bold text-red-600">
                    {roadMapDetails.period}
                  </span>
                </p>
              </div>
            </div>
            {/* Courses */}
            <div className="mt-10 rounded-xl bg-white p-5 shadow-lg md:p-10">
              {roadMapCourses.map((course) => (
                <div className="mt-10" key={course._id}>
                  <div className="flex items-start">
                    <Image
                      src="/imgs/courses/check-icon.svg"
                      alt="check-icon"
                      width={32}
                      height={32}
                    />
                    <div className="ml-2">
                      <h4 className="text-lg font-bold uppercase text-[#004B8D]">
                        {course.title}
                      </h4>
                      <p className="mb-5 text-gray-500">{course.description}</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-100 p-2 lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center lg:p-5">
                    <div className="p-2 lg:grid lg:justify-items-center lg:p-5">
                      <div className="h-full w-full lg:my-0 lg:w-[300px]">
                        <img
                          src={course.image}
                          alt="courses-img"
                          className="rounded-xl object-cover"
                        />
                      </div>
                      <div className="mt-5 text-xl font-bold lg:text-center">
                        <h5 className="text-gray-800">{course.name}</h5>
                        <p className="text-[#004B8D]">
                          {course.price}
                          <span className="ml-2 text-base font-normal text-gray-400 line-through lg:block">
                            {course.discount}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="grid h-full w-full items-center lg:p-5">
                      <div className="mt-5 grid gap-2 md:gap-5 lg:mt-0 lg:p-5">
                        <div className="flex items-center">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="h4 mr-4 w-4 object-cover text-green-600"
                          />
                          Đầu vào:
                          <span className="ml-2 font-bold">
                            {course.inputLevel}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="h4 mr-4 w-4 object-cover text-green-600"
                            />
                            <span className="inline-block md:hidden">
                              Danh sách:
                            </span>
                            <span className="hidden md:inline-block">
                              Danh sách bài học:
                            </span>
                            <span className="ml-2 font-bold">
                              {course.list}
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="font-bold text-blue-500"
                              onClick={onOpen}
                            >
                              Xem chi tiết
                            </button>

                            <Modal
                              isOpen={isOpen}
                              onOpenChange={onOpenChange}
                              placement="center"
                              size="lg"
                            >
                              <ModalContent>
                                {() => (
                                  <>
                                    <ModalHeader className="flex flex-col gap-1">
                                      Chi tiết khóa học
                                    </ModalHeader>
                                    <ModalBody>
                                      <Accordion>
                                        {roadMapCourses.map((course) => (
                                          <AccordionItem
                                            key={course._id}
                                            title={course.name}
                                          >
                                            {course.lessons.map((lesson) => (
                                              <div key={lesson._id}>
                                                {lesson.title}
                                              </div>
                                            ))}
                                          </AccordionItem>
                                        ))}
                                      </Accordion>
                                    </ModalBody>
                                  </>
                                )}
                              </ModalContent>
                            </Modal>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="h4 mr-4 w-4 object-cover text-green-600"
                          />

                          <span className="inline-block md:hidden">
                            Thời gian:
                          </span>
                          <span className="hidden md:inline-block">
                            Thời gian hoàn thành:
                          </span>
                          <span className="ml-2 font-bold">
                            {course.duration}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="h4 mr-4 w-4 object-cover text-green-600"
                          />
                          Số người đã học:
                          <span className="ml-2 font-bold">
                            {course.people}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <div className="hidden xl:block">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="h4 mr-4 w-4 object-cover text-green-600"
                            />
                            Đánh giá:
                          </div>
                          <div className="xl:ml-3">
                            <FontAwesomeIcon
                              icon={faStar}
                              className="h-4 w-4 object-cover text-orange-400"
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              className="h-4 w-4 object-cover text-orange-400"
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              className="h-4 w-4 object-cover text-orange-400"
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              className="h-4 w-4 object-cover text-orange-400"
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              className="h-4 w-4 object-cover text-orange-400"
                            />
                            <span className="ml-2">({course.review})</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Benefits */}
              <div className="pt-10">
                <div className="flex">
                  <Image
                    src="/imgs/courses/filled.svg"
                    alt="filled"
                    width={25}
                    height={25}
                    className="mr-2 object-cover"
                  />
                  <h4 className="text-lg font-bold md:text-xl">
                    Quyền lợi học tập
                  </h4>
                </div>
                <div className="mt-4 flex gap-4">
                  {benefits.map((benefit) => (
                    <div key={benefit._id}>
                      {benefit.contents.map((content, contentIndex) => (
                        <div key={contentIndex}>
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="h4 mr-2 w-4 object-cover text-green-600"
                          />
                          {content}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="pt-10">
                  <div className="flex">
                    <Image
                      src="/imgs/courses/discount-icon.svg"
                      alt="filled"
                      width={25}
                      height={25}
                      className="mr-2 object-cover"
                    />
                    <h4 className="text-lg font-bold md:text-xl">
                      Nhập mã khuyến mãi
                    </h4>
                  </div>
                  <div className="relative pt-5">
                    <Input
                      type="text"
                      placeholder="Nhập mã"
                      size="lg"
                      value={couponCode}
                      onChange={handleInputChange}
                      className="md:w-2/5"
                    />
                    <Button
                      isDisabled={!couponCode}
                      color="primary"
                      size="lg"
                      onClick={handleApplyCoupon}
                      // className="absolute bottom-0 right-0 md:right-80"
                    >
                      Áp dụng
                    </Button>
                  </div>
                </div>
                <div className="pt-10">
                  <div className="flex">
                    <Image
                      src="/imgs/courses/user-icon.svg"
                      alt="filled"
                      width={25}
                      height={25}
                      className="mr-2 object-cover"
                    />
                    <h4 className="text-lg font-bold md:text-xl">
                      Thông tin thanh toán
                    </h4>
                  </div>
                  <div className="grid gap-4 pt-5">
                    <Input
                      type="text"
                      placeholder="Họ và tên"
                      size="lg"
                      className="md:w-2/5"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      size="lg"
                      className="md:w-2/5"
                    />
                    <Input
                      type="text"
                      placeholder="Số điện thoại"
                      size="lg"
                      className="md:w-2/5"
                    />
                  </div>
                </div>
                <div className="pt-10">
                  <Checkbox defaultSelected className="flex items-start">
                    Tôi đã đọc và đồng ý với
                    <Link href="#" className="ml-1 text-blue-500">
                      Điều kiện & Điều khoản giao dịch,
                    </Link>
                    <Link href="#" className="ml-1 text-blue-500">
                      Chính sách bảo mật thông tin,
                    </Link>
                    <Link href="#" className="mx-1 text-blue-500">
                      Chính sách sử dụng AI
                    </Link>
                    của Prep giao dịch của Prep
                  </Checkbox>
                </div>
                <div className="grid pt-10 md:mx-auto md:grid-cols-2 md:gap-4 xl:w-2/5">
                  <ButtonModal />
                  <Button className="my-5 h-16 w-full rounded-xl bg-[#004b8d] py-4 text-[20px] font-bold text-white outline-none hover:scale-105 md:my-0">
                    Thanh Toán
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 blur-md">
              <div className="mb-5 text-xl font-bold text-gray-800">
                <p>Chi tiết lộ trình học dành cho bạn</p>
              </div>
              <div className="mb-5 grid h-auto w-full rounded-xl bg-white p-5 shadow-lg">
                <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
                  Lộ trình
                  <span className="font-bold text-gray-800">
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
          </>
        )}
      </div>
    </>
  );
}
