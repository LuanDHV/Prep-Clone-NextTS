import OrderSummary from "@/components/payment/OrderSummary";

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
            <p className="text-xl font-bold">Phương thức thanh toán</p>
            <div className="my-3 flex flex-col rounded-2xl border-2 p-3">
              <label className="flex w-full cursor-pointer flex-row items-center rounded-xl">
                <input type="radio" name="paymentMethod" className="h-5 w-5" />
                <div className="flex flex-col">
                  <p className="text-16 ml-3 font-bold text-gray-800">
                    Chuyển khoản qua ngân hàng sử dụng QR code
                  </p>
                </div>
              </label>
              {/* on choosed show here */}
            </div>
            <div className="my-3 flex flex-col rounded-2xl border-2 p-3">
              <label className="flex w-full cursor-pointer flex-row items-center rounded-xl">
                <input type="radio" name="paymentMethod" className="h-5 w-5" />
                <div className="flex flex-col">
                  <p className="text-16 ml-3 font-bold text-gray-800">
                    Thanh toán bằng thẻ tín dụng / ghi nợ Visa,Master,JCB
                  </p>
                </div>
              </label>
              {/* on choosed show here */}
            </div>
            <div className="my-3 flex flex-col rounded-2xl border-2 p-3">
              <label className="flex h-full w-full cursor-pointer flex-row items-center rounded-xl">
                <input type="radio" name="paymentMethod" className="h-5 w-5" />
                <div className="flex flex-col">
                  <p className="text-16 ml-3 font-bold text-gray-800">
                    Thẻ ATM nội địa / Tài khoản ngân hàng
                  </p>
                </div>
              </label>
              {/* on choosed show here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
