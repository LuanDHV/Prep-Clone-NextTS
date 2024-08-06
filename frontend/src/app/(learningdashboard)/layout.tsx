import Layout from "@/components/learningdashboard/Layout";

export default function LearningDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
