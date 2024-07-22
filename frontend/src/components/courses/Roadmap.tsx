"use client";
import {
  faCaretDown,
  faCaretUp,
  faCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
  Input,
  Checkbox,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import ButtonModal from "./ButtonModal";
import {
  ICourses,
  ICoursesLayout,
  ILessons,
  IRoadMapDetails,
} from "@/types/interfaces";
import NotificationModal from "./NotificationModal";
import axios from "axios";

export default function Roadmap({
  brands,
  aims,
  benefits,
  courses,
}: ICoursesLayout) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [couponCode, setCouponCode] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedAim, setSelectedAim] = useState<string>("");
  const [roadMapName, setRoadMapName] = useState<string>("");
  const [roadMapDetails, setRoadMapDetails] = useState<IRoadMapDetails>({
    duration: "",
    courses: "",
    price: "",
    discount: "",
    period: "",
  });
  const [roadMapCourses, setRoadMapCourses] = useState<ICourses[]>([]);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "error",
  );
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean;
  }>({});
  const [accordionData, setAccordionData] = useState<{ [key: string]: any }>(
    {},
  );

  // Handle Accordion
  const handleOpenAccordion = (courseId: string) => {
    setOpenAccordions((prevState) => {
      const isOpen = !prevState[courseId];

      if (isOpen) {
        // Fetch data for the opened accordion
        const selectedCourse = roadMapCourses.find(
          (course) => course._id === courseId,
        );
        if (selectedCourse) {
          setAccordionData((prevData) => ({
            ...prevData,
            [courseId]: selectedCourse,
          }));
        }
      }

      return { ...prevState, [courseId]: isOpen };
    });
  };

  // Handle input change for the coupon code
  const handleInputChange = (e: any) => {
    setCouponCode(e.target.value);
  };

  // Handle coupon application
  const handleApplyCoupon = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/coupons/${couponCode}`,
      );
      const couponData = response.data;

      if (couponData) {
        const discount = couponData.discountPercentage;
        setDiscountPercentage(discount);
        handleNotification("Áp dụng mã thành công!", "success");
        setCouponCode("");

        // Calculate new price based on applied coupon
        const totalPrice = roadMapCourses.reduce(
          (acc, course) => acc + parseInt(course.price.replace(/\D/g, "")),
          0,
        );
        const newTotalPrice = totalPrice * (1 - discount / 100);

        setRoadMapDetails((prevDetails) => ({
          ...prevDetails,
          price: `${newTotalPrice.toLocaleString()} đ`,
        }));
      } else {
        console.error("Không áp dụng mã thành công!");
        handleNotification("Mã khuyến mãi không hợp lệ!", "error");
      }
    } catch (error) {
      console.error("Lỗi kiểm tra mã khuyến mãi:", error);
      handleNotification("Mã khuyến mãi không hợp lệ!", "error");
    }

    // console.log("Áp dụng mã coupon:", couponCode);
  };

  //Effect to handle roadmap calculation on selected brand or aim change
  useEffect(() => {
    handleRoadMap(selectedBrand, selectedAim);
  }, [selectedBrand, selectedAim]);

  // Handle brand selection change
  const handleBrandChange = (courseType: string, brand: string) => {
    const selectedBrand = `${courseType} ${brand}`;
    setSelectedBrand(selectedBrand);
    // console.log("Brand:", selectedBrand);
  };

  // Handle aim selection change
  const handleAimChange = (courseType: string, aim: string) => {
    const selectedAim = `${courseType} ${aim}`;
    setSelectedAim(selectedAim);
    // console.log("Aim:", selectedAim);
  };

  // Handle notifications
  const handleNotification = (message: string, type: "success" | "error") => {
    setNotificationMessage(message);
    setNotificationType(type);
    onOpen();
    // console.log(message);
    // console.log(type);
  };

  // Handle roadmap calculation based on selected brand and aim
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
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng IELTS", "IELTS Cơ bản"].includes(course.name),
            );
          } else if (selectedAim === "IELTS Trung cấp") {
            roadMapName = "Mất Gốc đến 6.0";
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng IELTS", "IELTS Cơ bản", "IELTS Trung Cấp"].includes(
                course.name,
              ),
            );
          } else if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Mất Gốc đến 6.5+";
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
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng IELTS", ,].includes(course.name),
            );
          } else if (selectedAim === "IELTS Trung cấp") {
            roadMapName = "Từ 4.0 đến 6.0";
            roadMapCourses = courses.filter((course) =>
              ["IELTS Cơ bản", "IELTS Trung Cấp"].includes(course.name),
            );
          } else if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Từ 4.0 đến 6.5+";
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
            roadMapCourses = courses.filter((course) =>
              ["IELTS Trung Cấp"].includes(course.name),
            );
          } else if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Từ 5.0 đến 6.5+";
            roadMapCourses = courses.filter((course) =>
              ["IELTS Trung Cấp", "IELTS Chuyên Sâu"].includes(course.name),
            );
          } else {
            handleNotification(
              "Bạn không thể lựa chọn Mục Tiêu Đầu ra thấp hơn Trình Độ Hiện Tại của bạn.",
              "error",
            );
          }
          break;
        case "IELTS 6.0 - 6.5":
          if (selectedAim === "IELTS Chuyên sâu") {
            roadMapName = "Từ 6.0 đến 6.5+";
            roadMapCourses = courses.filter((course) =>
              ["IELTS Chuyên Sâu"].includes(course.name),
            );
          } else {
            handleNotification(
              "Bạn không thể lựa chọn Mục Tiêu Đầu ra thấp hơn Trình Độ Hiện Tại của bạn.",
              "error",
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
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng TOEIC"].includes(course.name),
            );
          } else if (selectedAim === "TOEIC 600") {
            roadMapName = "Mất Gốc đến 600";
            roadMapCourses = courses.filter((course) =>
              ["Nền Tảng TOEIC", "TOEIC Trung Cấp"].includes(course.name),
            );
          } else if (selectedAim === "TOEIC 800") {
            roadMapName = "Mất Gốc đến 800";
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
            roadMapCourses = courses.filter((course) =>
              ["TOEIC Trung Cấp"].includes(course.name),
            );
          } else if (selectedAim === "TOEIC 800") {
            roadMapName = "Có Nền Tảng đến 800";
            roadMapCourses = courses.filter((course) =>
              ["TOEIC Trung Cấp", "TOEIC Chuyên Sâu"].includes(course.name),
            );
          } else {
            handleNotification(
              "Bạn không thể lựa chọn Mục Tiêu Đầu ra thấp hơn Trình Độ Hiện Tại của bạn.",
              "error",
            );
          }
          break;
        case "TOEIC 600 - 650":
          if (selectedAim === "TOEIC 800") {
            roadMapName = "TOEIC Nền Tảng Tốt đến 800";
            roadMapCourses = courses.filter((course) =>
              ["TOEIC Chuyên Sâu"].includes(course.name),
            );
          } else {
            handleNotification(
              "Bạn không thể lựa chọn Mục Tiêu Đầu ra thấp hơn Trình Độ Hiện Tại của bạn.",
              "error",
            );
          }
          break;
        default:
          break;
      }
    }

    // Calculate route details from course list
    const totalDuration = roadMapCourses.reduce(
      (acc, course) => acc + parseInt(course.duration),
      0,
    );
    const totalPrice = roadMapCourses.reduce(
      (acc, course) => acc + parseInt(course.price.replace(/\D/g, "")),
      0,
    );
    const totalDiscount = roadMapCourses.reduce(
      (acc, course) => acc + parseInt(course.discount.replace(/\D/g, "")),
      0,
    );

    roadMapDetails = {
      duration: `${totalDuration} tháng`,
      courses: `${roadMapCourses.length} khóa`,
      price: `${totalPrice.toLocaleString()} đ`,
      discount: `${totalDiscount.toLocaleString()} đ`,
      period: `${roadMapCourses.length * (selectedBrand.startsWith("IELTS") ? 15 : 9)} tháng`,
    };

    // Update state
    setRoadMapName(roadMapName);
    setRoadMapDetails(roadMapDetails);
    setRoadMapCourses(roadMapCourses);

    // Log the results for debugging
    // console.log("Road Map Name:", roadMapName);
    // console.log("Road Map Details:", roadMapDetails);
    // console.log("Road Map Courses:", roadMapCourses);
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

        {/* Notification Modal */}
        <NotificationModal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          message={notificationMessage}
          type={notificationType}
        />

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
                    {roadMapDetails.price}
                    <span className="ml-4 inline-block text-sm font-normal text-[#23242D] line-through">
                      {roadMapDetails.discount}
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
                      className="object-cover"
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
                        {/* Lessons */}
                        <div className="">
                          <div className="flex items-center justify-between">
                            <div className="">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="h4 mr-4 w-4 object-cover text-green-600"
                              />
                              <span className="inline-block xl:hidden">
                                Danh sách:
                              </span>
                              <span className="hidden xl:inline-block">
                                Danh sách bài học:
                              </span>
                              <span className="ml-2 font-bold">
                                {course.list}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <button
                                className="font-bold text-blue-500"
                                onClick={() => handleOpenAccordion(course._id)}
                              >
                                Xem chi tiết
                                <FontAwesomeIcon
                                  icon={
                                    openAccordions[course._id]
                                      ? faCaretUp
                                      : faCaretDown
                                  }
                                  className="ml-2 h-4 w-4 object-cover"
                                />
                              </button>
                            </div>
                          </div>
                          {openAccordions[course._id] &&
                          accordionData[course._id] ? (
                            <div className="my-2">
                              <Accordion isCompact>
                                <AccordionItem
                                  key={course._id}
                                  title={accordionData[course._id].name}
                                  className="rounded-xl bg-gray-200 px-6 font-semibold"
                                >
                                  {accordionData[course._id].lessons?.map(
                                    (lesson: ILessons) => (
                                      <div key={lesson._id}>
                                        <p className="font-normal">
                                          {lesson.title}
                                        </p>
                                      </div>
                                    ),
                                  )}
                                </AccordionItem>
                              </Accordion>
                            </div>
                          ) : null}
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

                {/* Coupon */}
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
                {/* Notification Modal */}
                <NotificationModal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  message={notificationMessage}
                  type={notificationType}
                />
                {/* Information  */}
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
