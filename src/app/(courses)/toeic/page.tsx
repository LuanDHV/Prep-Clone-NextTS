import CoursesLayout from "@/components/courses/CoursesLayout";

export default function Toeic() {
  const ContentsToeicPage = [
    {
      bg1: "bg-slate-100",
      colorText: "text-[#004B8D]",
      textMain: "TOEIC",
      text1: "Luyên Thi",
      text3: "Hiệu Quả!",
      text4: "Cơ hội rộng mở - Chinh phục công việc như mơ !!!",
      text5: "",
      text6: "Học viên đạt Toeic 800+",
      text7: "Xây Lộ Trình Luyện Thi TOEIC",
      text8: "Cá Nhân Hóa",
      text9: "Lộ trình học chi tiết, phù hợp và dành riêng cho bạn",
      text10: "Luyện Thi",
      text11: "Cấp Tốc - Hiệu Quả",
      text12: "Chủ động học với Study Plan và Learning Profile cá nhân hóa.",
      bgFooter: "bg-[#001731]",
      img: "/imgs/courses/toeic/footer-toeic.png",
    },
  ];

  const SlidersToeicPage = [
    {
      img: "/imgs/courses/toeic/toeic_1.png",
    },
    {
      img: "/imgs/courses/toeic/toeic_2.png",
    },
    {
      img: "/imgs/courses/toeic/toeic_3.png",
    },
  ];

  const RoadMapToeicPage = [
    {
      course: "TOEIC:",
      brand1: "1 - 295",
      brand2: "300 - 595",
      brand3: "600 - 650",
      des1: "Mất gốc",
      des2: "Có nền tảng",
      des3: "Nền tảng tốt",
      aim1: "300",
      aim2: "600",
      aim3: "800",
      des5: "Cơ bản",
      des6: "Khá",
      des7: "Xuất Sắc",
    },
  ];

  return (
    <>
      <CoursesLayout
        contents={ContentsToeicPage}
        sliders={SlidersToeicPage}
        roadmap={RoadMapToeicPage}
      />
    </>
  );
}
