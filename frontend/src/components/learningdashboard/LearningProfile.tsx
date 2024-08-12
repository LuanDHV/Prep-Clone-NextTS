import Image from "next/image";

export default function LearningProfile() {
  return (
    <>
      <div className="w-full">
        <Image
          src="/imgs/learningdashboard/bee-coming-soon.svg"
          alt="bee-coming-soon"
          width={300}
          height={180}
          className="mx-auto object-cover"
        />
        <div className="mt-10">
          <p className="text-center text-3xl font-bold text-gray-900">
            Tính năng sắp ra mắt
          </p>
          <p className="mx-auto mt-4 text-center text-[#727E90]">
            Prep sẽ sớm ra mắt Learning Profile với chương trình TOEIC dành cho
            bạn. <br /> Đừng quên quay lại sau nhé!
          </p>
        </div>
      </div>
    </>
  );
}
