"use client";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import {
  RadioGroup,
  Radio,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

export default function Roadmap({ brand, aim }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const defaultContent = "content";

  return (
    <>
      <div className="relative">
        <div className="mt-5">
          <div className="mb-5 grid text-xl font-bold text-gray-800 md:grid-cols-2">
            <p>Hãy trọn lộ trình của bạn</p>
            <Link href="#" className="text-base text-[#0071F9] md:text-end">
              Làm bài kiểm tra
            </Link>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col">
            {brand.map((items, index) => (
              <RadioGroup orientation="horizontal" key={index}>
                <div className="mx-auto my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-4/5">
                  <Radio value="1" description={`${items.description}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="w-full text-xl"> {items.brand}</span>
                    </p>
                  </Radio>
                </div>
              </RadioGroup>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-5 text-xl font-bold text-gray-800">
            <p>Chọn tiếp mục tiêu bạn muốn</p>
          </div>
          <div className="grid grid-flow-row lg:grid-flow-col">
            {aim.map((items, index) => (
              <RadioGroup orientation="horizontal" key={index}>
                <div className="mx-auto my-2 grid h-20 w-full items-center rounded-xl bg-white px-5 shadow-lg lg:w-4/5">
                  <Radio value="1" description={`${items.description}`}>
                    <p className="font-bold">
                      {items.course}
                      <span className="text-xl"> {items.aim}</span>
                    </p>
                  </Radio>
                </div>
              </RadioGroup>
            ))}
          </div>
        </div>

        <div className="mt-10 blur-md">
          <div className="mb-5 text-xl font-bold text-gray-800">
            <p>Chi tiết lộ trình học dành cho bạn</p>
          </div>
          <div className="mb-5 grid h-auto w-full rounded-xl bg-white p-5 shadow-lg">
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Lộ trình
              <span className="font-bold text-gray-800"> Mất gốc đến 5.0</span>
            </p>
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Thời gian hoàn thành
              <span className="font-bold text-gray-800"> 4 tháng</span>
            </p>
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Số lượng khoá học
              <span className="font-bold text-gray-800">
                3.400.000 ₫
                <span className="ml-4 inline-block text-sm font-normal text-[#23242D] line-through">
                  4.000.000 ₫
                </span>
              </span>
            </p>
            <p className="grid grid-cols-2 pt-3 font-medium lg:grid-cols-5">
              Thời gian sở hữu
              <span className="font-bold text-red-600"> 30 tháng</span>
            </p>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 mx-auto grid items-center justify-items-center">
          <p className="text-center text-lg font-bold">
            Vui lòng chọn trình độ và mục tiêu đầu ra để xem lộ trình
          </p>

          <Button color="primary" className="mt-4 h-14 w-40 bg-[#0071F9]">
            <Link href="#" className="font-bold">
              Chọn trình độ
            </Link>
          </Button>
        </div>

        {/* <div className="mt-10">
          <div className="mb-5 text-xl font-bold text-gray-800">
            <p>Chi tiết lộ trình học dành cho bạn</p>
          </div>
          <div className="mb-5 grid h-auto w-full rounded-xl bg-white p-5 shadow-lg">
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Lộ trình
              <span className="ml-2 font-bold text-gray-800">
                Mất gốc đến 5.0
              </span>
            </p>
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Thời gian hoàn thành
              <span className="ml-2 font-bold text-gray-800"> 4 tháng</span>
            </p>
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Số lượng khóa học
              <span className="ml-2 font-bold text-gray-800"> 2 khóa</span>
            </p>
            <p className="mb-3 grid grid-cols-2 font-medium lg:grid-cols-5">
              Thành tiền
              <span className="ml-2 font-bold text-gray-800">
                3.400.000 ₫
                <span className="ml-4 inline-block text-sm font-normal text-[#23242D] line-through">
                  4.000.000 ₫
                </span>
              </span>
            </p>
            <p className="grid grid-cols-2 pt-3 font-medium lg:grid-cols-5">
              Thời gian sở hữu
              <span className="ml-2 font-bold text-red-600"> 30 tháng</span>
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-white p-5 shadow-lg md:p-10">
          <div className="">
            <h4 className="text-lg font-bold uppercase text-[#004B8D]">
              CHẶNG 1: LẤY LẠI CĂN BẢN
            </h4>
            <p className="text-gray-500">
              Học sinh sẽ cần bổ sung vốn từ vựng của các chủ đề phổ biến cùng
              chủ điểm ngữ pháp trọng tâm làm tiền đề cho việc làm bài TOEIC
              Listening và Reading ở lộ trình sau.
            </p>
          </div>
          <div className="rounded-xl bg-slate-100 p-2 lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center lg:p-5">
            <div className="lg:grid lg:justify-items-center lg:p-5">
              <div className="mt-5 h-full w-full lg:my-0 lg:w-[300px]">
                <img
                  src="https://storage.googleapis.com/prep-storage-service/course/cover/ypZicNkO76ZyVx4ZKfujVGi41eeoCgyVsC83Zcgl.jpg"
                  alt=""
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 text-xl font-bold lg:text-center">
                <h5 className="text-gray-800">Nền Tảng TOEIC</h5>
                <p className="text-[#004B8D]">
                  850.000 đ
                  <span className="ml-2 text-base font-normal text-gray-400 line-through lg:block">
                    1.000.000 đ
                  </span>
                </p>
              </div>
            </div>

            <div className="grid h-full w-full items-center lg:p-5">
              <div className="mt-5 grid gap-2 md:gap-5 lg:mt-0 lg:p-5">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h4 mr-4 w-4 object-cover text-green-600"
                  />
                  Đầu vào: <span className="ml-2 font-bold">300</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="h4 mr-4 w-4 object-cover text-green-600"
                    />
                    <span className="inline-block md:hidden">Danh sách:</span>
                    <span className="hidden md:inline-block">
                      Danh sách bài học:
                    </span>
                    <span className="ml-2 font-bold">36</span>
                  </div>
                  <div className="">
                    <button className="text-blue-500" onClick={onOpen}>
                      Chi tiết
                    </button>
                    <Modal
                      isOpen={isOpen}
                      onOpenChange={onOpenChange}
                      placement="center"
                      size="lg"
                    >
                      <ModalContent>
                        {(onClose) => (
                          <>
                            <ModalHeader className="flex flex-col gap-1">
                              Modal Title
                            </ModalHeader>
                            <ModalBody>
                              <Accordion>
                                <AccordionItem
                                  key="1"
                                  aria-label="Accordion 1"
                                  title="Accordion 1"
                                >
                                  {defaultContent}
                                </AccordionItem>
                                <AccordionItem
                                  key="2"
                                  aria-label="Accordion 2"
                                  title="Accordion 2"
                                >
                                  {defaultContent}
                                </AccordionItem>
                                <AccordionItem
                                  key="3"
                                  aria-label="Accordion 3"
                                  title="Accordion 3"
                                >
                                  {defaultContent}
                                </AccordionItem>
                              </Accordion>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="danger"
                                variant="light"
                                onPress={onClose}
                              >
                                Close
                              </Button>
                              <Button color="primary" onPress={onClose}>
                                Action
                              </Button>
                            </ModalFooter>
                          </>
                        )}
                      </ModalContent>
                    </Modal>
                  </div>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h4 mr-4 w-4 object-cover text-green-600"
                  />

                  <span className="inline-block md:hidden">Thời gian:</span>
                  <span className="hidden md:inline-block">
                    Thời gian hoàn thành:
                  </span>
                  <span className="ml-2 font-bold">1 tháng</span>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="h4 mr-4 w-4 object-cover text-green-600"
                  />
                  Số người đã học:
                  <span className="ml-2 font-bold">18242</span>
                </div>
                <div className="flex items-center">
                  <div className="hidden xl:block">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="h4 mr-4 w-4 object-cover text-green-600"
                    />
                    Đánh giá:
                  </div>
                  <div className="ml-3">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="h-4 w-4 object-cover text-orange-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="h-4 w-4 object-cover text-orange-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="h-4 w-4 object-cover text-orange-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="h-4 w-4 object-cover text-orange-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="h-4 w-4 object-cover text-orange-400"
                    />
                    <span className="ml-2">(18111+)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
