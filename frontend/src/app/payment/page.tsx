import OrderSummary from "@/components/payment/OrderSummary";
import PaymentMethod from "@/components/payment/PaymentMethod";

export default function Payment() {
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col gap-5 p-5 md:flex-row lg:px-20 xl:px-40">
          {/* Order Summary */}
          <div className="grid h-auto rounded-xl border px-3 py-5 shadow-md md:order-2 md:w-2/5 lg:w-2/6">
            <OrderSummary />
          </div>
          {/* Payment Method */}
          <div className="grid h-full rounded-xl border px-3 py-5 shadow-md md:order-1 md:w-3/5 lg:w-4/6">
            <PaymentMethod />
          </div>
        </div>
      </div>
    </>
  );
}
