import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderBlogToeic from "../sliders/SliderBlogToeic";

export default function BlogsLayout() {
  return (
    <>
      <div className="h-auto w-full bg-[#292A2D] md:h-screen">
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
              TOEIC
            </span>
          </div>
          <div className="w-full border-b border-white opacity-10"></div>
          <h2 className="text-md flex items-center py-4 font-semibold text-white md:py-6 md:text-xl">
            <div className="mr-2 h-2 w-2 rounded-sm bg-orange-400"></div>
            Nổi Bật
          </h2>
          <SliderBlogToeic />
        </div>
      </div>
    </>
  );
}
