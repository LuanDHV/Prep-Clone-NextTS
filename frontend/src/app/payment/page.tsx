"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IOrderData } from "@/types/interfaces";
import { useDisclosure } from "@nextui-org/modal";
import NotificationModal from "@/components/notification/ModalNotification";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export default function Payment() {
  const { user } = useUser();
  const { isOpen, onOpenChange } = useDisclosure();
  const [orderData, setOrderData] = useState<IOrderData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "error",
  );

  useEffect(() => {
    // Get data from session storage
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
  }, []);

  const handlePayment = async () => {
    if (!paymentMethod) {
      setNotificationMessage("Vui lòng chọn phương thức thanh toán.");
      setNotificationType("error");
      onOpenChange();
      return false;
    }

    if (orderData && user) {
      try {
        // Convert quantity from character string to integer
        const amount = parseInt(
          orderData.roadMap.details.price.replace(/[^\d]/g, ""),
          10,
        );
        // Call backend to create order
        const response = await axios.post(
          "http://localhost:5000/api/payments/create-order",
          {
            userId: user.id,
            fullName: orderData.user.fullName,
            email: orderData.user.email,
            roadMapName: orderData.roadMap.name,
            totalCourses: orderData.roadMap.details.courses,
            duration: orderData.roadMap.details.duration,
            coupon: orderData.coupon,
            courses: orderData.roadMap.courses,
            amount,
          },
        );

        const { order_url } = response.data;

        // Redirect users to ZaloPay payment page
        window.location.href = order_url;
      } catch (error) {
        console.error("Error creating order:", error);
      }
    }
  };

  const handlePaymentMethodChange = (event: any) => {
    setPaymentMethod(event.target.value);
  };

  if (!orderData) {
    return <></>; // Or handle the loading state as you prefer
  }

  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col gap-5 p-5 md:flex-row lg:px-20 xl:px-40">
          {/* Order Summary */}
          <div className="grid h-auto rounded-xl border px-3 py-5 shadow-md md:order-2 md:w-2/5 lg:w-2/6">
            <div className="flex items-center px-2">
              <p className="font-bold">Thông tin thanh toán</p>
            </div>
            <div className="mt-5">
              <div className="flex items-center justify-between px-2 py-2">
                <p className="text-sm">Họ và tên</p>
                <p className="text-sm font-bold">{orderData.user.fullName}</p>
              </div>
              <div className="flex items-center justify-between border-t px-2 py-2">
                <p className="text-sm">Email</p>
                <p className="text-sm font-bold">{orderData.user.email}</p>
              </div>
              <div className="flex items-center justify-between border-t px-2 py-2">
                <p className="text-sm">Lộ trình</p>
                <p className="text-sm font-bold">{orderData.roadMap.name}</p>
              </div>
              <div className="flex items-center justify-between border-t px-2 py-2">
                <p className="text-sm">Tổng số khóa học</p>
                <p className="text-sm font-bold">
                  {orderData.roadMap.details.courses}
                </p>
              </div>
              <div className="flex items-center justify-between border-t px-2 py-2">
                <p className="text-sm">Thời gian sở hữu khóa học</p>
                <p className="text-sm font-bold text-red-500">
                  {orderData.roadMap.details.duration}
                </p>
              </div>
              <div className="flex items-center justify-between border-t px-2 py-2">
                <p className="text-sm">Mã giảm giá</p>
                <p className="text-sm font-bold">{orderData.coupon}</p>
              </div>
              <div className="flex items-center justify-between border-t px-2 pt-10">
                <p className="text-xl font-bold">Tổng tiền</p>
                <p className="text-xl font-bold text-blue-500">
                  {orderData.roadMap.details.price}
                </p>
              </div>
              <button
                className="mt-5 w-full rounded bg-blue-500 py-2 font-bold text-white"
                onClick={handlePayment}
              >
                Thanh toán
              </button>
            </div>
          </div>
          {/* Payment Method */}
          <div className="grid h-full rounded-xl border px-3 py-5 shadow-md md:order-1 md:w-3/5 lg:w-4/6">
            <p className="text-xl font-bold">Phương thức thanh toán</p>
            <div className="my-3 flex flex-col rounded-2xl border-2 p-3">
              <label className="flex w-full cursor-pointer flex-row items-center rounded-xl">
                <input
                  type="radio"
                  name="paymentMethod"
                  className="h-5 w-5"
                  onChange={handlePaymentMethodChange}
                />
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="text-16 ml-3 font-bold text-gray-800">
                    Thanh toán qua cổng Zalo Pay
                  </p>
                  <Image
                    src="/imgs/payments/zalopay-logo.png"
                    alt="zalopay-logo"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
              </label>
              {/* Show More */}
            </div>
          </div>
        </div>
      </div>
      {/* Notification Modal */}
      <NotificationModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        message={notificationMessage}
        type={notificationType}
      />
    </>
  );
}
