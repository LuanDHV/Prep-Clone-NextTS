"use client";
import { IOrderData } from "@/types/interfaces";
import { useEffect, useState } from "react";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  useEffect(() => {
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      const orderData: IOrderData = JSON.parse(storedOrderData);
      setPaymentMethod(orderData.paymentMethod || "");
    }
  }, []);

  const handlePaymentMethodChange = async (method: string) => {
    setPaymentMethod(method);

    // Update session storage
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      const orderData: IOrderData = JSON.parse(storedOrderData);
      orderData.paymentMethod = method;
      sessionStorage.setItem("orderData", JSON.stringify(orderData));
      console.log("Order Data Update: ", orderData);
    }
  };

  return (
    <>
      <p className="text-xl font-bold">Phương thức thanh toán</p>
      <div className="my-3 flex flex-col rounded-2xl border-2 p-3">
        <label className="flex w-full cursor-pointer flex-row items-center rounded-xl">
          <input
            type="radio"
            name="paymentMethod"
            className="h-5 w-5"
            checked={paymentMethod === "bank_transfer"}
            onChange={() => handlePaymentMethodChange("bank_transfer")}
          />
          <div className="flex flex-col">
            <p className="text-16 ml-3 font-bold text-gray-800">
              Chuyển khoản qua ngân hàng sử dụng QR code
            </p>
          </div>
        </label>
        {/* Hiển thị mã QR nếu phương thức thanh toán là bank_transfer */}
      </div>
      <div className="my-3 flex flex-col rounded-2xl border-2 p-3">
        <label className="flex w-full cursor-pointer flex-row items-center rounded-xl">
          <input
            type="radio"
            name="paymentMethod"
            className="h-5 w-5"
            checked={paymentMethod === "credit_card"}
            onChange={() => handlePaymentMethodChange("credit_card")}
          />
          <div className="flex flex-col">
            <p className="text-16 ml-3 font-bold text-gray-800">
              Thanh toán bằng thẻ tín dụng / ghi nợ Visa, Master, JCB
            </p>
          </div>
        </label>
      </div>
      <div className="my-3 flex flex-col rounded-2xl border-2 p-3">
        <label className="flex h-full w-full cursor-pointer flex-row items-center rounded-xl">
          <input
            type="radio"
            name="paymentMethod"
            className="h-5 w-5"
            checked={paymentMethod === "atm"}
            onChange={() => handlePaymentMethodChange("atm")}
          />
          <div className="flex flex-col">
            <p className="text-16 ml-3 font-bold text-gray-800">
              Thẻ ATM nội địa / Tài khoản ngân hàng
            </p>
          </div>
        </label>
      </div>
    </>
  );
}
