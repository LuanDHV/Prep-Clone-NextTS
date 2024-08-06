import MyCourses from "@/components/learningdashboard/MyCourses";
import UserProfile from "@/components/learningdashboard/UserProfile";
import { Link } from "@nextui-org/react";

export default function OverViewPage() {
  return (
    <>
      <div className="">
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
