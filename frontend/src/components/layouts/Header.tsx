"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { IMenu, ISubMenu } from "@/types/interfaces";
import { UserButton, useAuth } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useAuth();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isCourseOpen, setCourseOpen] = useState<boolean>(false);
  const [isPracticeMenuOpen, setPracticeMenuOpen] = useState<boolean>(false);
  const [isBlogMenuOpen, setBlogMenuOpen] = useState<boolean>(false);
  const [isNewsMenuOpen, setNewsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const toggleCourseMenu = () => {
    setCourseOpen(!isCourseOpen);
  };

  const togglePracticeMenu = () => {
    setPracticeMenuOpen(!isPracticeMenuOpen);
  };

  const toggleBlogMenu = () => {
    setBlogMenuOpen(!isBlogMenuOpen);
  };

  const toggleNewsMenu = () => {
    setNewsMenuOpen(!isNewsMenuOpen);
  };

  const menuItems: IMenu[] = [
    { title: "Trang chủ", href: "/" },
    {
      title: "Khóa học",
      subItems: [
        { title: "Luyện thi IELTS", href: "/courses/ielts" },
        { title: "Luyện thi TOEIC", href: "/courses/toeic" },
        // { title: "Luyện thi HSK", href: "" },
        // { title: "Prep Talk English", href: "" },
      ],
      isOpen: isCourseOpen,
      toggle: toggleCourseMenu,
    },
    { title: "Kiểm tra đầu vào", href: "/test" },
    // {
    //   title: "Luyện đề",
    //   subItems: [
    //     { title: "Luyện đề IELTS", href: "" },
    //     { title: "Luyện đề TOEIC", href: "" },
    //   ],
    //   isOpen: isPracticeMenuOpen,
    //   toggle: togglePracticeMenu,
    // },
    {
      title: "Blog",
      subItems: [
        { title: "Học IELTS", href: "/blogs/ielts" },
        { title: "Học TOEIC", href: "/blogs/toeic" },
      ],
      isOpen: isBlogMenuOpen,
      toggle: toggleBlogMenu,
    },
    {
      title: "Tin tức",
      subItems: [
        { title: "Vinh danh học viên", href: "/blogs/honor" },
        { title: "Sự kiện - Khuyến mãi", href: "/blogs/event" },
        // { title: "Tuyển dụng", href: "" },
      ],
      isOpen: isNewsMenuOpen,
      toggle: toggleNewsMenu,
    },
  ];

  return (
    <>
      {/* Header */}
      <section>
        <div className="flex h-[60px] w-full items-center justify-between bg-white px-5 py-2.5 shadow md:px-10">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBars}
              className="h-4 w-4 cursor-pointer object-cover p-2 pl-0 lg:hidden"
              onClick={toggleMenu}
            />
            <Link href="/" className="z-10">
              <Image
                src="/imgs/header/logo.svg"
                alt="logo"
                width={100}
                height={28}
                className="object-cover"
              />
            </Link>
          </div>
          {isSignedIn ? (
            <div className="z-10 flex justify-end gap-3">
              <Link
                href="/over-view"
                className="flex h-10 w-[100px] items-center justify-center rounded-xl bg-blue-500 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-[#1a56db] lg:h-[48px] lg:w-[130px]"
              >
                Bắt đầu học
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="z-10 flex h-10 w-[75px] items-center justify-center rounded-xl bg-blue-500 text-sm font-semibold text-white duration-300 ease-in-out hover:bg-[#1a56db] lg:h-[48px] lg:w-[130px]"
            >
              Bắt đầu
            </Link>
          )}
        </div>

        <div
          className={`flex w-full flex-col gap-5 bg-white bg-opacity-100 p-5 text-start font-semibold shadow lg:h-[60px] ${isOpen ? "block" : "hidden"} lg:absolute lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:bg-opacity-0 lg:shadow-none`}
        >
          {menuItems.map((item: IMenu, index: number) => (
            <div key={index} className="group relative">
              {item.subItems ? (
                <>
                  <div
                    className="flex cursor-pointer items-center justify-between lg:duration-500 lg:ease-in-out lg:before:h-10 lg:before:w-2 lg:hover:text-[#1479f4]"
                    onClick={item.toggle}
                  >
                    <div>
                      {item.title}
                      <span className="absolute bottom-0 left-0 hidden h-1 w-full origin-left scale-x-0 bg-[#1479f4] transition-transform duration-500 ease-in-out group-hover:scale-x-100 lg:block"></span>
                    </div>
                    <FontAwesomeIcon
                      icon={item.isOpen ? faCaretUp : faCaretDown}
                      className="mr-2 h-4 w-[10px] object-cover lg:ml-1"
                    />
                  </div>
                  <div
                    className={`lg:hidden ${item.isOpen ? "block" : "hidden"} flex flex-col bg-white p-2 font-semibold lg:rounded-xl lg:shadow-md`}
                  >
                    <ul>
                      {item.subItems.map(
                        (subItem: ISubMenu, subIndex: number) => (
                          <Link href={subItem.href || "#"} key={subIndex}>
                            <li className="p-2 text-gray-600 hover:bg-blue-50">
                              {subItem.title}
                            </li>
                          </Link>
                        ),
                      )}
                    </ul>
                  </div>
                  <div className="hidden rounded-xl font-semibold lg:absolute lg:left-[-50px] lg:top-10 lg:w-52 lg:flex-col lg:bg-white lg:p-2 lg:shadow-lg lg:group-hover:flex">
                    <ul>
                      {item.subItems.map(
                        (subItem: ISubMenu, subIndex: number) => (
                          <Link href={subItem.href || "#"} key={subIndex}>
                            <li className="p-2 text-gray-600 hover:bg-blue-50">
                              {subItem.title}
                            </li>
                          </Link>
                        ),
                      )}
                    </ul>
                  </div>
                </>
              ) : (
                <Link href={item.href || "#"}>
                  <span className="group relative inline-block duration-500 ease-in-out hover:text-xl hover:text-[#1479f4] lg:hover:text-base">
                    {item.title}
                    <span className="absolute bottom-0 left-0 block h-1 w-full origin-left scale-x-0 bg-[#1479f4] transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
