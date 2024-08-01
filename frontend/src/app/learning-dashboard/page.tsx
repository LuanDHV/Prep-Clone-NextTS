"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export default function LearningDashboard() {
  const { user } = useUser();
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (user) {
          const response = await axios.get(
            `http://localhost:5000/api/orders/user-courses/${user.id}`,
            // { headers: { Authorization: `Bearer ${user.getToken()}` } },
          );
          setCourses(response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [user]);

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div>
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
        <p>Chưa có khóa học nào.</p>
      )}
    </div>
  );
}
