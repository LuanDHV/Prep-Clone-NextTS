import MyCourses from "@/components/learningdashboard/MyCourses";
import UserProfile from "@/components/learningdashboard/UserProfile";

export default function OverViewPage() {
  return (
    <>
      <div className="p-8">
        <div className="pb-5">
          <UserProfile />
        </div>
        <div className="">
          <p className="py-5 text-xl font-bold">My Courses</p>
          <MyCourses />
        </div>
      </div>
    </>
  );
}
