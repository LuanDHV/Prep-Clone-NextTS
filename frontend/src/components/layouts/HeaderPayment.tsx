import Image from "next/image";
import Link from "next/link";

export default function HeaderPayment() {
  return (
    <>
      <div className="flex h-20 items-center px-5 md:px-10">
        <Link href="/">
          <Image
            src="/imgs/header/logo.svg"
            alt="logo"
            width={130}
            height={37}
            className="mr-3 object-cover"
          />
        </Link>
        <p className="border-l border-blue-500 px-3 text-2xl font-bold text-blue-500 md:px-5">
          Thanh toán
        </p>
      </div>
    </>
  );
}
