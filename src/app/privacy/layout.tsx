import Footer from "@/components/footer";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"] });

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <html lang="en">
      <body className={font.className}>
        <div
          className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px]"
        >
          <ShowcaseNavbar />
          <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto  ">
            <h1 className="text-3xl">domain76 Privacy Policy</h1>
            <p className="text-gray-400">Updated on: October 10, 2024</p>
          </div>

          <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 mx-auto">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
