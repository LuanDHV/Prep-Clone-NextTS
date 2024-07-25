import HeaderPayment from "@/components/layouts/HeaderPayment";
import Footer from "@/components/layouts/Footer";

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPayment />
      {children}
      <Footer />
    </>
  );
}
