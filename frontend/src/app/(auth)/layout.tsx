import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="h-screen w-full lg:p-8">
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#E5EFFF] lg:grid lg:grid-cols-2 lg:justify-items-center">
          <div className="hidden w-[550px] lg:block">
            <Image
              src="/imgs/auth/decor.png"
              alt="decor"
              width={300}
              height={200}
              className="object-cover"
            />
            <h3 className="mt-3 text-[40px] font-extrabold text-blue-500">
              Miễn Phí Kiểm Tra Trình Độ
            </h3>
            <p className="mt-3 text-xl font-medium text-gray-600">
              Kiểm tra trình độ hoàn toàn miễn phí. <br />
              Chỉ cần 1 tài khoản duy nhất, bạn có thể thực hiện các bài Kiểm
              Tra Đầu Vào để xác định trình độ nhanh chóng.
            </p>
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
}
