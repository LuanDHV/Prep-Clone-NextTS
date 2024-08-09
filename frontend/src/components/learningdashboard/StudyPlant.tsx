"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function StudyPlant() {
  const [course, setCourse] = useState<any>(null);
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
    // Lấy dữ liệu khóa học từ localStorage
    const courseData = localStorage.getItem("selectedCourse");
    if (courseData) {
      const parsedCourse = JSON.parse(courseData);
      setCourse(parsedCourse);
      setLessons(parsedCourse.lessons || []);
    }
  }, []);

  if (!course) {
    return (
      <>
        <div className="relative min-h-screen w-full">
          <img
            src="/imgs/learningdashboard/bg-dark.png"
            alt="bg-dark"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="hidden md:block">
            <div className="absolute bottom-80 right-7 z-20 text-sm font-bold">
              <p> Hãy tưới mát cho mình </p>
              <p>bằng tri thức của bạn!</p>
            </div>
            <img
              src="/imgs/learningdashboard/buble.png"
              alt="buble"
              className="absolute bottom-72 right-6 w-40 object-cover"
            />
            <img
              src="/imgs/learningdashboard/plant-2.svg"
              alt="plant-2"
              className="absolute bottom-20 right-8 z-10 w-40 object-cover"
            />
            <img
              src="/imgs/learningdashboard/block-top-dark.png"
              alt="block-top-dark"
              className="absolute bottom-20 left-32 z-10 w-2/6"
            />
            <img
              src="/imgs/learningdashboard/bottom-block-dark.png"
              alt="bottom-block-dark"
              className="absolute bottom-0 object-cover"
            />
          </div>
          <div className="absolute left-1/2 top-64 z-30 flex -translate-x-1/2 transform flex-col items-center justify-center">
            <Image
              src="/imgs/learningdashboard/empty-course.svg"
              alt="empty-course"
              width={150}
              height={140}
            />
            <p className="mb-3 text-sm font-medium text-white">
              Hãy chọn khóa học trước khi bắt đầu.
            </p>
            <button className="h-14 w-full rounded-3xl bg-white font-bold text-blue-500 duration-300 ease-in-out hover:bg-blue-500 hover:text-white">
              <Link href="/my-courses"> Bắt đầu ngay</Link>
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative min-h-screen w-full">
        <img
          src="/imgs/learningdashboard/bg-dark.png"
          alt="bg-dark"
          className="absolute left-0 top-0 h-full w-full object-cover"
        />
        <div className="hidden md:block">
          <div className="absolute bottom-80 right-7 z-20 text-sm font-bold">
            <p> Hãy tưới mát cho mình </p>
            <p>bằng tri thức của bạn!</p>
          </div>
          <img
            src="/imgs/learningdashboard/buble.png"
            alt="buble"
            className="absolute bottom-72 right-6 w-40 object-cover"
          />
          <img
            src="/imgs/learningdashboard/plant-2.svg"
            alt="plant-2"
            className="absolute bottom-20 right-8 z-10 w-40 object-cover"
          />
          <img
            src="/imgs/learningdashboard/block-top-dark.png"
            alt="block-top-dark"
            className="absolute bottom-20 left-32 z-10 w-2/6"
          />
          <img
            src="/imgs/learningdashboard/bottom-block-dark.png"
            alt="bottom-block-dark"
            className="absolute bottom-0 object-cover"
          />
        </div>
        {/* Hiển thị danh sách bài học */}
        <div className="absolute left-1/2 top-10 w-4/5 -translate-x-1/2 transform xl:w-3/5">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="w-full md:w-3/5">
              <div className="flex h-auto w-full flex-col items-center justify-center gap-2 rounded-3xl bg-white object-cover p-5 shadow-xl md:gap-3 md:py-7">
                <h1 className="text-3xl font-extrabold text-blue-500">
                  {course.courseType} - {course.name}
                </h1>
                <p className="font-bold">{course.title}</p>
                <p className="text-gray-700">{course.description}</p>
                <div className="flex w-full justify-center gap-7">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/imgs/learningdashboard/student.svg"
                      alt="student-ic"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                    <p className="font-bold">Đầu vào: {course.inputLevel}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/imgs/learningdashboard/play.svg"
                      alt="play-ic"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                    <p className="font-bold">{course.list} Bài học</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full md:w-2/5">
              <div className="w-full">
                {lessons.length > 0 ? (
                  <ul>
                    {lessons.map((lesson: any, index: number) => (
                      <div key={lesson._id} className="relative mb-4">
                        <Image
                          src="/imgs/learningdashboard/hx-b2.svg"
                          alt="hx-b2"
                          width={60}
                          height={60}
                          className="absolute -left-7 top-5 object-cover"
                        />
                        <p className="absolute -left-1 top-9 text-xl font-bold text-white">
                          {index + 1}
                        </p>

                        <button className="h-24 w-full rounded-2xl bg-white p-5 shadow-xl">
                          <p className="px-5 text-start text-sm uppercase text-gray-700">
                            {course.name}
                          </p>
                          <p className="px-5 text-start font-bold uppercase">
                            {lesson.title}
                          </p>
                        </button>
                        {/* {lesson.video} */}
                      </div>
                    ))}
                  </ul>
                ) : (
                  <p>Không có bài học nào để hiển thị.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
