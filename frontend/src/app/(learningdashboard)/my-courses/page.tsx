"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function MyCoursesPage() {
  const { user } = useUser();
  const [courses, setCourses] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const courseType = searchParams.get("courseType") || "IELTS";

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `http://localhost:5000/api/orders/user-courses/${user.id}`,
          );
          // Filter courses based on courseType query parameter
          const filteredCourses = response.data.filter(
            (course: any) => course.courseType === courseType?.toUpperCase(),
          );
          setCourses(filteredCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [user, courseType]);

  return (
    <>
      <h1 className="text-3xl font-bold">My Courses</h1>
      <p className="pb-10 pt-5">
        Các khóa học bạn đang sở hữu đã được chia theo từng cấp trình độ, tương
        ứng với mỗi chặng mục tiêu. Hãy chọn trình độ mà bạn muốn bắt đầu nhé.
      </p>

      {courses.length > 0 ? (
        <div className="grid cursor-pointer grid-flow-row gap-10 md:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="grid-rows-2 rounded-xl border border-gray-300"
            >
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={course.image}
                  alt={course.name}
                  className="object-cover duration-300 ease-in-out hover:scale-125"
                />
              </div>
              <div className="border-t border-gray-300 p-5 font-bold">
                <p>{course.name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/imgs/learningdashboard/empty-course.svg"
            alt="empty-course"
            width={150}
            height={140}
          />
          <p className="text-sm font-medium text-gray-400">
            Bạn chưa sở hữu khóa học nào.
          </p>
        </div>
      )}
    </>
  );
}
