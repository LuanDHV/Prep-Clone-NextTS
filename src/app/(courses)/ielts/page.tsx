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

  const BrandIeltsPage = [
    {
      course: "IELTS:",
      brand: "1.0 - 3.5",
      description: "Mất gốc",
    },
    {
      course: "IELTS:",
      brand: "4.0 - 5.0",
      description: "Có nền tảng",
    },
    {
      course: "IELTS:",
      brand: "5.0 - 5.5",
      description: "Nền tảng tốt",
    },
    {
      course: "IELTS:",
      brand: "6.0 - 6.5",
      description: "Khá",
    },
  ];

  const AimIeltsPage = [
    {
      course: "IELTS:",
      aim: "Cơ bản",
      description: "Cơ bản",
    },
    {
      course: "IELTS:",
      aim: "Trung cấp",
      description: "Trung cấp",
    },
    {
      course: "IELTS:",
      aim: "Chuyên sâu",
      description: "Chuyên sâu",
    },
  ];

  const BenefitIeltsPage = [
    {
      text: "12 đề cambridge",
    },
    {
      text: "Bộ đề thi Ielts writing cập nhật",
    },
    {
      text: "Bộ đề thi và dự đoán Ielts speaking cập nhật",
    },
    {
      text: "Hỗ trợ qua chat trực tiếp",
    },
    {
      text: "Tham gia sự kiện cùng thầy cô, chuyên gia",
    },
    {
      text: "Hỗ trợ qua email và cộng đồng học tập",
    },
    {
      text: "Trao đổi với giáo viên chấm bài",
    },
  ];

  return (
    <>
      <CoursesLayout
        contents={ContentsIeltsPage}
        sliders={SlidersIeltsPage}
        brand={BrandIeltsPage}
        aim={AimIeltsPage}
        benefit={BenefitIeltsPage}
      />
    </>
  );
}
