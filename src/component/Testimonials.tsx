import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";

const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 space-y-5 lg:space-x-5 lg:space-y-0 justify-items-center gap-6 p-4">
      {Monials.map((item) => (
        <div
          key={item.id}
          data-aos="zoom-in-down"
          className="flex flex-col items-center bg-white border-2 rounded-xl shadow-lg px-5 py-5  "
        >
          {/* Avatar */}
          <div className=" mb-4">
            <Image
              src={item.image}
              alt={item.name}
              width={108}
              height={108}
              className=""
            />
          </div>

          {/* Name and Address */}
          <h3 className="font-semibold  text-[18px] md:text-[24px] font-rubik ">
            {item.name}
          </h3>
          <p className="text-[17px] font-rubik mb-2">{item.address}</p>

          {/* Rating */}
          <div className="flex justify-center mb-4">
            <Rating name="read-only" value={item.start} readOnly />
          </div>

          {/* Description */}
          <div className="w-full md:max-w-[500px] max-w-[300px] text-center">
            <p className="text-[16px] font-rubik mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;

const Monials = [
  {
    id: 1,
    image: "/images/icons/Avatar1.png",
    name: "Seyi Ajibona",
    address: "Lagos, Nigeria",
    start: 4,
    description:
      "The application is very easy to use, I can manage assets and make transactions in just a few steps. Very convenient and safe!",
  },
  {
    id: 2,
    image: "/images/icons/Avatar2.png",
    name: "Mike Johnson",
    address: "Abuja, Nigeria",
    start: 5,
    description:
      "QMP Wallet has very good security, the two-layer authentication feature helps me feel more secure when storing cryptocurrency.",
  },
  {
    id: 3,
    image: "/images/icons/Avatar3.png",
    name: "Shade Grace",
    address: "Lagos, Nigeria",
    start: 5,
    description:
      "The Swap feature is very useful, I can convert between cryptocurrencies quickly and without much fee.",
  },
];
