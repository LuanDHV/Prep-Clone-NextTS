import CoursesLayout from "@/components/courses/CoursesLayout";

export default function ToeicPage() {
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

  const BrandToeicPage = [
    {
      course: "TOEIC:",
      brand: "1 - 295",
      description: "Mất gốc",
    },
    {
      course: "TOEIC:",
      brand: "300 - 595",
      description: "Có nền tảng",
    },
    {
      course: "TOEIC:",
      brand: "600 - 650",
      description: "Nền tảng tốt",
    },
  ];

  const AimToeicPage = [
    {
      course: "TOEIC:",
      aim: "300",
      description: "Cơ bản",
    },
    {
      course: "TOEIC:",
      aim: "600",
      description: "Khá",
    },
    {
      course: "TOEIC:",
      aim: "800",
      description: "Xuất Sắc",
    },
  ];

  const BenefitToeicPage = [
    {
      text: "Luyện Test Practice Toeic Miễn Phí",
    },
    {
      text: "Tham gia sự kiện cùng thầy cô, chuyên gia",
    },
    {
      text: "Hỗ trợ qua email và cộng đồng học tập",
    },
    {
      text: "Hỗ trợ qua chat trực tiếp",
    },
  ];

  return (
    <>
      <CoursesLayout
        contents={ContentsToeicPage}
        sliders={SlidersToeicPage}
        brand={BrandToeicPage}
        aim={AimToeicPage}
        benefit={BenefitToeicPage}
      />
    </>
  );
}
