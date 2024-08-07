"use client";

export default function StudyPlant() {
  return (
    <div className="relative min-h-screen w-full">
      <img
        src="/imgs/learningdashboard/bg-dark.png"
        alt="bg-dark"
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="hidden md:block">
        <div className="absolute bottom-80 right-7 z-20 text-sm font-bold">
          <p> Hãy tưới mát cho mình </p>
          <p>bằng tri thức của bạn!</p>
        </div>
        <img
          src="/imgs/learningdashboard/buble.png"
          alt="buble"
          className="absolute bottom-72 right-6 w-40 object-cover"
        />
        <img
          src="/imgs/learningdashboard/plant-2.svg"
          alt="plant-2"
          className="absolute bottom-20 right-8 z-10 w-40 object-cover"
        />
        <img
          src="/imgs/learningdashboard/block-top-dark.png"
          alt="block-top-dark"
          className="absolute bottom-20 left-32 z-10 w-2/6"
        />
        <img
          src="/imgs/learningdashboard/bottom-block-dark.png"
          alt="bottom-block-dark"
          className="absolute bottom-0 object-cover"
        />
      </div>
    </div>
  );
}
