import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogsLayout() {
  return (
    <>
      <div className="h-screen w-full bg-[#292A2D]">
        <div className="mx-auto w-5/6">
          <div className="flex gap-2 py-4 text-sm font-semibold text-[#9CA3AF] md:py-6">
            <span>
              <FontAwesomeIcon icon={faHouse} className="mr-2" />
              Trang chủ
            </span>
            <span>
              <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
              Blog
            </span>
            <span>
              <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
              IELTS
            </span>
          </div>
          <div className="w-full border-b border-white opacity-10"></div>
          <h2 className="text-md flex items-center py-4 font-semibold text-white md:py-6 md:text-xl">
            <div className="mr-2 h-2 w-2 rounded-sm bg-orange-400"></div>
            Nổi Bật
          </h2>
          <div className="mx-auto w-full md:w-4/6">
            <img
              src="https://cms-static-assets.prepcdn.com/uploads/dong_tu_khoi_phat_628ab01585.png"
              alt=""
              className="rounded-lg object-cover"
            />
            <p className="py-4 text-center text-white md:py-6 md:text-xl">
              Động từ khởi phát là gì? Tổng hợp 10 động từ khởi phát tiếng Anh
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
