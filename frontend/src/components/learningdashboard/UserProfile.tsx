"use client";
import { useUser } from "@clerk/clerk-react";

export default function UserProfile() {
  const { user, isSignedIn } = useUser();

  if (!isSignedIn) {
    return <div>Not signed in</div>;
  }
  return (
    <>
      <div className="flex items-center gap-5">
        <img
          src={user.imageUrl}
          alt="user-img"
          className="h-[60px] w-[60px] rounded-full"
        />
        <div className="">
          <p className="text-xl font-bold text-gray-900">
            Xin chào, {user.lastName}
          </p>
          <p className="text-sm text-gray-600">
            Cùng Prep tiến bộ mỗi ngày nào!
          </p>
        </div>
      </div>
    </>
  );
}
