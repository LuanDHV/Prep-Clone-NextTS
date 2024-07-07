import axios from "axios";
import CoursesLayout from "@/components/courses/CoursesLayout";

export default async function Toeic() {
  // Fetch data from the API
  let AimsToeicPage = [];
  let BrandsToeicPage = [];
  let CoursesToeicPage = [];
  let SlidersToeicPage = [];
  let BenefitsToeicPage = [];
  let ContentsToeicPage = [];

  try {
    const [
      aimsResponse,
      brandsResponse,
      coursesResponse,
      slidersResponse,
      benefitsResponse,
      contentsResponse,
    ] = await Promise.all([
      axios.get("http://localhost:5000/api/aims"),
      axios.get("http://localhost:5000/api/brands"),
      axios.get("http://localhost:5000/api/courses"),
      axios.get("http://localhost:5000/api/sliders"),
      axios.get("http://localhost:5000/api/benefits"),
      axios.get("http://localhost:5000/api/contents"),
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
    SlidersToeicPage = slidersResponse.data.filter(
      (item: any) => item.courseType === "TOEIC",
    );
    BenefitsToeicPage = benefitsResponse.data.filter(
      (item: any) => item.courseType === "TOEIC",
    );
    ContentsToeicPage = contentsResponse.data.filter(
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
