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

export default function ButtonModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="h-16 w-full rounded-xl border border-blue-500 bg-white font-bold hover:scale-105"
      >
        <div className="text-xl text-[#0071F9]">
          <span className=""> Đăng ký nhận tư vấn</span>
        </div>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        isKeyboardDismissDisabled={true}
        placement="center"
        size="lg"
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
                  label=" Tên đầy đủ"
                  type="fullname"
                  placeholder="Nhập họ và tên của bạn"
                />

                <Input
                  isRequired
                  label="Số điện thoại"
                  type="phone"
                  placeholder="Nhập số điện thoại của bạn"
                />

                <Input
                  isRequired
                  label="Email"
                  type="email"
                  placeholder="Nhập email của bạn"
                />
                <RadioGroup
                  label="Bạn là"
                  defaultValue="other"
                  orientation="horizontal"
                  className="text-sm font-medium"
                >
                  <Radio value="hs">Học sinh</Radio>
                  <Radio value="ndl">Người đi làm</Radio>
                  <Radio value="sv">Sinh viên</Radio>
                  <Radio value="k">Khác</Radio>
                </RadioGroup>
                <RadioGroup
                  label="Bạn đang quan tâm"
                  defaultValue="ielts"
                  orientation="horizontal"
                  className="text-sm font-medium"
                >
                  <Radio value="ielts">IELTS</Radio>
                  <Radio value="toeic">TOEIC</Radio>
                </RadioGroup>
                <Textarea
                  label=" Lộ trình học và mục tiêu bạn cần tư vấn"
                  labelPlacement="outside"
                  placeholder="Hãy cho Prep biết Trình độ hiện tại và Mục tiêu của bạn để Prep có thể tư vấn cho bạn chi tiết nha!"
                  className="text-sm font-medium"
                />
              </ModalBody>
              <div className="my-5 px-5">
                <Button className="w-full bg-[#0071F9] font-bold text-white">
                  Gửi đăng ký
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
