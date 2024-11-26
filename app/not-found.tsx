import Image from "next/image";
import Link from "next/link";

export default function Error404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* Hình ảnh 404 */}
        <div className="relative w-[500px] h-[500px] mx-auto">
          <Image
            src="/images/404.png"
            alt="404 Not Found"
            width={600}
            height={600}
          />
        </div>
        <p className="text-2xl font-semibold font-rubik  mt-4">
          Page Not Found
        </p>
        <p className="font-rubik mt-2">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <p className="inline-block mt-6 px-6 py-3 text-[18px] font-bold font-rubik text-white bg-gradient-top rounded-2xl hover:shadow-md 
          transform transition-transform duration-200 ease-in-out hover:translate-y-[-3px]">
            Back To Home
          </p>
        </Link>
      </div>
    </div>
  );
}
