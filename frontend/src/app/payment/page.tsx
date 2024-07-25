export default function Payment() {
  return (
    <>
      <div className="h-screen">
        <div className="flex gap-5 p-5 md:grid-flow-col md:px-20 lg:px-40">
          {/* Order Summary */}
          <div className="grid h-60 grid-rows-4 rounded-xl border px-3 py-5 shadow-md md:order-2 md:w-2/6">
            <div className="flex items-center px-2">
              <p className="font-bold">Tóm tắt học phí</p>
            </div>
            <div className="flex items-center px-2 py-3">
              <p className="text-sm font-bold">3 khóa học</p>
            </div>
            <div className="flex items-center justify-between border-t px-2 py-2">
              <p className="text-sm">Tạm tính</p>
              <p className="font-bold">100000 đ</p>
            </div>
            <div className="flex items-center justify-between border-t px-2 py-2">
              <p className="">Tổng tiền</p>
              <p className="text-xl font-bold text-blue-500">100000 đ</p>
            </div>
          </div>

          {/* Payment Method */}
          <div className="grid h-full rounded-xl border px-3 py-5 shadow-md md:order-1 md:w-4/6">
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
