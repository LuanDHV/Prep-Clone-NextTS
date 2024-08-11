"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function MyCourses() {
  const { user } = useUser();
  const router = useRouter();
  const [courses, setCourses] = useState<any[]>([]);
  const [lessons, setLessons] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const courseType =
    searchParams.get("courseType") ||
    localStorage.getItem("selectedCourseType") ||
    "ielts";

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

          // Extract and store lessons from the fetched courses
          const allLessons = filteredCourses.flatMap(
            (course: any) => course.lessons,
          );
          setLessons(allLessons);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [user, courseType]);

  const handleCourseClick = (courseId: string) => {
    // Find the selected course by ID
    const selectedCourse = courses.find(
      (course: any) => course._id === courseId,
    );
    if (selectedCourse) {
      // Store the entire course information in localStorage
      localStorage.setItem("selectedCourse", JSON.stringify(selectedCourse));

      // Redirect to StudyPlan page
      router.push("/study-plan");
    }
  };

  return (
    <>
      {courses.length > 0 ? (
        <div className="grid cursor-pointer grid-flow-row gap-5 md:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="grid-rows-2 rounded-xl border border-gray-300"
              onClick={() => handleCourseClick(course._id)}
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
          <p className="mb-3 text-sm font-medium text-gray-400">
            Bạn chưa sở hữu khóa học nào
          </p>
        </div>
      )}
    </>
  );
}
