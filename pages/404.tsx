// pages/404.js
import Image from "next/image";
import Link from "next/link";

export default function Error404() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        {/* Hình ảnh 404 */}
        <div className="relative w-64 h-64 mx-auto">
          <Image
            src="/images/404.png"
            alt="404 Not Found"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-2xl font-semibold font-rubik  mt-4">
          Oops! Page not found
        </p>
        <p className="font-rubik mt-2">The page you are looking for does not exist.</p>
        <Link href="/">
          <p className="inline-block mt-6 px-6 py-3 text-sm font-medium font-rubik text-white bg-gradient-top rounded hover:bg-gradient-bg">
            Go back to homepage
          </p>
        </Link>
      </div>
    </div>
  );
}
