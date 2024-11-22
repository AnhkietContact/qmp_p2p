import Image from "next/image";
import React from "react";

const Advantages = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className="flex flex-col items-center space-y-4">
        {Tages.map((item) => (
          <div
            key={item.id}
            className="flex flex-col space-y-2 py-2 "
            data-aos="fade-right"
          >
            <Image
              src={item.image}
              alt=""
              width={60}
              height={60}
              className=""
            />
            <span className="font-bold font-rubik text-[20px]">
              {item.title}
            </span>
            <span className="font-rubik text-[15px]">
              {item.description}
            </span>
          </div>
        ))}
      </div>

      <Image
        src="/images/Advantages.png"
        alt=""
        width={618}
        height={561}
        className="mt-10"
        data-aos="flip-right"
      />
    </div>
  );
};
export default Advantages;

const Tages = [
  {
    id: 1,
    image: "/images/icons/6.png",
    title: "Domestic and global markets",
    description:
      "While many other P2P platforms target specific markets, Binance P2P offers users a global trading experience by supporting over 70+ local currencies.",
  },
  {
    id: 2,
    image: "/images/icons/7.png",
    title: "Flexible payment methods",
    description:
      "Trusted by millions of users worldwide, QMP P2P provides a secure cryptocurrency trading platform with over 800 payment methods and over 100 fiat currencies. Users can easily buy, sell, and trade cryptocurrencies directly with other users, setting their preferred price and payment method in an open cryptocurrency marketplace.",
  },
  {
    id: 3,
    image: "/images/icons/8.png",
    title: "Trade at the price you want",
    description:
      "Trade cryptocurrencies with the freedom to buy and sell at the price you want. Buy or sell from existing offers or create a trade ad to set your own price.",
  },
];
