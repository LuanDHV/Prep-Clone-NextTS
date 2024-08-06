"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeNavbar, setActiveNavbar] = useState<string>("over_view");
  const [openNabar, setOpenNabar] = useState<boolean>(true);
  const [selectedCourse, setSelectedCourse] = useState<string>("ielts");

  const active = [
    {
      id: "over_view",
      label: "Over View",
      img: "/imgs/learningdashboard/over_view.svg",
      activeImg: "/imgs/learningdashboard/over_view_active.svg",
      href: "over-view",
    },
    {
      id: "study_plan",
      label: "Study Plan",
      img: "/imgs/learningdashboard/study_plan.svg",
      activeImg: "/imgs/learningdashboard/study_plan_active.svg",
      href: "study-plan",
    },
    {
      id: "my_courses",
      label: "My Courses",
      img: "/imgs/learningdashboard/my_courses.svg",
      activeImg: "/imgs/learningdashboard/my_courses_active.svg",
      href: "my-courses",
    },
    {
      id: "test_practice",
      label: "Test Practice",
      img: "/imgs/learningdashboard/test_practice.svg",
      activeImg: "/imgs/learningdashboard/test_practice_active.svg",
      href: "test-practice",
    },
    {
      id: "learning_profile",
      label: "Learning Profile",
      img: "/imgs/learningdashboard/learning_profile.svg",
      activeImg: "/imgs/learningdashboard/learning_profile_active.svg",
      href: "learning-profile",
    },
  ];

  const courses = [
    { value: "ielts", label: "IELTS" },
    { value: "toeic", label: "TOEIC" },
    { value: "hsk", label: "HSK" },
    { value: "prep talk english", label: "Prep Talk English" },
  ];

  const handleOpenNavbar = () => {
    setOpenNabar(!openNabar);
  };

  const handleSelectedCourse = (e: any) => {
    setSelectedCourse(e.target.value);
    console.log(e.target.value);
  };

  const handleFilterCourse = () => {
    router.push(`/my-courses?courseType=${selectedCourse}`);
  };

  return (
    <div className="flex h-screen">
      <div className="fixed left-0 top-0 z-10 flex h-[66px] w-full items-center justify-between border-b-[2px] border-neutral-200 bg-white px-8 py-3">
        <div className="flex cursor-pointer items-center gap-5">
          <FontAwesomeIcon
            icon={faBars}
            className="h-6 w-6"
            onClick={handleOpenNavbar}
          />
          <Link href="/">
            <Image
              src="/imgs/header/logo.svg"
              alt="logo"
              width={85}
              height={24}
              className="object-cover"
            />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Button
            onPress={onOpen}
            className="border border-blue-500 bg-white font-bold text-blue-500"
          >
            Chương trình bạn chọn
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            size="md"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex justify-center">
                    Bạn muốn bắt đầu với
                  </ModalHeader>
                  <div className="flex flex-col gap-5 p-5">
                    {courses.map((course) => (
                      <div
                        className={`w-full rounded-xl border ${selectedCourse === course.value ? "border-blue-500 bg-blue-50 text-blue-500" : ""} p-5`}
                        key={course.value}
                      >
                        <label className="flex w-full cursor-pointer items-center">
                          <input
                            type="radio"
                            name="selectedCourse"
                            value={course.value}
                            className="h-5 w-5"
                            checked={selectedCourse === course.value}
                            onChange={handleSelectedCourse}
                          />
                          <p className="ml-4 font-bold">{course.label}</p>
                        </label>
                      </div>
                    ))}
                  </div>
                  <ModalFooter>
                    <Button
                      color="primary"
                      className="w-full"
                      onClick={handleFilterCourse}
                      onPress={onClose}
                    >
                      Bắt đầu ngay
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="mt-[66px] flex flex-1">
        {openNabar ? (
          <div className="fixed bottom-0 top-[66px] w-1/6 border-r-[1px] border-neutral-200 p-4 lg:block">
            {active.map((items) => (
              <Link href={items.href} key={items.id}>
                <div
                  className={`mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl p-4 text-sm duration-300 ease-in-out md:justify-start ${activeNavbar === items.id ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
                  onClick={() => setActiveNavbar(items.id)}
                >
                  <Image
                    src={
                      activeNavbar === items.id ? items.activeImg : items.img
                    }
                    alt={items.id}
                    width={24}
                    height={24}
                  />
                  <p
                    className={`hidden text-center font-semibold md:block ${activeNavbar === items.id ? "text-blue-600" : "text-gray-600"}`}
                  >
                    {items.label}
                  </p>
                </div>
              </Link>
            ))}
            <button className="absolute bottom-5 left-0 w-full cursor-pointer p-4">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-xl bg-gray-200 px-4 py-3 duration-300 ease-in-out hover:bg-gray-300"
              >
                <p className="font-semibold text-gray-800">
                  <Image
                    src="/imgs/learningdashboard/left-arrow.png"
                    alt="left-arrow"
                    width={24}
                    height={24}
                    className="inline-block object-cover"
                  />
                  <span className="ml-2 hidden lg:inline-block">
                    Về trang chủ
                  </span>
                </p>
              </Link>
            </button>
          </div>
        ) : null}

        <main
          className={`${openNabar ? "ml-[16.67%] w-5/6" : "ml-0 w-full"} p-8`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
