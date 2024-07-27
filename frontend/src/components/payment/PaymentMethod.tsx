"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { IOrderData } from "@/types/interfaces";

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      const orderData: IOrderData = JSON.parse(storedOrderData);
      setPaymentMethod(orderData.paymentMethod || "");
    }
  }, []);

  const handlePaymentMethodChange = async (method: string) => {
    setPaymentMethod(method);

    // Cập nhật session storage
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      const orderData: IOrderData = JSON.parse(storedOrderData);
      orderData.paymentMethod = method;
      sessionStorage.setItem("orderData", JSON.stringify(orderData));
      console.log("Order Data Updated: ", orderData);

      if (method === "bank_transfer") {
        // Tính toán số tiền tổng hợp từ orderData
        const parsePrice = (price: string) => {
          return parseFloat(price.replace(/[^0-9]/g, "")); // Loại bỏ ký tự không phải số
        };

        const totalAmount = parsePrice(orderData.roadMap.details.price);

        // Gửi yêu cầu đến backend để tạo URL thanh toán
        try {
          const response = await axios.post(
            "http://localhost:5000/api/payments/create_payment_url",
            {
              amount: totalAmount, // Sử dụng số tiền tổng hợp
              orderDescription: "Thanh toán đơn hàng",
              orderType: "topup", // Loại đơn hàng
              language: "vn",
              bankCode: null, // Không cần thiết cho phương thức thanh toán qua ngân hàng
            },
          );

          // Giả sử backend trả về URL thanh toán chứa mã QR
          setPaymentUrl(response.data.paymentUrl);
        } catch (error) {
          console.error("Error creating payment URL:", error);
        }
      } else {
        setPaymentUrl(null);
      }
    } else {
      console.error("Order data not found in session storage.");
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
        {paymentMethod === "bank_transfer" && paymentUrl && (
          <div>
            <p className="text-16 font-bold text-gray-800">QR Code:</p>
            <img src={paymentUrl} alt="QR Code" />
          </div>
        )}
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
