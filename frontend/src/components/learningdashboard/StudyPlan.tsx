"use client";
import { ILessons } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";
import React, { useEffect, useState } from "react";

export default function StudyPlant() {
  const [course, setCourse] = useState<any>(null);
  const [lessons, setLessons] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);

  useEffect(() => {
    const courseData = localStorage.getItem("selectedCourse");
    if (courseData) {
      const parsedCourse = JSON.parse(courseData);
      const parsedLessons = parsedCourse.lessons || [];

      // Create a unique key for lesson status based on courseId
      const lessonsStatusKey = `lessonsStatus_${parsedCourse._id}`;
      const lessonsStatus = localStorage.getItem(lessonsStatusKey);

      // If there is lesson status in localStorage, restore it
      if (lessonsStatus) {
        const savedLessonsStatus = JSON.parse(lessonsStatus);
        parsedLessons.forEach((lesson: any) => {
          const savedLessonStatus = savedLessonsStatus.find(
            (savedLesson: any) => savedLesson._id === lesson._id,
          );
          if (savedLessonStatus) {
            lesson.status = savedLessonStatus.status;
          }
        });
      }

      setCourse(parsedCourse);
      setLessons(parsedLessons);
    }
  }, []);

  const handleVideoStart = (lessonId: string) => {
    const currentLesson = lessons.find((lesson) => lesson._id === lessonId);
    if (!currentLesson) return;

    // Check if the lesson already has a status of "Đã học", then do not change
    if (currentLesson.status === "Đã học") {
      setSelectedVideo(currentLesson.video);
      setCurrentLesson(lessons.findIndex((lesson) => lesson._id === lessonId));
      return;
    }

    // If not "Đã học", change status to "Đang học"
    setSelectedVideo(currentLesson.video);
    setCurrentLesson(lessons.findIndex((lesson) => lesson._id === lessonId));

    // Update lesson status to  "Đang học"
    const updatedLessons = lessons.map((lesson) =>
      lesson._id === lessonId ? { ...lesson, status: "Đang học" } : lesson,
    );
    setLessons(updatedLessons);

    // Save the status of lessons to localStorage with a key based on courseId
    const lessonsStatusKey = `lessonsStatus_${course._id}`;
    localStorage.setItem(lessonsStatusKey, JSON.stringify(updatedLessons));
  };

  const handleVideoEnd = () => {
    if (currentLesson !== null) {
      const lessonId = lessons[currentLesson]._id;

      // Update lesson status to "Đã học"
      const updatedLessons = lessons.map((lesson) =>
        lesson._id === lessonId ? { ...lesson, status: "Đã học" } : lesson,
      );
      setLessons(updatedLessons);

      // Save the status of lessons to localStorage with a key based on courseId
      const lessonsStatusKey = `lessonsStatus_${course._id}`;
      localStorage.setItem(lessonsStatusKey, JSON.stringify(updatedLessons));
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <img
        src="/imgs/learningdashboard/bg-dark.png"
        alt="bg-dark"
        className="absolute left-0 top-0 h-full w-full object-cover"
      />

      {/* Decoration */}
      <div className="hidden xl:block">
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
          src="/imgs/learningdashboard/bottom-block-dark.png"
          alt="bottom-block-dark"
          className="absolute bottom-0 object-cover"
        />
      </div>

      {/* Show Information Course */}
      {course ? (
        <div className="absolute left-1/2 top-10 w-5/6 -translate-x-1/2 transform md:w-4/6">
          <div className="flex flex-col justify-between gap-10 xl:flex-row">
            <div className="w-full xl:w-4/6">
              <div className="flex h-auto w-full flex-col items-center justify-center gap-2 rounded-3xl bg-white p-5 shadow-xl xl:gap-3 xl:py-7">
                <h1 className="text-3xl font-extrabold text-blue-500">
                  {course.courseType} - {course.name}
                </h1>
                <p className="font-bold">{course.title}</p>
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

              {/* Show List Lessons Left */}
              <div className="mt-5 hidden h-auto w-full items-center justify-center rounded-3xl bg-white p-8 xl:block">
                {lessons.length > 0 ? (
                  <div className="flex flex-wrap justify-center">
                    {lessons.map((lesson: ILessons, index: number) => (
                      <div
                        key={lesson._id}
                        className="flex items-center justify-center"
                      >
                        <div className="relative">
                          <Image
                            src={
                              lesson.status === "Đang học"
                                ? "/imgs/learningdashboard/hx-o.svg"
                                : lesson.status === "Đã học"
                                  ? "/imgs/learningdashboard/hx-s.svg"
                                  : "/imgs/learningdashboard/hx-b2.svg"
                            }
                            alt="hx-icon"
                            width={36}
                            height={36}
                            className="object-cover"
                          />
                          <p className="absolute inset-0 flex items-center justify-center font-bold text-white">
                            {index + 1}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Không có bài học nào để hiển thị.</p>
                )}
                <div className="mx-auto mt-5 flex items-center justify-between">
                  <div className="grid grid-rows-2">
                    <div className="flex items-center">
                      <Image
                        src="/imgs/learningdashboard/hx-o.svg"
                        alt="hx-b2"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                      <p>Đang học</p>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/imgs/learningdashboard/hx-s.svg"
                        alt="hx-b2"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                      <p>Đã học</p>
                    </div>
                  </div>
                  <div className="grid grid-rows-2">
                    <div className="flex items-center">
                      <Image
                        src="/imgs/learningdashboard/hx-b2.svg"
                        alt="hx-b2"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                      <p>Chưa học</p>
                    </div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show List Lessons Right */}
            <div className="custom-scrollbar flex h-[330px] w-full justify-center overflow-y-scroll md:h-[620px] xl:w-2/6">
              <div className="w-5/6">
                {lessons.length > 0 ? (
                  <div>
                    {lessons.map((lesson: ILessons, index: number) => (
                      <div key={lesson._id} className="relative mb-4">
                        <div className="flex">
                          <div className="flex items-center justify-center">
                            <Image
                              src={
                                lesson.status === "Đang học"
                                  ? "/imgs/learningdashboard/hx-o.svg"
                                  : lesson.status === "Đã học"
                                    ? "/imgs/learningdashboard/hx-s.svg"
                                    : "/imgs/learningdashboard/hx-b2.svg"
                              }
                              alt="hx-icon"
                              width={60}
                              height={60}
                              className="absolute object-cover"
                            />
                            <p className="absolute text-xl font-bold text-white">
                              {index + 1}
                            </p>
                          </div>
                          <button
                            onClick={() => handleVideoStart(lesson._id)}
                            className="h-24 w-full rounded-2xl bg-white p-5 shadow-xl"
                          >
                            <p className="px-5 text-start text-sm uppercase text-gray-700">
                              {course.name}
                            </p>
                            <p className="px-5 text-start font-bold uppercase">
                              {lesson.title}
                            </p>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Không có bài học nào để hiển thị.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Show button
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
          <Link
            href="/my-courses"
            className="rounded-lg bg-white px-8 py-2 text-sm font-bold"
          >
            Chọn khóa học
          </Link>
        </div>
      )}

      {/* Video Player Overlay */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-5 md:p-0"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative h-2/4 w-full max-w-screen-sm rounded-3xl bg-white p-5 xl:h-3/4 xl:max-w-screen-xl">
            <ReactPlayer
              url={selectedVideo}
              width="100%"
              height="100%"
              controls
              onEnded={handleVideoEnd}
            />
          </div>
        </div>
      )}
    </div>
  );
}
