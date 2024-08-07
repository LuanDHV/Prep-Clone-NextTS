import MyCourses from "@/components/learningdashboard/MyCourses";
import StudyPlant from "@/components/learningdashboard/StudyPlant";
import UserProfile from "@/components/learningdashboard/UserProfile";
import { Link } from "@nextui-org/react";

export default function OverViewPage() {
  return (
    <>
      <div className="p-8">
        <div className="pb-5">
          <UserProfile />
        </div>
        <div className="">
          <StudyPlant />
        </div>
        <div className="">
          <p className="py-5 text-xl font-bold">My Courses</p>
          <MyCourses />
        </div>
      </div>
    </>
  );
}
