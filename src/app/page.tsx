"use client";

import Image from "next/image";
import LogoImage from "../public/logo/logo.webp";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { GoogleReviews } from "@/components/demos/google-reviews";
import { CoverSection } from "@/components/demos/cover-section";

export default function Home() {
  return (
    <div
      className="overflow-clip inset-0 -z-10 h-screen w-full bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px]"
    >
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={LogoImage}
            alt="Logo"
            height={1000}
            width={1000}
            className="w-28"
          />
        </Link>
        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarantee"
              smooth={true}
              className="hover:text-blue-500"
            >
              Gurantee
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:+13462982112" className="hidden xl:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (346) 298-2112
            </button>
          </a>
          <Link
            href={"/meeting"}
            className="px-6 py-3 rounded-[6px] border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a Call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <GoogleReviews />
        </div>
        <h1>
          <CoverSection />
        </h1>
        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
          Schedule a call with us to discuss your project and get a quote.
        </p>
        <div className="flex md:justify-center items-center gap-x-4">
          <Link
            href="/meeting"
            className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Book a Call
          </Link>
          <Link
            href={"/showcase"}
            className="bg-white py-3 px-10 md:px-16 md:text-xl border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Showcase
          </Link>
        </div>
      </main>
    </div>
  );
}
