import BlogsLayout from "@/components/blogs/BlogsLayout";
import SliderBlogToeic from "@/components/blogs/SliderBlogToeic";

export default function BlogToeic() {
  return (
    <BlogsLayout
      pageName="TOEIC"
      pageContent="Nổi Bật"
      SliderComponent={<SliderBlogToeic />}
    />
  );
}
