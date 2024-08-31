import axios from "axios";
import CoursesLayout from "@/components/courses/CoursesLayout";

export default async function Ielts() {
  // Fetch data from the API
  let AimsIeltsPage = [];
  let BrandsIeltsPage = [];
  let CoursesIeltsPage = [];
  let SlidersIeltsPage = [];
  let BenefitsIeltsPage = [];
  let ContentsIeltsPage = [];

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

    AimsIeltsPage = aimsResponse.data.filter(
      (item: any) => item.courseType === "IELTS",
    );

    BrandsIeltsPage = brandsResponse.data.filter(
      (item: any) => item.courseType === "IELTS",
    );
    CoursesIeltsPage = coursesResponse.data.filter(
      (item: any) => item.courseType === "IELTS",
    );
    SlidersIeltsPage = slidersResponse.data.filter(
      (item: any) => item.courseType === "IELTS",
    );
    BenefitsIeltsPage = benefitsResponse.data.filter(
      (item: any) => item.courseType === "IELTS",
    );
    ContentsIeltsPage = contentsResponse.data.filter(
      (item: any) => item.courseType === "IELTS",
    );
  } catch (error) {
    console.error("Error fetching data: ", error);
  }

  return (
    <>
      <CoursesLayout
        contents={ContentsIeltsPage}
        sliders={SlidersIeltsPage}
        brands={BrandsIeltsPage}
        aims={AimsIeltsPage}
        courses={CoursesIeltsPage}
        benefits={BenefitsIeltsPage}
      />
    </>
  );
}
