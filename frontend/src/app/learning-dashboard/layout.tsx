import HeaderLearningDashboard from "@/components/layouts/HeaderLearningDashboard";

export default function LearningDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <HeaderLearningDashboard />
      <div className="mt-[66px] flex flex-1">
        <div className="fixed bottom-0 top-[66px] w-1/6 border-r-[1px] border-neutral-200 p-4">
          <h2>NavBar</h2>
        </div>
        <main className="ml-[16.67%] w-5/6 p-8">{children}</main>
      </div>
    </div>
  );
}
