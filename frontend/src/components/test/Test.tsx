"use client";
import { IDataTest } from "@/types/interfaces";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Test() {
  const [selectedCourseType, setSelectedCourseType] = useState("IELTS");
  const [selectedRadio, setSelectedRadio] = useState(0);

  const handleSelectedIelts = () => {
    setSelectedCourseType("IELTS");
  };

  const handleSelectedToeic = () => {
    setSelectedCourseType("TOEIC");
  };

  const dataTestIelts: IDataTest[] = [
    {
      title: "IELTS Quick Test 1",
      time: "01:00:00",
      description:
        "Bài thi được chia làm ba phần với tổng cộng 20 câu hỏi, mỗi câu 1 điểm",
    },
    {
      title: "IELTS Full test 1",
      time: "01:30:00",
      description:
        "Bài thi được chia làm hai phần: Listening (4 sections) và Reading (3 sections) với 40 câu hỏi cho mỗi phần.",
    },
    {
      title: "IELTS Quick Test 2",
      time: "01:00:00",
      description:
        "Bài thi được chia làm ba phần với tổng cộng 20 câu hỏi, mỗi câu 1 điểm",
    },
    {
      title: "IELTS Full Test 2",
      time: "01:30:00",
      description:
        "Bài thi được chia làm hai phần: Listening (4 sections) và Reading (3 sections) với 40 câu hỏi cho mỗi phần.",
    },
  ];

  const dataTestToeic: IDataTest[] = [
    {
      title: "TOEIC Full Test (Listening + Reading)",
      time: "02:00:00",
      description:
        "Bài thi gồm 2 phần - Bài Nghe (100 câu) và Bài Đọc (100 câu)",
    },
    {
      title: "TOEIC Quick Test (Listening + Reading)",
      time: "00:30:00",
      description:
        "Bài thi được sử dụng để đánh giá nhanh trình độ của học sinh cho kĩ năng TOEIC Listening và TOEIC Reading",
    },
    {
      title: "TOEIC Entry test 4 KN",
      time: "00:30:00",
      description:
        "Bài thi được sử dụng để đánh giá nhanh trình độ của học sinh cho các cặp kĩ năng: Listening và Reading - Speaking và Writing",
    },
  ];
  const selectedDataTest =
    selectedCourseType === "IELTS" ? dataTestIelts : dataTestToeic;

  useEffect(() => {
    setSelectedRadio(0);
  }, [selectedCourseType]);

  return (
    <div className="h-auto w-full">
      <div className="mt-14 h-32 bg-gray-100 py-10 pl-5 text-left md:mt-0 md:pl-40">
        <h3 className="text-xl font-bold text-gray-900">Kiểm tra đầu vào</h3>
        <p className="text-sm font-medium text-gray-900">
          Hãy chọn một đề kiểm tra phù hợp với bạn để đánh giá năng lực của mình
          nhé !
        </p>
      </div>
      <h3 className="my-10 text-center text-xl font-bold text-black">
        Chọn kỳ thi
      </h3>
      <div className="mx-auto flex w-5/6 items-center justify-center gap-5 xl:w-3/6">
        <Button
          className={`w-2/4 border ${selectedCourseType === "IELTS" ? `border-b-4 border-blue-500 text-blue-500` : `border-gray-300 text-black`} bg-white font-bold`}
          size="lg"
          onClick={handleSelectedIelts}
        >
          IELTS
        </Button>
        <Button
          className={`w-2/4 border ${selectedCourseType === "TOEIC" ? `border-b-4 border-blue-500 text-blue-500` : `border-gray-300 text-black`} bg-white font-bold`}
          size="lg"
          onClick={handleSelectedToeic}
        >
          TOEIC
        </Button>
      </div>
      <h3 className="my-10 text-center text-xl font-bold text-black">
        Chọn đề thi
      </h3>
      {selectedDataTest.map((items: IDataTest, index: number) => (
        <label
          className={`mx-auto mb-6 flex w-5/6 cursor-pointer items-center rounded-xl border p-5 duration-300 ease-in-out xl:w-3/6 ${
            selectedRadio === index
              ? "border-b-4 border-blue-500"
              : "border-gray-300"
          }`}
          key={index}
        >
          <input
            type="radio"
            name="test"
            className="h-6 w-6"
            checked={selectedRadio === index}
            onChange={() => setSelectedRadio(index)}
          />
          <div className="ml-4">
            <h3 className="text-xl font-bold">{items.title}</h3>
            <p className="text-sm">Thời gian làm bài : {items.time}</p>
            <p className="mt-2 text-sm">{items.description}</p>
          </div>
        </label>
      ))}
      <div className="flex justify-center">
        <Button size="lg" className="my-10 bg-blue-500 text-white">
          Bắt đầu làm bài
        </Button>
      </div>
    </div>
  );
}
