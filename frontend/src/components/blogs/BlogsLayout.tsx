import { IBlogsLayout } from "@/types/interfaces";
import { faChevronRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogsLayout({
  pageName,
  pageContent,
  SliderComponent,
}: IBlogsLayout) {
  return (
    <>
      <div className="h-auto w-full bg-[#292A2D] md:h-screen">
        <div className="mx-auto w-5/6">
          <div className="flex gap-2 py-4 text-sm font-semibold text-[#9CA3AF] md:py-6">
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faHouse}
                className="mr-2 h-4 w-4 object-cover"
              />
              Trang chủ
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 h-4 w-4 object-cover"
              />
              Blog
            </span>
            <span className="flex items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="mr-2 h-4 w-4 object-cover"
              />
              {pageName}
            </span>
          </div>
          <div className="w-full border-b border-white opacity-10"></div>
          <h2 className="text-md flex items-center py-4 font-semibold text-white md:py-6 md:text-xl">
            <div className="mr-2 h-2 w-2 rounded-sm bg-orange-400"></div>
            {pageContent}
          </h2>
          {SliderComponent}
        </div>
      </div>
    </>
  );
}
