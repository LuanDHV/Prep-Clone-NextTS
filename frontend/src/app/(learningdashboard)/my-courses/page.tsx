"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function MyCoursesPage() {
  const { user } = useUser();
  const [courses, setCourses] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const courseType = searchParams.get("courseType");

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
      <h1>Khóa học của tôi</h1>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course._id}>
              <img src={course.image} alt={course.name} width="150" />
              <h2>{course.name}</h2>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Bạn chưa sở hữu khóa học nào.</p>
      )}
    </>
  );
}
