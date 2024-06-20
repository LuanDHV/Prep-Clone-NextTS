import Image from "next/image";
import Link from "next/link";
import ButtonFooter from "@/components/layouts/ButtonFooter";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <ButtonFooter />
      <section>
        <div className="container mx-auto h-auto w-full bg-white px-5 py-10 text-sm">
          <div className="first-footer md:grid md:grid-cols-3">
            <div className="grid gap-2 md:gap-5">
              <Image
                src="/imgs/footer/logo.svg"
                alt="logo"
                width={130}
                height={30}
                objectFit="cover"
                loading="lazy"
              />
              <div className="text-base font-bold">
                CÔNG TY CỔ PHẦN CÔNG NGHỆ PREP
              </div>
              <div className="font-medium text-gray-800">
                Mã số doanh nghiệp:
                <span className="ml-1 font-normal text-gray-500">
                  0109817671
                </span>
              </div>
              <div className="font-medium text-gray-800">
                Địa chỉ:
                <span className="ml-1 font-normal text-gray-500">
                  Số nhà 20 Ngách 234/35 Đường Hoàng Quốc Việt, Phường Cổ Nhuế
                  1, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam
                </span>
              </div>
              <div className="font-medium text-gray-800">
                Trụ sở văn phòng:
                <span className="ml-1 font-normal text-gray-500">
                  NO.21-C2 KĐT Nam Trung Yên, P.Trung Hòa, Q.Cầu Giấy, Tp.Hà Nội
                </span>
              </div>
            </div>
            <div className="mt-5 grid grid-flow-col md:ml-10 md:mt-0 md:grid-cols-2">
              <div className="flex flex-col gap-2 md:gap-5">
                <h5 className="font-semibold text-gray-900">THÔNG TIN</h5>
                <Link href="#">Điều kiện và điều khoản giao dịch </Link>
                <Link href="#">Chính sách thanh toán </Link>
                <Link href="#">Chính sách bảo vệ thông tin </Link>
                <Link href="#">Cam kết đầu ra Ielts </Link>
                <Link href="#">Cam kết đầu ra Toeic </Link>
                <Link href="#">Chính sách sử dụng AI </Link>
              </div>
              <div className="flex flex-col gap-2 md:ml-10 md:gap-5">
                <h5 className="font-semibold text-gray-900">VỀ PREP</h5>
                <Link href="#" className="">
                  Giới thiệu
                </Link>
                <Link href="#">Tuyển dụng </Link>
                <h5 className="font-semibold text-gray-900">KẾT NỐI</h5>
                <div className="flex gap-2 md:gap-5">
                  <Link href="#">
                    <Image
                      src="/imgs/footer/ic-facebook.svg"
                      alt="ic-facebook"
                      width={24}
                      height={24}
                      objectFit="cover"
                      loading="lazy"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src="/imgs/footer/ic-mail.svg"
                      alt="ic-mail"
                      width={24}
                      height={24}
                      objectFit="cover"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-5 grid md:ml-20 md:mt-0 md:flex md:flex-col">
              <h5 className="text-base font-semibold text-gray-900">
                TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI
              </h5>
              <div className="mt-5 flex gap-4 md:flex-col">
                <Link href="#">
                  <Image
                    src="/imgs/footer/app-store.svg"
                    alt="app-store"
                    width={160}
                    height={60}
                    objectFit="cover"
                    loading="lazy"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/imgs/footer/gg-play.svg"
                    alt="gg-play"
                    width={160}
                    height={60}
                    objectFit="cover"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>

          <hr className="mt-5 h-[0.8px] w-full border border-gray-300" />

          <div className="second-footer md:mt-5 md:grid md:grid-cols-2">
            <div className="mt-5 grid gap-2 md:mt-0">
              <h5 className="text-base font-semibold text-gray-900">
                TRUNG TÂM ĐÀO TẠO NGOẠI NGỮ PREP
              </h5>
              <div className="font-medium text-gray-800">
                Phòng luyện ảo - trải nghiệm thực tế - công nghệ hàng đầu
              </div>
              <div className="font-medium text-gray-800">
                Hotline:
                <span className="ml-1 font-normal text-gray-500">
                  0931 42 8899
                </span>
              </div>
              <div className="font-medium text-gray-800">
                Địa chỉ:
                <span className="ml-1 font-normal text-gray-500">
                  Số nhà 20, ngách 234/35 đường Hoàng Quốc Việt, phường Cổ Nhuế
                  1, quận Bắc Từ Liêm, TP Hà Nội Giấy chứng nhận hoạt động đào
                  tạo, bồi dưỡng số 1309/QĐ-SGDĐT ngày 31 tháng 07 năm 2023 do
                  Sở Giáo dục và Đào tạo Hà Nội cấp
                </span>
              </div>
            </div>
            <div className="mt-5 grid md:ml-20 md:mt-10 md:flex md:flex-col">
              <h5 className="text-base font-semibold text-gray-900">
                CHỨNG NHẬN BỞI
              </h5>
              <div className="mt-1 flex items-center gap-7">
                <Link href="#">
                  <Image
                    src="/imgs/footer/bct.png"
                    alt="bct"
                    width={176}
                    height={66.58}
                    objectFit="cover"
                    loading="lazy"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/imgs/footer/sectigo.png"
                    alt="sectigo"
                    width={176}
                    height={67.18}
                    objectFit="cover"
                    loading="lazy"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/imgs/footer/dmca.png"
                    alt="dmca"
                    width={224}
                    height={46.45}
                    objectFit="cover"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
