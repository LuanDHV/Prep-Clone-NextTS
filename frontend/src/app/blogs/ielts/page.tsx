import BlogsLayout from "@/components/blogs/BlogsLayout";
import SliderBlogIelts from "@/components/blogs/SliderBlogIelts";

export default function BlogIelts() {
  return (
    <BlogsLayout
      pageName="IELTS"
      pageContent="Nổi Bật"
      SliderComponent={<SliderBlogIelts />}
    />
  );
}
