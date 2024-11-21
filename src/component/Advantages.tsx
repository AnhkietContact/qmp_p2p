import Image from "next/image";
import React from "react";

const Advantages = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center">
      <div className=" space-y-4">
        <div
          className="flex flex-col space-y-2"
          data-aos="fade-right"
         
        >
          <Image
            src="/images/icons/6.png"
            alt=""
            width={60}
            height={60}
            className=""
          />
          <span className="font-bold font-rubik text-[20px]">
            Domestic and global markets
          </span>
          <span className="font-rubik text-[15px]">
            While many other P2P platforms target specific markets, Binance P2P
            offers users a global trading experience by supporting over 70+
            local currencies.
          </span>
        </div>

        <div
          className="flex flex-col space-y-2"
          data-aos="fade-right"
         
        >
          <Image
            src="/images/icons/7.png"
            alt=""
            width={60}
            height={60}
            className=""
          />
          <span className="font-bold font-rubik text-[20px]">
            Flexible payment methods
          </span>
          <span className="font-rubik text-[15px]">
            Trusted by millions of users worldwide, QMP P2P provides a secure
            cryptocurrency trading platform with over 800 payment methods and
            over 100 fiat currencies. Users can easily buy, sell, and trade
            cryptocurrencies directly with other users, setting their preferred
            price and payment method in an open cryptocurrency marketplace.
          </span>
        </div>

        <div
          className="flex flex-col space-y-2"
          data-aos="fade-right"
         
        >
          <Image
            src="/images/icons/8.png"
            alt=""
            width={60}
            height={60}
            className=""
          />
          <span className="font-bold font-rubik text-[20px]">
            Trade at the price you want
          </span>
          <span className="font-rubik text-[15px]">
            Trade cryptocurrencies with the freedom to buy and sell at the price
            you want. Buy or sell from existing offers or create a trade ad to
            set your own price.
          </span>
        </div>
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
