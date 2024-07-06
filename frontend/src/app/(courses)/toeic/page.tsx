import axios from "axios";
import CoursesLayout from "@/components/courses/CoursesLayout";

export default async function ToeicPage() {
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

  const BenefitsToeicPage = [
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

  // Fetch data from the API
  let AimsToeicPage = [];
  let BrandsToeicPage = [];
  let CoursesToeicPage = [];

  try {
    const [aimsResponse, brandsResponse, coursesResponse] = await Promise.all([
      axios.get("http://localhost:5000/api/aims"),
      axios.get("http://localhost:5000/api/brands"),
      axios.get("http://localhost:5000/api/courses"),
    ]);

    AimsToeicPage = aimsResponse.data.filter(
      (item: any) => item.courseType === "TOEIC",
    );

    BrandsToeicPage = brandsResponse.data.filter(
      (item: any) => item.courseType === "TOEIC",
    );
    CoursesToeicPage = coursesResponse.data.filter(
      (item: any) => item.courseType === "TOEIC",
    );
  } catch (error) {
    console.error("Error fetching data: ", error);
  }

  return (
    <>
      <CoursesLayout
        contents={ContentsToeicPage}
        sliders={SlidersToeicPage}
        brands={BrandsToeicPage}
        aims={AimsToeicPage}
        courses={CoursesToeicPage}
        benefits={BenefitsToeicPage}
      />
    </>
  );
}
