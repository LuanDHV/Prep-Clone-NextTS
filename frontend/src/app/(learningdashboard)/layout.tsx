"use client";
import { UserButton } from "@clerk/nextjs";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LearningDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeNavbar, setActiveNavbar] = useState<string>("");

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
  return (
    <div className="flex h-screen">
      <div className="fixed left-0 top-0 z-10 flex h-[66px] w-full items-center justify-between border-b-[2px] border-neutral-200 bg-white px-8 py-3">
        <div className="flex cursor-pointer items-center gap-5">
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
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
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="mt-[66px] flex flex-1">
        <div className="fixed bottom-0 top-[66px] w-1/6 border-r-[1px] border-neutral-200 p-4">
          {active.map((items) => (
            <Link href={items.href}>
              <div
                key={items.id}
                className={`mt-4 flex cursor-pointer items-center gap-2 rounded-xl p-4 text-sm ${activeNavbar === items.id ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
                onClick={() => setActiveNavbar(items.id)}
              >
                <Image
                  src={activeNavbar === items.id ? items.activeImg : items.img}
                  alt={items.id}
                  width={24}
                  height={24}
                />
                <p
                  className={`font-semibold ${activeNavbar === items.id ? "text-blue-600" : "text-gray-600"}`}
                >
                  {items.label}
                </p>
              </div>
            </Link>
          ))}
          <button className="absolute bottom-5 left-0 w-full cursor-pointer p-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 rounded-xl bg-gray-200 px-4 py-3"
            >
              <p className="font-semibold text-gray-800"> Về trang chủ</p>
            </Link>
          </button>
        </div>
        <main className="ml-[16.67%] w-5/6 p-8">{children}</main>
      </div>
    </div>
  );
}
