"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import { IReview } from "@/types/interfaces";

export default function SliderReviews() {
  const [showFullContent, setShowFullContent] = useState(Array(7).fill(false));

  const toggleContent = (index: number) => {
    setShowFullContent((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const renderContent = (content: string, index: number) => {
    if (showFullContent[index]) {
      return content;
    } else {
      return content.length > 300 ? content.substring(0, 300) + "..." : content;
    }
  };

  const SliderReviews: IReview[] = [
    {
      name: "Lê Thanh Tú",
      avatar: "/imgs/students/avt-1.png",
      content:
        "Nội dung bài giảng là yếu tố quan trọng nhất đối với mình. Và Prep đã khiến mình u mê đến mức lạc lối luôn. Qua trải nghiệm cá nhân, mình nhận ra rằng nền tảng là điều thiết yếu. Có thể mình đã được luyện rất nhiều vì học chuyên, nhưng mình chưa được học bài bản nên kĩ năng làm bài không thực sự chắc chắn. Thông qua nội dung học ở Prep, đặc biệt phần Reading và Writing, mình đã có tiến bộ rõ rệt trong tốc độ cũng như độ chính xác khi làm bài, Writing biết cách sắp xếp ý tứ, câu từ logic hơn hẳn, Reading biết cách skim và scan “chuyên nghiệp” hơn hồi học lỏm từ các bài post trên mạng. Còn phần Speaking thì được học bài bản như vậy với một số tiền phải nói là rẻ so với những trung tâm khác, khiến mình cảm thấy rất biết ơn Prep🥲, cứ như Prep cứu mình từ địa ngục nói ngọng líu ngọng lơ sang nói trôi chảy và có nhấn nhá ấy.",
    },
    {
      name: "Trần Vũ Khánh Quỳnh",
      avatar: "/imgs/students/avt-2.png",
      content:
        "Quá trời kiến thức hay có thể khai thác ra từ việc làm bài tập trên Prep. Mà bài tập thì logic với nhau lắm luôn ý. Như khi mình học Writing Chuyên sâu, thay vì phải làm dạng dịch câu liền thì Prep sắp xếp thứ tự học và thực hành như vầy: Học từ vựng → Làm bài tập nhỏ để nhớ từ vựng → Chọn chức năng tương ứng với câu → Dịch câu từ Tiếng Việt sang Tiếng Anh. Đúng kiểu học đến đâu là nắm lòng đến đó luôn các bạn ạ.",
    },
    {
      name: "Hà Phương",
      avatar: "/imgs/students/avt-3.png",
      content:
        "Trong khóa IELTS mình đang học, bạn sẽ được cung cấp đủ kiến thức và định hướng tư duy để xử lý từng dạng bài của 4 kỹ năng nghe - nói - đọc - viết và đặc biệt được giáo viên chấm, chữa rất chi tiết 2 kỹ năng chủ động là nói - viết, nhất là với ai muốn tiến bộ nhanh thì việc được chữa bài là bắt buộc luôn ấy, mình cũng đang nộp bài để thầy cô PREP chữa cho mỗi ngày đây~",
    },
    {
      name: "Giang Thu Thảo",
      avatar: "/imgs/students/avt-4.png",
      content:
        "Em rất vui vì đã được trải nghiệm khóa Toeic của Prep.  Học qua Lộ trình đầy đủ 3 chặng từ Cơ Bản, Trung Cấp, Chuyên Sâu TOEIC em mới thấy kiến thức mình tiếp thu được đã vận dụng trực tiếp vào thực tế luôn, chứ không như kiểu luyện Cấp Tốc, học xong lại quên mất. Đặc biệt vốn từ vựng của em tích lũy nhanh khủng khiếp nhờ phương pháp học rất hay ở Prep. Bản thân em thấy rằng việc sở hữu vố...",
    },
    {
      name: "Nguyễn Diệu Vân",
      avatar: "/imgs/students/avt-5.png",
      content:
        "Cũng như mọi người, trước đây mình học Speaking chẳng theo phương pháp gì cả, chính vì vậy mà không có ứng dụng được nhiều kiến thức. Học PREP xong mình mới vỡ lẽ ra khi học IELTS, mình có thể vận dụng và khai thác cả từ cuộc sống chứ không chỉ học lý thuyết học thuật. Và đặc biệt khoá Speaking trong combo IELTS chuyên sâu 4 kỹ năng PLUS thì đỉnh miễn bàn, vì được học theo phương pháp Guided Discovery - vừa mang tính học thuật lại vẫn có cả tình huống giao tiếp - một công đôi việc luôn.",
    },
    {
      name: "Mạnh Khanh",
      avatar: "/imgs/students/avt-6.png",
      content:
        "Tranh thủ đi cách ly ở nước bạn 14 ngày, Khanh dùng PREP để trau dồi kỹ năng tiếng Anh của mình để sẵn sàng học tập ở đây. Khanh học theo đúng lộ trình IELTS chuyên sâu 70 ngày của PREP nên mỗi lần học tập rất đơn giản, không cần phải nghĩ hôm nay mình sẽ học gì, chỉ cần mở laptop lên và học đúng, học đủ kiến thức mà mình cần thôi! Tất cả các khóa học trên PREP đều có lộ trình chi tiết đến từng ngày, từng buổi học, Khanh nghĩ điều này cực kì tốt cho các bạn tự học hoặc bận rộn như mình nè.",
    },
    {
      name: "Nguyễn Hà Trang",
      avatar: "/imgs/students/avt-7.png",
      content:
        "Độ dài mỗi video: đây là điều mình rất thích ở Prep. Prep biết chia thời lượng video rất chuẩn, bài giảng dài nhất mình từng học còn chưa đến 20 phút, rất ngắn gọn, súc tích mà vẫn dễ hiểu, có ví dụ đầy đủ, rõ ràng, cộng thêm biết nhiều từ mới hay có thể áp dụng cho nhiều kĩ năng. Học Prep chưa bao giờ khiến mình cảm thấy bị overload, có khi còn ngóng chờ để được học tiếp í. Có một điều mình mãi vẫn chưa bỏ được là học Prep rồi thì mình học liền tù tì hết cả tối luôn, khiến thời gian cho các môn khác bị lỡ nên mấy lần phải thức khuya làm bài",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="custom-swiper-pagination"
    >
      {SliderReviews.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="mb-[50px] h-auto w-full rounded-xl bg-white p-5 shadow-lg">
            <div className="flex h-16 w-full justify-start">
              <Image
                src={slide.avatar}
                alt="avt-students"
                width={64}
                height={64}
                quality={100}
                className="rounded-full object-cover"
              />
              <div className="ml-2 p-2">
                <span className="font-bold">{slide.name}</span>
                <div className="flex">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#FFD43B" }}
                    className="h-4 w-4 object-cover"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#FFD43B" }}
                    className="h-4 w-4 object-cover"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#FFD43B" }}
                    className="h-4 w-4 object-cover"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#FFD43B" }}
                    className="h-4 w-4 object-cover"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: "#FFD43B" }}
                    className="h-4 w-4 object-cover"
                  />
                  <span className="ml-2 text-gray-400">2 năm trước</span>
                </div>
              </div>
            </div>
            <p className="mt-4 h-56 lg:h-72 xl:h-40">
              {renderContent(slide.content, index)}
            </p>
            {slide.content.length > 300 && (
              <button
                onClick={() => toggleContent(index)}
                className="mt-4 text-blue-500"
              >
                {showFullContent[index] ? "Thu gọn" : "Xem thêm"}
              </button>
            )}
            <div className="my-10 h-1 border-t border-[#b5bbc6]"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
