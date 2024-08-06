import MyCourses from "@/components/learningdashboard/MyCourses";

export default function MyCoursesPage() {
  return (
    <>
      <p className="text-3xl font-bold">My Courses</p>
      <p className="pb-10 pt-5">
        Các khóa học bạn đang sở hữu đã được chia theo từng cấp trình độ, tương
        ứng với mỗi chặng mục tiêu. Hãy chọn trình độ mà bạn muốn bắt đầu nhé.
      </p>
      <MyCourses />
    </>
  );
}
