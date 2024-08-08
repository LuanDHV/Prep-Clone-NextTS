"use client";
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
    return <p>Không có thông tin khóa học để hiển thị.</p>;
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
      </div>
      {/* Hiển thị danh sách bài học */}
      <div className="p-4">
        <div className="mb-6">
          <img
            src={course.image}
            alt={course.title}
            className="mb-4 h-48 w-full rounded-lg object-cover"
          />
          <h1 className="mb-2 text-2xl font-bold">{course.title}</h1>
          <p className="mb-2 text-lg">{course.description}</p>
          <p className="text-md mb-2">
            <strong>Price:</strong> {course.price}
          </p>
          <p className="text-md mb-2">
            <strong>Discount:</strong> {course.discount}
          </p>
          <p className="text-md mb-2">
            <strong>Input Level:</strong> {course.inputLevel}
          </p>
          <p className="text-md mb-2">
            <strong>Duration:</strong> {course.duration}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-bold">Lessons</h2>
          {lessons.length > 0 ? (
            <ul>
              {lessons.map((lesson: any) => (
                <li key={lesson._id} className="mb-2">
                  <strong>{lesson.title}:</strong> {lesson.video}
                </li>
              ))}
            </ul>
          ) : (
            <p>Không có bài học nào để hiển thị.</p>
          )}
        </div>
      </div>
    </>
  );
}
