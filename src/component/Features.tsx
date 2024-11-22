import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-x-5 lg:space-y-0 justify-items-center gap-6 p-4">
      {Explore.map((item) => (
        <div
          key={item.id}
          data-aos="zoom-in-down"
          className="flex flex-col items-center border-white border-2 rounded-xl shadow-lg px-5 py-5  "
        >
          <div className="w-20 h-20 mb-4">
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className=""
            />
          </div>
          <h3 className="font-semibold font-rubik text-[18px] md:text-[24px] text-white">
            {item.title}
          </h3>
          <div className="w-full max-w-[300px] md:max-w-[450px] text-center">
            <p className="text-[16px] font-rubik text-white mt-2">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;

const Explore = [
  {
    id: 1,
    image: "/images/icons/9.png",
    title: "Install The App",
    content:
      "Go to Google Play, or App Store to download the app on your phone.",
  },
  {
    id: 2,
    image: "/images/icons/10.png",
    title: "Create Your Account",
    content:
      "Create an account as a new user by clicking on Sign Up, and then fill in the necessary details.",
  },
  {
    id: 3,
    image: "/images/icons/11.png",
    title: "Start Exploring",
    content:
      "Now you can explore any of our features easily, and conveniently.",
  },
];
