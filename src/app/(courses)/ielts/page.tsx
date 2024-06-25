import CoursesLayout from "@/components/courses/CoursesLayout";

export default function Ielts() {
  const ContentsIeltsPage = [
    {
      bg1: "bg-[#E5EFFF]",
      colorText: "text-[#0071F9]",
      textMain: "IELTS",
      text1: "Lộ Trình Học",
      text3: "Toàn Diện!",
      text4: "Prep đã giúp hơn 700 học viên đạt IELTS 7.0+",
      text5: "Hãy để Prep giúp bạn!",
      text6: "Học viên đạt ielts 7.0+",
      text7: "Xây Lộ Trình Học IELTS",
      text8: "Cá Nhân Hóa",
      text9: "Lộ trình học chi tiết, phù hợp và dành riêng cho bạn",
      text10: "Tự Học",
      text11: "Mọi Lúc Mọi Nơi Dễ Dàng - Hiệu Quả",
      text12:
        "Study Plan chi tiết, Learning Profile cá nhân hóa cùng sự hỗ trợ sát sao từ Prep bạn sẽ chủ động trong việc luyện thi online, nhưng không một mình !",
      bgFooter: "bg-[#001731]",
      img: "/imgs/courses/ielts/footer-ielts.png",
    },
  ];

  const SlidersIeltsPage = [
    {
      img: "/imgs/courses/ielts/ielts_1.png",
    },
    {
      img: "/imgs/courses/ielts/ielts_2.png",
    },
    {
      img: "/imgs/courses/ielts/ielts_3.png",
    },
  ];

  const RoadMapIeltsPage = [
    {
      course: "IELTS:",
      brand1: "1.0 - 3.5",
      brand2: "4.0 - 5.0",
      brand3: "5.0 - 5.5",
      brand4: "6.0 - 6.5",
      des1: "Mất gốc",
      des2: "Có nền tảng",
      des3: "Nền tảng tốt",
      des4: "Khá",
      aim1: "Cơ bản",
      aim2: "Trung cấp",
      aim3: "Chuyên sâu",
      des5: "Cơ bản",
      des6: "Trung cấp",
      des7: "Chuyên sâu",
    },
  ];
  return (
    <>
      <CoursesLayout
        contents={ContentsIeltsPage}
        sliders={SlidersIeltsPage}
        roadmap={RoadMapIeltsPage}
      />
    </>
  );
}
