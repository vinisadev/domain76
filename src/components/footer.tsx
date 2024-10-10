import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium ">
          <Image
            src={"/logo/logo.webp"}
            width={10000}
            height={10000}
            className="w-40"
            alt="image"
          />{" "}
        </h1>
        <p className="text-left  text-xl  text-gray-500">(346) 298-2112</p>
        <p className="text-left  text-xl  text-gray-500">info@domain76.com</p>
      </div>

      <div className="flex md:justify-center gap-x-4 mt-10">
        © 2024 domain76. All Rights Reserved.
        <Link href="/privacy" className="text-blue-500">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/terms" className="text-blue-500">
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link href="/refund" className="text-blue-500">
          Refund Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
