"use client";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        className="h-16 w-full rounded-xl bg-white font-bold hover:scale-105"
      >
        <div className="text-[20px] text-[#0071F9]">
          <p className="">
            <FontAwesomeIcon
              icon={faHeadphones}
              className="inline-block h-5 w-5 object-cover"
            />
            <span className="ml-2 inline-block"> Đăng ký nhận tư vấn</span>
          </p>
        </div>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
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
                <p className="text-sm font-medium text-gray-500">
                  Tên đầy đủ <strong className="text-red-600">*</strong>
                  <Input
                    isRequired
                    type="fullname"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Số điện thoại <strong className="text-red-600">*</strong>
                  <Input
                    isRequired
                    type="phone"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </p>
                <p className="text-sm font-medium text-gray-500">
                  Email <strong className="text-red-600">*</strong>
                  <Input
                    isRequired
                    type="email"
                    placeholder="Nhập email của bạn"
                  />
                </p>
                <p className="text-sm font-medium text-gray-600">
                  Bạn là
                  <RadioGroup
                    label="Select your favorite city"
                    defaultValue="other"
                  >
                    <div className="grid grid-cols-2">
                      <div className="grid grid-rows-2 gap-2">
                        <Radio value="buenos-aires">Học sinh</Radio>
                        <Radio value="sydney">Người đi làm</Radio>
                      </div>
                      <div className="grid grid-rows-2 gap-2">
                        <Radio value="student">Sinh viên</Radio>
                        <Radio value="other">Khác</Radio>
                      </div>
                    </div>
                  </RadioGroup>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  Bạn đang quan tâm
                  <RadioGroup defaultValue="ielts">
                    <div className="grid grid-cols-2">
                      <div className="grid grid-rows-2 gap-2">
                        <Radio value="ielts">IELTS</Radio>
                        <Radio value="toeic">TOEIC</Radio>
                      </div>
                      <div className="grid grid-rows-2 gap-2">
                        <Radio value="hsk">HSK</Radio>
                      </div>
                    </div>
                  </RadioGroup>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  Lộ trình học và mục tiêu bạn cần tư vấn
                  <Textarea
                    isRequired
                    labelPlacement="outside"
                    placeholder="Hãy cho Prep biết Trình độ hiện tại và Mục tiêu của bạn để Prep có thể tư vấn cho bạn chi tiết nha!"
                  />
                </p>
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
