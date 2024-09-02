import BlogsLayout from "@/components/blogs/BlogsLayout";
import SliderBlogEvent from "@/components/blogs/SliderBlogEvent";

export default function BlogEvent() {
  return (
    <BlogsLayout
      pageName="Tin tức"
      pageContent="Chương trình sự kiện nổi bật"
      SliderComponent={<SliderBlogEvent />}
    />
  );
}
