"use client";
import { IOrderData } from "@/types/interfaces";
import { useEffect, useState } from "react";

export default function OrderSummary() {
  const [orderData, setOrderData] = useState<IOrderData | null>(null);
  useEffect(() => {
    // Get data from session storage
    const storedOrderData = sessionStorage.getItem("orderData");
    if (storedOrderData) {
      setOrderData(JSON.parse(storedOrderData));
    }
  }, []);

  if (!orderData) {
    return <p>No order data available.</p>;
  }

  return (
    <>
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
      </div>
    </>
  );
}
