import BlogsLayout from "@/components/blogs/BlogsLayout";
import SliderBlogHonor from "@/components/blogs/SliderBlogHonor";

export default function BlogHonor() {
  return (
    <BlogsLayout
      pageName="Hall Of Fame"
      pageContent="Vinh danh học viên"
      SliderComponent={<SliderBlogHonor />}
    />
  );
}
