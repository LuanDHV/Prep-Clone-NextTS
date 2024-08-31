import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
