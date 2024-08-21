"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
  Textarea,
  Input,
} from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import NotificationModal from "@/components/notification/ModalNotification";
import { ISupports } from "@/types/interfaces";

export default function ButtonModal() {
  // Trạng thái cho modal chính và modal thông báo
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onOpenChange: onFormOpenChange,
  } = useDisclosure();
  const {
    isOpen: isNotificationOpen,
    onOpen: onNotificationOpen,
    onOpenChange: onNotificationOpenChange,
  } = useDisclosure();

  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const [notificationType, setNotificationType] = useState<"success" | "error">(
    "error",
  );

  const initialFormData: ISupports = {
    fullName: "",
    phoneNumber: "",
    email: "",
    goal: "",
    userType: "",
    interest: "",
  };

  const [formData, setFormData] = useState<ISupports>(initialFormData);

  // Handle to update the value of formData
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle sending form data
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/supports",
        formData,
      );

      console.log("Data submitted successfully:", response.data);
      handleNotification(
        "Đăng ký thành công. Chúng tôi sẽ sớm liên hệ!",
        "success",
      );
      // // Reset form data
      setFormData(initialFormData);

      // Close the form modal
      onFormOpenChange();
    } catch (error) {
      console.error("Error submitting data:", error);
      handleNotification(
        "Đăng ký không thành công. Vui lòng nhập đủ thông tin và thử lại!",
        "error",
      );
    }
  };

  // Handle notifications
  const handleNotification = (message: string, type: "success" | "error") => {
    setNotificationMessage(message);
    setNotificationType(type);
    onNotificationOpen();
  };

  return (
    <>
      <Button
        onPress={onFormOpen}
        className="h-16 w-full rounded-xl border border-blue-500 bg-white font-bold hover:scale-105"
      >
        <div className="text-xl text-[#0071F9]">
          <span> Đăng ký nhận tư vấn</span>
        </div>
      </Button>
      <Modal
        isOpen={isFormOpen}
        onOpenChange={onFormOpenChange}
        isDismissable={true}
        isKeyboardDismissDisabled={true}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <p className="text-2xl">Đăng ký tư vấn lộ trình học</p>
                <p className="text-sm font-normal text-gray-800">
                  Bạn hãy để lại thông tin, Prep sẽ liên hệ tư vấn cho mình sớm
                  nha!
                </p>
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  name="fullName"
                  label="Tên đầy đủ"
                  value={formData.fullName}
                  placeholder="Nhập họ và tên của bạn"
                  onChange={handleChange}
                />

                <Input
                  isRequired
                  name="phoneNumber"
                  label="Số điện thoại"
                  value={formData.phoneNumber}
                  placeholder="Nhập số điện thoại của bạn"
                  onChange={handleChange}
                />

                <Input
                  isRequired
                  name="email"
                  label="Email"
                  value={formData.email}
                  placeholder="Nhập email của bạn"
                  onChange={handleChange}
                />

                <RadioGroup
                  name="userType"
                  label="Bạn là"
                  orientation="horizontal"
                  className="text-sm font-medium"
                  value={formData.userType}
                  onChange={handleChange}
                >
                  <Radio value="Student">Học sinh</Radio>
                  <Radio value="University Student">Sinh viên</Radio>
                  <Radio value="Worker">Người đi làm</Radio>
                  <Radio value="Other">Khác</Radio>
                </RadioGroup>

                <RadioGroup
                  name="interest"
                  label="Bạn đang quan tâm"
                  orientation="horizontal"
                  className="text-sm font-medium"
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <Radio value="IELTS">IELTS</Radio>
                  <Radio value="TOEIC">TOEIC</Radio>
                  <Radio value="HSK">HSK</Radio>
                  <Radio value="Prep Talk English">Prep Talk English</Radio>
                </RadioGroup>

                <Textarea
                  name="goal"
                  label="Lộ trình học và mục tiêu bạn cần tư vấn"
                  value={formData.goal}
                  labelPlacement="outside"
                  placeholder="Hãy cho Prep biết Trình độ hiện tại và Mục tiêu của bạn để Prep có thể tư vấn cho bạn chi tiết nha!"
                  className="text-sm font-medium"
                  onChange={handleChange}
                />
              </ModalBody>
              <div className="my-5 px-5">
                <Button
                  className="w-full bg-[#0071F9] font-bold text-white"
                  onClick={handleSubmit}
                >
                  Gửi đăng ký
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
      <NotificationModal
        isOpen={isNotificationOpen}
        onOpenChange={onNotificationOpenChange}
        message={notificationMessage}
        type={notificationType}
      />
    </>
  );
}
