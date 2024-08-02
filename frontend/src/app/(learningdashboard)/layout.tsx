import { UserButton } from "@clerk/nextjs";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function LearningDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <div className="fixed left-0 top-0 z-10 flex h-[66px] w-full items-center justify-between border-b-[2px] border-neutral-200 bg-white px-8 py-3">
        <div className="flex cursor-pointer items-center gap-5">
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          <Link href="/">
            <Image
              src="/imgs/header/logo.svg"
              alt="logo"
              width={85}
              height={24}
              className="object-cover"
            />
          </Link>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="mt-[66px] flex flex-1">
        <div className="fixed bottom-0 top-[66px] w-1/6 border-r-[1px] border-neutral-200 p-4">
          <h2>NavBar</h2>
        </div>
        <main className="ml-[16.67%] w-5/6 p-8">{children}</main>
      </div>
    </div>
  );
}
